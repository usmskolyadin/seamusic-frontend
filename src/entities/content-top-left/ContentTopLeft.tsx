import s from './ContentTopLeft.module.scss';
import { Tag, TopImage } from '@/shared/ui';
import { StaticImageData } from 'next/image';
import img001 from '@/shared/assets/images/foto001.png';
import img002 from '@/shared/assets/images/foto002.png';

type IdValue = {
	id: string;
	value: string;
};

type TagsType = Record<string, IdValue[]>;

type ImgData = {
	id: string;
	value: string;
	image: StaticImageData;
};

type TopImages = {
	id: string;
	data: ImgData;
};

const TAGS: TagsType = {
	contentTopLeftTags: [
		{ id: '001', value: 'lyrics' },
		{ id: '002', value: 'memories' },
		{ id: '003', value: 'pop' },
	],
};

const CONTENT_TOP_LEFT_IMAGES: Array<TopImages> = [
	{
		id: '001',
		data: {
			id: '001',
			value: 'For You: Beats',
			image: img001,
		},
	},
	{
		id: '002',
		data: {
			id: '002',
			value: 'For You: Tracks',
			image: img002,
		},
	},
];

export const ContentTopLeft = () => {
	return (
		<div className={s.contentTopLeft}>
			<div className={s.blockText}>
				<div className={s.blockTitle}>
					<div className={s.title}>Find inspiration</div>
					<div className={s.desription}>Today’s theme</div>
				</div>
				<div className={s.blockTags}>
					{TAGS.contentTopLeftTags.map((el) => (
						<Tag key={el.id} id={el.id} value={el.value} />
					))}
				</div>
			</div>
			<div className={s.blockImages}>
				{CONTENT_TOP_LEFT_IMAGES.map((el) => (
					<TopImage
						key={el.id}
						id={el.data.id}
						value={el.data.value}
						image={el.data.image}
					/>
				))}
			</div>
		</div>
	);
};
