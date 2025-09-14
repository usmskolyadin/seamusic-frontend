import Image, { StaticImageData } from 'next/image';
import s from './TrackItem.module.scss';
import { Tag } from '../tag/Tag';

export type TrackItemType = {
	number: string;
	cover: {
		title: string;
		cover?: StaticImageData;
	};
	name: {
		title: string;
		author?: string;
	};
	album: string;
	listens: string;
	playTime: string;
	like: string;
	trackUrl?: string;
	isTitle?: boolean;
};

type TrackItemProps = {
	data: TrackItemType;
};
export const TrackItem = ({ data }: TrackItemProps) => {
	if (data.isTitle) return null;

	return (
		<div className={s.trackItem}>
			<div className={s.cover}>
				{data.cover.cover && (
					<Image
						src={data.cover.cover}
						alt={data.cover.title}
						className={s.coverImg}
					/>
				)}
			</div>

			<div className={s.infoColumn}>
				<div className={s.nameRow}>
					<div className={s.title}>{data.name.title}</div>
					{data.name.author && <div className={s.author}>{data.name.author}</div>}
				</div>

				<div className={s.detailsRow}>
					<div className={s.album}>{data.album} |</div>
					<div className={s.listens}>Listens {data.listens} |</div>
					<div className={s.playTime}>{data.playTime}</div>
					<div className={s.like}>{data.like}</div>
				</div>

				<div className={s.tagsWrapper}>
					<Tag id={'1'} value={'jazz'} />
					<Tag id={'1'} value={'osamason'} />
					<Tag id={'1'} value={'toxi$'} />
				</div>
			</div>
		</div>
	);
};
