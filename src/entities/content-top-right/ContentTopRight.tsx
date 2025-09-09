import Image from 'next/image';
import imgMain from '@/shared/assets/images/foto003.png';
import s from './ContentTopRight.module.scss';

export const ContentTopRight = () => {
	return (
		<div className={s.contentTopRight}>
			<Image src={imgMain} alt="" className={s.mainImage} />
			<div className={s.blockText}>
				<div className={s.textSmall}>Concert</div>
				<div className={s.textBig}>Salaskbron</div>
			</div>
			<div className={s.calendar}>
				<div className={s.month}>oct</div>
				<div className={s.date}>29</div>
			</div>
		</div>
	);
};
