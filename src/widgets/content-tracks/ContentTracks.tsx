import { TrackItem } from '@/shared/ui/track-item/TrackItem';
import s from './ContentTracks.module.scss';
import { ContentTitle } from '@/shared/ui';
import {
	ContentTracksData,
	TRACK_ITEM_TITLE,
	TRACK_ITEMS,
} from '@/shared/constants/constants';

export const ContentTracks = () => {
	return (
		<div className={s.wrapper}>
			<ContentTitle data={ContentTracksData} />
			<div className={s.contentMain}>
				<TrackItem data={TRACK_ITEM_TITLE} />
				<div className={s.contentItems}>
					{TRACK_ITEMS.map((item) => (
						<TrackItem key={item.number} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};
