import s from './ContentAlbums.module.scss';
import albumItemImg from '@/shared/assets/images/Album_item_01.png';
import { ContentTitle } from '@/shared/ui';
import { ContentAlbumsData } from '@/shared/constants/constants';
import { AlbumItem } from '@/entities';

const ALBUM_ITEMS = [
	{
		id: '1',
		photo: albumItemImg,
		title: 'Urban Pulse',
		title1: 'DJ Tempo',
		title2: 'BeatRise',
		plays: '317',
	},
	{
		id: '2',
		photo: albumItemImg,
		title: 'Urban Pulse',
		title1: 'DJ Tempo',
		title2: 'BeatRise',
		plays: '317',
	},
	{
		id: '3',
		photo: albumItemImg,
		title: 'Urban Pulse',
		title1: 'DJ Tempo',
		title2: 'BeatRise',
		plays: '317',
	},
	{
		id: '4',
		photo: albumItemImg,
		title: 'Urban Pulse',
		title1: 'DJ Tempo',
		title2: 'BeatRise',
		plays: '317',
	},
	{
		id: '5',
		photo: albumItemImg,
		title: 'Urban Pulse',
		title1: 'DJ Tempo',
		title2: 'BeatRise',
		plays: '317',
	},
];

export const ContentAlbums = () => {
	return (
		<div className={s.wrapper}>
			<ContentTitle data={ContentAlbumsData} />
			<div className={s.contentMain}>
				<div className={s.contentItems}>
					{ALBUM_ITEMS.map((item) => (
						<AlbumItem key={item.id} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};
