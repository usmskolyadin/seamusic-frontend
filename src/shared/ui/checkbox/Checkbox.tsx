'use client';

import { ChangeEvent, useState } from 'react';
import s from './Checkbox.module.scss';

type Props = {
	figure?: 'round';
	filling?: 'empty';
};

export const Checkbox = ({ figure, filling }: Props) => {
	const [isDisabled, setIsDisabled] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const curStyle = `${s.checkboxInput} ${figure && s[figure]} ${filling && s[filling]}`;

	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(event.target.checked);
	};

	return (
		<div className={s.checkbox}>
			<input
				type="checkbox"
				className={curStyle}
				disabled={isDisabled}
				checked={isChecked}
				onChange={handleCheckboxChange}
			/>
		</div>
	);
};
