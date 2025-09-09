import Image, { StaticImageData } from 'next/image';
import s from './TopImage.module.scss';

type ImgData = {
	id: string;
	value: string;
	image: StaticImageData;
};

export const TopImage = ({ value, image }: ImgData) => {
	return (
		<div className={s.topImage}>
			<Image src={image} alt="" role="presentation" className={s.image} />
			<div className={s.topImageTextWrapper}>
				<div className={s.topImageText}>{value}</div>
			</div>
			<div className={s.arrowTop} />
		</div>
	);
};
