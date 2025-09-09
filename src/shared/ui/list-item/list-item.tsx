import { ListItemProps } from './type';
import Link from 'next/link';
import s from './list-item.module.scss';

export const ListItem = ({
	title,
	link,
	IconLeft,
	IconRight,
}: ListItemProps) => {
	return (
		<div className={s.container}>
			{IconLeft && <IconLeft className={s.icon} />}
			<Link href={`${link}`} className={s.link}>
				{title}
			</Link>
			{IconRight && <IconRight className={s.icon} />}
		</div>
	);
};
