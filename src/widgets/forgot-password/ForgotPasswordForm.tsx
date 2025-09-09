'use client';

import s from './ForgotPasswordForm.module.scss';
import { FormTitle, InputLogin } from '@/shared/ui';
import { ForgotPasswordFormData, TEXT } from '@/shared/constants/constants';
import { GradientButton } from '@/shared/ui/buttons';

export const ForgotPasswordForm = () => {
	return (
		<>
			<FormTitle data={ForgotPasswordFormData} />
			<div className={s.passwordBlock}>
				<InputLogin
					type={'password'}
					header={TEXT.Password}
					footer={TEXT.PasswordTips}
				/>
				<InputLogin type={'password'} header={TEXT.PasswordConfirm} />
			</div>
			<div className={s.btnWrapper}>
				<GradientButton to="/">{TEXT.SignIn}</GradientButton>
			</div>
		</>
	);
};
