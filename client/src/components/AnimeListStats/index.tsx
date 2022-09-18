import { observer } from 'mobx-react-lite'
import classNames from 'classnames'
import { FC } from 'react'

import styles from './Stats.module.scss'
import { Flex } from '@components/Flex'
import { Averlist } from '@averlistApi/types'
import { ProgressBarItem } from '@components/AnimeListStats/components/ProgressBarItem'
import { ProgressItemCounter } from '@components/AnimeListStats/components/ProgressItemCounter'
import AnimeStatus = Averlist.AnimeStatus

interface AnimeListStatsProps {
	backgroundColor: string
	padding: string
	animeList: Averlist.Anime[]
}

export const AnimeListStats: FC<AnimeListStatsProps> = observer(
	({ padding, backgroundColor, animeList }) => {
		return (
			<Flex
				customClassName={styles.stats}
				backgroundColor={backgroundColor}
				padding={padding}
			>
				<Flex flexDirection='column' width='100%'>
					<Flex
						width='100%'
						justifyContent='space-between'
						flexWrap='wrap'
						alignItems='center'
					>
						<p className={classNames(styles.property, styles.viewed)}>
							Просмотрено
						</p>
						<p className={classNames(styles.property, styles.look)}>Смотрю</p>
						<p className={classNames(styles.property, styles.planned)}>
							Запланировано
						</p>
						<p className={classNames(styles.property, styles.reconsidering)}>
							Пересматриваю
						</p>
						<p className={classNames(styles.property, styles.comingOut)}>
							Выходит
						</p>
						<p className={classNames(styles.property, styles.abandoned)}>
							Заброшено
						</p>
					</Flex>
					<Flex
						customClassName={styles.publicProgressBar}
						margin='10px 0 0 0'
						width='100%'
					>
						<ProgressBarItem
							animeStatus={AnimeStatus.VIEWED}
							animeList={animeList}
						/>
						<ProgressBarItem
							animeStatus={AnimeStatus.LOOK}
							animeList={animeList}
						/>
						<ProgressBarItem
							animeStatus={AnimeStatus.PLANNED}
							animeList={animeList}
						/>
						<ProgressBarItem
							animeStatus={AnimeStatus.RECONSIDERING}
							animeList={animeList}
						/>
						<ProgressBarItem
							animeStatus={AnimeStatus.COMING_OUT}
							animeList={animeList}
						/>
						<ProgressBarItem
							animeStatus={AnimeStatus.ABANDONED}
							animeList={animeList}
						/>
					</Flex>
					<Flex flexDirection='column' margin='10px 0 0 0'>
						<ProgressItemCounter
							animeStatus={AnimeStatus.VIEWED}
							animeList={animeList}
						/>
						<ProgressItemCounter
							animeStatus={AnimeStatus.LOOK}
							animeList={animeList}
						/>
						<ProgressItemCounter
							animeStatus={AnimeStatus.PLANNED}
							animeList={animeList}
						/>
						<ProgressItemCounter
							animeStatus={AnimeStatus.RECONSIDERING}
							animeList={animeList}
						/>
						<ProgressItemCounter
							animeStatus={AnimeStatus.COMING_OUT}
							animeList={animeList}
						/>
						<ProgressItemCounter
							animeStatus={AnimeStatus.ABANDONED}
							animeList={animeList}
						/>
					</Flex>
				</Flex>
			</Flex>
		)
	}
)
