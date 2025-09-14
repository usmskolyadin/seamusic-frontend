'use client';

import Link from 'next/link';
import s from './LoginForm.module.scss';
import { Divider, FormTitle, InputLogin } from '@/shared/ui';
import ImportedIconGoogle from '@/shared/assets/icons/SocialMediaLogoGoogle.svg';
import ImportedIconSpotify from '@/shared/assets/icons/SocialMediaLogoSpotify.svg';
import { LoginFormTitleData, TEXT } from '@/shared/constants/constants';
import { GradientButton } from '@/shared/ui/buttons';
import { OAuthLoginInput } from '@/shared/ui/oauth-login-input/oauth-login-input';

const IconGoogle: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconGoogle;
const IconSpotify: React.FC<React.SVGProps<SVGSVGElement>> =
	ImportedIconSpotify;

export const LoginForm = () => {
	return (
		<>
			<FormTitle data={LoginFormTitleData} />
			<div className={s.loginBlock}>
				<OAuthLoginInput
					icon={IconGoogle}
					type={'text'}
					placeholder={TEXT.LogInGooglePlaceholder}
				/>
				<OAuthLoginInput
					icon={IconSpotify}
					type={'text'}
					placeholder={TEXT.LogInSpotifyPlaceholder}
				/>
			</div>
			<Divider text={TEXT.OR} />
			<InputLogin type={'text'} header={TEXT.EmailAdress} />
			<InputLogin
				type={'password'}
				header={TEXT.Password}
				footer={TEXT.ForgetPass}
				footerTo="/"
			/>
			<div className={s.btnWrapper}>
				<GradientButton to="/">{TEXT.SignIn}</GradientButton>
			</div>
			<div className={s.signUpLine}>
				<div>{TEXT.DontHaveAcc}</div>
				<Link href="/register" className={s.linkUnderline}>
					{TEXT.SignUp}
				</Link>
			</div>
		</>
	);
};
