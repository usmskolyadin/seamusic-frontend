import Link from 'next/link';
import s from './FormTitle.module.scss';

export type FormTitleType = {
	left: string;
	right: string;
};

type FormTitleProps = {
	data: FormTitleType;
};

export const FormTitle = ({ data }: FormTitleProps) => {
	return (
		<div className={s.formTitle}>
			<div className={s.titleLeft}>{data.left}</div>
			<Link href={"/"}>
				<div className={s.titleRight}>{data.right}</div>
			</Link>
		</div>
	);
};
