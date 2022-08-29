import { NextPage } from 'next'
import { Schedule, Title } from '@anilibriaApi/types'
import { MainAnimeSlider } from './components/MainAnimeSlider'
import { HomeMobile } from '@pages/Home/components/HomeMobile'
import { HomeDesktop } from '@pages/Home/components/HomeDesktop'
import { reverseArray } from '@helpers/reverseArray'
import { Meta } from '@utils/Meta'

interface HomeProps {
	updatesTitleList: Title[]
	changesTitleList: Title[]
	firstFiveTitles: Title[]
	scheduleOfWeek: Schedule[]
}

export const Home: NextPage<HomeProps> = ({
	updatesTitleList,
	changesTitleList,
	firstFiveTitles,
	scheduleOfWeek
}) => {
	const reversedUpdatesTitleList = reverseArray(updatesTitleList)

	return (
		<div>
			<Meta
				title='Averlist'
				description='Смотри своё любимое аниме вместе с друзьями!'
			/>
			{/* MainAnimeSlider only for desktop */}
			<MainAnimeSlider titleList={firstFiveTitles} />
			<HomeDesktop
				changesTitleList={changesTitleList}
				reversedUpdatesTitleList={reversedUpdatesTitleList}
				scheduleOfWeek={scheduleOfWeek}
			/>
			<HomeMobile titleList={changesTitleList} />
		</div>
	)
}
