import s from './ContentBeatpacks.module.scss';
import beatpackItemImg from '@/shared/assets/images/Beatpack_item_01.png';
import { BeatpackItem, ContentTitle } from '@/shared/ui';
import { ContentBeatpacksData } from '@/shared/constants/constants';

const BEATPACK_ITEMS = [
	{
		id: '1',
		photo: beatpackItemImg,
		title1: 'Moody Nights',
		title2: 'NeoBeats',
		plays: '512',
		duration: '2:36',
	},
	{
		id: '2',
		photo: beatpackItemImg,
		title1: 'Moody Nights',
		title2: 'NeoBeats',
		plays: '512',
		duration: '2:36',
	},
	{
		id: '3',
		photo: beatpackItemImg,
		title1: 'Moody Nights',
		title2: 'NeoBeats',
		plays: '512',
		duration: '2:36',
	},
	{
		id: '4',
		photo: beatpackItemImg,
		title1: 'Moody Nights',
		title2: 'NeoBeats',
		plays: '512',
		duration: '2:36',
	},
	{
		id: '5',
		photo: beatpackItemImg,
		title1: 'Moody Nights',
		title2: 'NeoBeats',
		plays: '512',
		duration: '2:36',
	},
];

export const ContentBeatpacks = () => {
	return (
		<div className={s.wrapper}>
			<ContentTitle data={ContentBeatpacksData} />
			<div className={s.contentMain}>
				<div className={s.contentItems}>
					{BEATPACK_ITEMS.map((item) => (
						<BeatpackItem key={item.id} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};
