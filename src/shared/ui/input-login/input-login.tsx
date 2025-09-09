import Link from 'next/link';
import s from './input-login.module.scss';
import { ChangeEvent } from 'react';
import { InputLoginKeyType } from '@/widgets/register-form/RegisterForm';

export type InputType = 'text' | 'password';

export type InputLoginProps = {
	type: InputType;
	header?: string;
	placeholder?: string;
	footer?: string;
	footerTo?: string;
	icon?: React.FC<React.SVGProps<SVGSVGElement>>;
	id?: InputLoginKeyType;
	value?: string;
	handler?: (id: InputLoginKeyType, value: string) => void;
};

export const InputLogin = ({
	type,
	header,
	placeholder = '',
	footer,
	footerTo,
	icon: Icon,
	id,
	value,
	handler,
}: InputLoginProps) => {
	const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const curValue = e.target.value;
		handler && id && handler(id, curValue);
	};

	return (
		<div className={s.loginInput}>
			{header && <div className={s.inputHeader}>{header}</div>}
			<input
				className={s.formInput}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handlerOnChange}
			/>
			{footer && footerTo && (
				<div className={s.inputFooterLink}>
					<Link href={footerTo} className={s.linkUnderline}>
						{footer}
					</Link>
				</div>
			)}
			{footer && !footerTo && <div className={s.inputFooterText}>{footer}</div>}
			{Icon && (
				<div className={s.imgLogoInput}>
					<Icon width={24} height={24} />
				</div>
			)}
		</div>
	);
};
