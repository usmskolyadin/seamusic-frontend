'use client';

import s from './Prefer.module.scss';
import { PreferItem } from '@/shared/ui';
import { TEXT } from '@/shared/constants/constants';

type TagType = {
	id: string;
	tag_name: string;
};

type PreferProps = {
	tags: TagType[];
};

export function Prefer({ tags }: PreferProps) {
	return (
		<div className={s.preferWrapper}>
			<div className={s.preferTitle}>{TEXT.YouPrefer}</div>
			<div className={s.prefer}>
				{tags.map((el) => (
					<PreferItem key={el.id} name={el.tag_name} />
				))}
			</div>
		</div>
	);
}
