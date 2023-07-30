import { Averlist } from '@averlistApi/types'
import { axios } from '@averlistApi/averlist'
import { GetAllCollectionsQueries } from '@averlistApi/entities/collections/types'
import { queryParamsString } from '@helpers/queryParamsString'

export const collections = {
	async my(accessToken = ''): Promise<Averlist.Collection[]> {
		const response = await axios.get<Averlist.Collection[]>('/collection/my', {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		})
		return response.data
	},
	async all(params: GetAllCollectionsQueries): Promise<Averlist.Collection[]> {
		const queryString = queryParamsString(params)

		const response = await axios.get<Averlist.Collection[]>(
			`/collection/all${queryString}`
		)
		return response.data
	},
	async myFavorites(accessToken = ''): Promise<Averlist.Collection[]> {
		const response = await axios.get<Averlist.Collection[]>(
			'/collection/my-favorites',
			{
				headers: {
					Authorization: `Bearer ${accessToken}`
				}
			}
		)
		return response.data
	},
	async getById(
		collectionId: string,
		accessToken = ''
	): Promise<Averlist.Collection> {
		const response = await axios.get<Averlist.Collection>(
			`/collection/${collectionId}`,
			{ headers: { token: accessToken } }
		)

		return response.data
	},
	async create(
		newCollection: Averlist.NewCollection
	): Promise<Averlist.Collection> {
		const formData = new FormData()

		for (const key in newCollection) {
			// @ts-ignore
			formData.set(key, newCollection[key])
		}

		const response = await axios.post<Averlist.Collection>(
			'/collection',
			formData
		)
		return response.data
	},
	async addFavorite(collectionId: string): Promise<Averlist.Collection> {
		const response = await axios.post<Averlist.Collection>(
			`/collection/add-favorite/${collectionId}`
		)
		return response.data
	},
	async addPoster(
		poster: File,
		collectionId: string
	): Promise<Averlist.Collection> {
		const formData = new FormData()
		formData.set('poster', poster)

		const response = await axios.patch<Averlist.Collection>(
			`/collection/add-poster/${collectionId}`,
			formData
		)
		return response.data
	},
	async editCollection(
		editCollection: Averlist.EditCollection,
		collectionId: string
	): Promise<Averlist.Collection> {
		const response = await axios.patch<Averlist.Collection>(
			`/collection/${collectionId}`,
			editCollection
		)
		return response.data
	},
	async removeFavorite(collectionId: string): Promise<Averlist.Collection> {
		const response = await axios.delete<Averlist.Collection>(
			`/collection/remove-favorite/${collectionId}`
		)
		return response.data
	},
	async remove(collectionId: string): Promise<Averlist.Collection> {
		const response = await axios.delete<Averlist.Collection>(
			`/collection/${collectionId}`
		)
		return response.data
	}
}
