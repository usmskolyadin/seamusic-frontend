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
			<div className={s.right}>
				<svg width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M175 419L338 256L175 93" stroke="white" stroke-width="64" stroke-linecap="round"/>
				</svg>
			</div>
		</div>
	);
};
