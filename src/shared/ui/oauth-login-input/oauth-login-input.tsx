import Link from 'next/link';
import s from './oauth-login-input.module.scss';
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

export const OAuthLoginInput = ({
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
			<button
				className={s.formInput}
				value={value}
            >{placeholder}</button>
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
