import s from './Divider.module.scss';

type DividerProps = {
	text: string;
};

export const Divider = ({ text }: DividerProps) => {
	return (
		<div className={s.formDivider}>
			<div className={s.formLine}></div>
			<div className={s.dividerText}>{text}</div>
			<div className={s.formLine}></div>
		</div>
	);
};
