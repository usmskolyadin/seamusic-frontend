import { TEXT } from '@/shared/constants/constants';
import s from './MainLogo.module.scss';
import Image from 'next/image';
import navImgSrc from '@/shared/assets/images/seamusiс-logo.png';

export const MainLogo = () => {
	return (
		<div className={s.mainLogo}>
			<div className={s.logoImageWrapper}>
				<Image src={navImgSrc} alt="Logo" fill className={s.mainLogoImage} />
			</div>
			<span className={s.logoTextWrapper}>{TEXT.LogoTitle}</span>
		</div>
	);
};
