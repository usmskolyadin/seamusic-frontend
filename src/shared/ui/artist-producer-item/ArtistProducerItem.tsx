import Image, { StaticImageData } from 'next/image';
import s from './ArtistProducerItem.module.scss';
import { Tag, TagProps } from '../tag/Tag';

type ArtistItemType = {
	id: string;
	photo: StaticImageData;
	name: string;
	text: string;
	tags: TagProps[];
};

type ArtistItemProps = {
	data: ArtistItemType;
};

export const ArtistProducerItem = ({ data }: ArtistItemProps) => {
	return (
		<div className={s.artist}>
			<div className={s.photoArtist}>
				<Image
					src={data.photo}
					alt={data.name}
					role="presentation"
					className={s.photo}
				/>
			</div>
			<div className={s.addSection}>
				<div className={s.textWrapper}>
					<div className={s.tags}>
						{data.tags.map((el) => (
							<Tag key={el.id} id={el.id} value={el.value} />
						))}
					</div>
					<div className={s.text}>{data.text}</div>
				</div>
			</div>
			<div className={s.name}>{data.name}</div>
		</div>
	);
};
