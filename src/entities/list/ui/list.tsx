import s from './list.module.scss';
import { ListProps } from '../types/type';
import { ListItem } from '@/shared/ui';

export const List = ({ items, listName }: ListProps) => {
	const listItems = items.map((el, idx) => {
		return (
			<div key={idx} className={s.list_element}>
				<ListItem title={el} />
			</div>
		);
	});

	return (
		<div className={s.list_wrapper}>
			<p className={s.list_name}>{listName}</p>
			<details className={s.list_box}>
				<summary className={s.list_label}>{listName}</summary>
				<div className={s.list_select}>{listItems}</div>
			</details>
		</div>
	);
};
