import type { MainButtonProps } from '../type';
import styles from './main-button.module.scss';

export const MainBtn = ({
	children,
	IconLeft,
	IconRight,
	variant,
	...props
}: MainButtonProps) => {
	const getClassnameForType = (
		buttonType: 'text' | 'secondary' | 'primary' | 'arrowBtn' | 'blackWhite'
	) => {
		switch (buttonType) {
			case 'primary':
				return styles.buttonPrimary;
			case 'secondary':
				return styles.buttonSecondary;
			case 'text':
				return styles.buttonText;
			case 'blackWhite':
				return styles.buttonBlackWhite;
			default:
				return '';
		}
	};

	return (
		<button className={`${getClassnameForType(variant)}`} {...props}>
			<div className={styles.buttonContainer}>
				{IconLeft && <IconLeft className={styles.icon} />}
				{children}
				{IconRight && <IconRight className={styles.icon} />}
			</div>
		</button>
	);
};
