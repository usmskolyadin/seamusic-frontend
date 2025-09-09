import { ContentTopLeft, ContentTopRight } from '@/entities';
import s from './ContentTop.module.scss';

export const ContentTop = () => {
	return (
		<div className={s.contentTop}>
			<ContentTopLeft />
			<ContentTopRight />
		</div>
	);
};
