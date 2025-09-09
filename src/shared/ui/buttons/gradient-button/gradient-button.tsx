'use client';

import { GradientButtonProps } from '../type';
import s from './gradient-button.module.scss';
import { useRouter } from 'next/navigation';

export const GradientButton = ({
	children,
	to,
	handler,
}: GradientButtonProps) => {
	const router = useRouter();
	const handlerClick = () => {
		handler && handler();
		to && router.push(to);
	};

	return (
		<div className={s.btnLink}>
			<div className={s.btnGradient} role="presentation" onClick={handlerClick}>
				<div className={s.btnText}>{children}</div>
			</div>
		</div>
	);
};
