'use client';

import Link from 'next/link';
import s from './RegisterForm.module.scss';
import { useEffect, useState } from 'react';
import { FormTitle, InputLogin } from '@/shared/ui';
import { ArrowBtn, GradientButton } from '@/shared/ui/buttons';
import { PREFER_TEXT, RegisterFormTitleData, TEXT } from '@/shared/constants/constants';
import ArrowForward from '@/shared/assets/icons/ArrowForward.svg';
import { Prefer } from '@/entities';

export type InputLoginKeyType =
	| 'name'
	| 'email'
	| 'password'
	| 'confirmPassword';

type RegistrationDataType = Record<InputLoginKeyType, string>;

export const RegisterForm = () => {
	const [step, setStep] = useState(1);
	// const [tags, setTags] = useState<Tags[]>([]);
	const [registrationData, setRegistrationData] =
		useState<RegistrationDataType>({
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		});

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await fetch('/api/tags');
	// 			if (!response.ok) {
	// 				throw new Error('Failed to fetch data');
	// 			}
	// 			const result = await response.json();
	// 			setTags(result);
	// 		} catch (error: unknown) {
	// 			console.error(error);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);

	const handlerInput = (id: InputLoginKeyType, value: string) => {
		setRegistrationData((prevState) => ({ ...prevState, [id]: value }));
	};

	const handlerRegistration = () => {
		console.log('registrationData:', registrationData);
	};

	const setNextStep = () => setStep(2);
	const setPrevStep = () => setStep(1);

	return (
		<>
			{step === 1 && (
				<>
					<FormTitle data={RegisterFormTitleData} />
					<div className={s.registerBlock}>
						<InputLogin
							type={'text'}
							header={TEXT.UserName}
							id={'name'}
							value={registrationData.name}
							handler={handlerInput}
						/>
						<InputLogin
							type={'text'}
							header={TEXT.EmailAdress}
							id={'email'}
							value={registrationData.email}
							handler={handlerInput}
						/>
						<InputLogin
							type={'password'}
							header={TEXT.Password}
							footer={TEXT.PasswordTips}
							id={'password'}
							value={registrationData.password}
							handler={handlerInput}
						/>
						<InputLogin
							type={'password'}
							header={TEXT.PasswordConfirm}
							footer={''}
							id={'confirmPassword'}
							value={registrationData.confirmPassword}
							handler={handlerInput}
						/>
					</div>
					<div className={s.nextStep}>
						<div className={s.nextBtn} onClick={setNextStep}>
							<div className={s.left}>{TEXT.LastStep}</div>
							<ArrowForward width={13} height={26} />
						</div>
						<div className={s.signUpLine}>
							<div>{TEXT.HaveAcc}</div>
							<Link href="/login" className={s.linkUnderline}>
								{TEXT.SignIn}
							</Link>
						</div>
					</div>
				</>
			)}
			{step === 2 && (
				<>
					<div className={s.titleWrapper}>
						<div onClick={setPrevStep} className={s.btnWrapper}>
							<ArrowBtn variant="primary" />
						</div>
						<div className={s.logo}>{TEXT.LogoTitle}</div>
					</div>
					<div className={s.roleWrapper}>
						<div className={s.roleTitle}>{TEXT.WhoAreYou}</div>
						<div className={s.role}>
							<div className={`${s.roleItem} ${s.active}`}>Artist</div>
							<div className={s.roleItem}>Producer</div>
							<div className={s.roleItem}>Listener</div>
						</div>
					</div>
					<Prefer tags={PREFER_TEXT} />
					<div className={s.termsWrapper}>
						<input type="checkbox" className={s.termsCheckbox} />
						<div className={s.termTextWrapper}>
							{TEXT.Terms_1}
							<Link href="/terms" className={s.termLink}>
								{TEXT.Terms_2}
							</Link>
							{TEXT.Terms_3}
							<Link href="/priacy-policy" className={s.termLink}>
								{TEXT.Terms_4}
							</Link>
						</div>
					</div>
					<GradientButton handler={handlerRegistration}>
						{TEXT.SignUp}
					</GradientButton>
					<div className={s.signUpLine}>
						<div>{TEXT.HaveAcc}</div>
						<Link href="/login" className={s.linkUnderline}>
							{TEXT.SignIn}
						</Link>
					</div>
				</>
			)}
		</>
	);
};
