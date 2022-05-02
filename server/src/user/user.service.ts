import { BadRequestException, Injectable } from '@nestjs/common'
import * as mongoose from 'mongoose'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Express } from 'express'

import { User, UserDocument } from './user.schema'
import { NOT_FOUND_USER_ON_ID_ERROR } from './user.constants'

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User.name) private readonly userModel: Model<UserDocument>
	) {}

	public async getAllUsers() {
		const users = await this.userModel.aggregate([
			{
				$lookup: {
					from: 'animes',
					foreignField: 'userId',
					localField: '_id',
					as: 'animeList'
				}
			},
			{
				$lookup: {
					from: 'users',
					foreignField: '_id',
					localField: 'friendList',
					as: 'friendList'
				}
			},
			{
				$project: {
					_id: 1,
					login: 1,
					animeList: 1,
					description: 1,
					avatar: 1,
					friendList: 1
				}
			}
		])

		const allUsers = {
			users,
			count: await this.userModel.countDocuments()
		}
		return allUsers
	}
	public async getUserById(id: string) {
		const hasUser = await this.userModel.findOne({ _id: id })
		if (!hasUser) throw new BadRequestException(NOT_FOUND_USER_ON_ID_ERROR)

		const user = await this.userModel.aggregate([
			{
				$match: { _id: new mongoose.Types.ObjectId(id) }
			},
			{
				$lookup: {
					from: 'animes',
					foreignField: 'userId',
					localField: '_id',
					as: 'animeList'
				}
			},
			{
				$lookup: {
					from: 'users',
					foreignField: '_id',
					localField: 'friendList',
					as: 'friendList'
				}
			},
			{
				$project: {
					_id: 1,
					login: 1,
					animeList: 1,
					description: 1,
					avatar: 1,
					friendList: 1
				}
			}
		])

		return user
	}
	public async getMe(id: string) {
		const user = this.userModel.aggregate([
			{
				$match: { _id: new mongoose.Types.ObjectId(id) }
			},
			{
				$lookup: {
					from: 'animes',
					foreignField: 'userId',
					localField: '_id',
					as: 'animeList'
				}
			},
			{
				$lookup: {
					from: 'users',
					foreignField: '_id',
					localField: 'friendList',
					as: 'friendList'
				}
			},
			{
				$lookup: {
					from: 'invitations',
					let: { userId: '$_id' },
					pipeline: [
						{
							$match: {
								$expr: {
									$eq: ['$invitedUser', '$$userId']
								}
							}
						},
						{
							$lookup: {
								from: 'users',
								let: { senderUser: '$senderUser' },
								pipeline: [
									{
										$match: {
											$expr: {
												$eq: ['$_id', '$$senderUser']
											}
										}
									}
								],
								as: 'senderUser'
							}
						},
						{
							$lookup: {
								from: 'users',
								let: { invitedUser: '$invitedUser' },
								pipeline: [
									{
										$match: {
											$expr: {
												$eq: ['$_id', '$$invitedUser']
											}
										}
									}
								],
								as: 'invitedUser'
							}
						}
					],
					as: 'meInvitations'
				}
			},
			{
				$lookup: {
					from: 'invitations',
					let: { userId: '$_id' },
					pipeline: [
						{
							$match: {
								$expr: {
									$eq: ['$senderUser', '$$userId']
								}
							}
						},
						{
							$lookup: {
								from: 'users',
								let: { senderUser: '$senderUser' },
								pipeline: [
									{
										$match: {
											$expr: {
												$eq: ['$_id', '$$senderUser']
											}
										}
									}
								],
								as: 'senderUser'
							}
						},
						{
							$lookup: {
								from: 'users',
								let: { invitedUser: '$invitedUser' },
								pipeline: [
									{
										$match: {
											$expr: {
												$eq: ['$_id', '$$invitedUser']
											}
										}
									}
								],
								as: 'invitedUser'
							}
						}
					],
					as: 'myInvitations'
				}
			},
			{
				$project: {
					_id: 1,
					login: 1,
					email: 1,
					animeList: 1,
					description: 1,
					avatar: 1,
					friendList: 1,
					meInvitations: 1,
					myInvitations: 1
				}
			}
		])
		return user
	}
	public async editDescriptionAndLogin(
		description: string,
		login: string,
		id: string
	) {
		const currentUser = await this.userModel.findById(id)
		currentUser.description = description
		if (login) currentUser.login = login
		return currentUser.save()
	}
	public async uploadAvatar(avatar: Express.Multer.File, id: string) {
		const currentUser = await this.userModel.findById(id)
		currentUser.avatar = avatar.filename
		return currentUser.save()
	}
	public async removeAvatar(id: string) {
		const currentUser = await this.userModel.findById(id)
		currentUser.avatar = ''
		return currentUser.save()
	}
	public async removeFriend(myId: string, friendId: string) {
		const me = await this.userModel.findById(myId)
		const friend = await this.userModel.findById(friendId)

		const myFriendList = me.friendList
			.map(friendId => String(friendId))
			.filter(friendIdTwo => friendIdTwo !== friendId)
		me.friendList = myFriendList
		await me.save()

		const anotherFriendList = friend.friendList
			.map(friendId => String(friendId))
			.filter(friendId => friendId !== myId)
		friend.friendList = anotherFriendList
		await friend.save()

		return { myId, friendId }
	}
}