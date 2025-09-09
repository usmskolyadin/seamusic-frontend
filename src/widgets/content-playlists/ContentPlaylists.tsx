import s from './ContentPlaylists.module.scss';
import playlistItemImg from '@/shared/assets/images/Playlist_item_01.png';
import { ContentTitle } from '@/shared/ui';
import { ContentPlaylistsData } from '@/shared/constants/constants';
import { PlaylistItem } from '@/entities';

const PLAYLIST_ITEMS = [
	{
		id: '1',
		photo: playlistItemImg,
		title1: 'High Energy Hits',
		title2: 'by ElectroFunk',
	},
	{
		id: '2',
		photo: playlistItemImg,
		title1: 'High Energy Hits',
		title2: 'by ElectroFunk',
	},
	{
		id: '3',
		photo: playlistItemImg,
		title1: 'High Energy Hits',
		title2: 'by ElectroFunk',
	},
	{
		id: '4',
		photo: playlistItemImg,
		title1: 'High Energy Hits',
		title2: 'by ElectroFunk',
	},
	{
		id: '5',
		photo: playlistItemImg,
		title1: 'High Energy Hits',
		title2: 'by ElectroFunk',
	},
];

export const ContentPlaylists = () => {
	return (
		<div className={s.wrapper}>
			<ContentTitle data={ContentPlaylistsData} />
			<div className={s.contentMain}>
				<div className={s.contentItems}>
					{PLAYLIST_ITEMS.map((item) => (
						<PlaylistItem key={item.id} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};
