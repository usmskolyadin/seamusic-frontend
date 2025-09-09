import s from './Tag.module.scss';

export type TagProps = {
	id: string;
	value: string;
};

export const Tag = ({ value }: TagProps) => {
	return <div className={s.tag}>{`#${value}`}</div>;
};
