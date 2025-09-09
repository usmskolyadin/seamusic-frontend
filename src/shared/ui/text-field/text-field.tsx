'use client';

import { TextFieldProps } from './type';
import s from './text-field.module.scss';
import { ChangeEvent, useState } from 'react';

export const TextField = ({
	name,
	placeholder = 'Text input',
	text,
	hint,
	status,
	IconLeft,
	IconRight,
}: TextFieldProps) => {
	const [value, setValue] = useState(text ? text : '');

	const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const curStyle = `${s.textField} ${status && s[status]}`;

	return (
		<div className={curStyle}>
			{name && <div className={s.name}>{name}</div>}
			<div className={s.inputWrapper}>
				<input
					type="text"
					placeholder={placeholder}
					className={s.inputText}
					value={value}
					onChange={handlerInput}
				/>
				<div className={s.inputColorField} />
				{IconLeft && <IconLeft className={s.iconLeft} />}
				{IconRight && <IconRight className={s.iconRight} />}
			</div>
			{hint && <div className={s.hint}>{hint}</div>}
		</div>
	);
};
