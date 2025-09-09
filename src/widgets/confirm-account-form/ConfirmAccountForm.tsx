'use client';

import s from './ConfirmAccountForm.module.scss';
import { FormTitle, InputLogin } from '@/shared/ui';
import { ConfirmAccountFormData, TEXT } from '@/shared/constants/constants';
import { GradientButton } from '@/shared/ui/buttons';

export const ConfirmAccountForm = () => {
	return (
		<>
			<FormTitle data={ConfirmAccountFormData} />
			<div className={s.confirmText}>
				{TEXT.ConfirmText}
				<span className={s.tempEmail}>{TEXT.TempEmail}</span>
			</div>
			<InputLogin type={'text'} header={TEXT.Code} />
			<div className={s.btnWrapper}>
				<GradientButton to="/">{TEXT.SignIn}</GradientButton>
			</div>
		</>
	);
};
