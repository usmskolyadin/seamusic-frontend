import Image, { StaticImageData } from 'next/image';
import s from './BeatpackItem.module.scss';
import { TEXT } from '@/shared/constants/constants';

type BeatpackItemType = {
	id: string;
	photo: StaticImageData;
	title1: string;
	title2: string;
	plays: string;
	duration: string;
};

type BeatpackItemProps = {
	data: BeatpackItemType;
};

export const BeatpackItem = ({ data }: BeatpackItemProps) => {
	return (
		<div className={s.beatpack}>
			<div className={s.photoBeatpack}>
				<Image
					src={data.photo}
					alt={data.title1}
					role="presentation"
					className={s.photo}
				/>
				<div className={s.beatpackData}>
					<div className={s.data}>
						<div className={s.dataValue}>{data.title1}</div>
					</div>
					<div className={s.data}>
						<div className={s.dataValue}>{data.title2}</div>
					</div>
				</div>
			</div>
			<div className={s.beatpackData}>
				<div className={s.data}>
					<div className={s.dataKey}>{TEXT.Plays}</div>
					<div className={s.dataValue}>{data.plays}</div>
				</div>
				<div className={s.data}>
					<div className={s.dataKey}>{TEXT.Duration}</div>
					<div className={s.dataValue}>{data.duration}</div>
				</div>
			</div>
		</div>
	);
};
