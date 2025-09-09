import Image, { StaticImageData } from 'next/image';
import s from './TrackItem.module.scss';

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
	return data.isTitle ? (
		<div className={s.trackItemTitle}>
			<div className={s.number}>{data.number}</div>
			<div className={s.cover}>{data.cover.title}</div>
			<div className={s.name}>{data.name.title}</div>
			<div className={s.album}>{data.album}</div>
			<div className={s.listens}>{data.listens}</div>
			<div className={s.playTime}>{data.playTime}</div>
			<div className={s.like}>{data.like}</div>
		</div>
	) : (	
		<div className={s.trackItem}>
			<div className={s.number}>{data.number}</div>
			<div className={s.cover}>
				{data.cover.cover && (
					<Image
						src={data.cover.cover}
						alt={data.cover.title}
						role="presentation"
						className={s.coverImg}
					/>
				)}
			</div>
			<div className={s.name}>
				<div className={s.title}>{data.name.title}</div>
				{data.name.author && <div className={s.author}>{data.name.author}</div>}
			</div>
			<div className={s.album}>{data.album}</div>
			<div className={s.listens}>{data.listens}</div>
			<div className={s.playTime}>{data.playTime}</div>
			<div className={s.like}>{data.like}</div>
		</div>
	);
};
