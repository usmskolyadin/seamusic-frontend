import s from './ContentTitle.module.scss';

type ContentTitleType = {
	left: string;
	right: string;
};

type ContentTitleProps = {
	data: ContentTitleType;
};

export const ContentTitle = ({ data }: ContentTitleProps) => {
	return (
		<div className={s.title}>
			<div className={s.left}>{data.left}</div>
			<div className={s.right}>{data.right}</div>
		</div>
	);
};
