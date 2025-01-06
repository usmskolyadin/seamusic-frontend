import Link from 'next/link';
import s from './AuthForm.module.scss';
import { TEXT_AUTH } from '@/constants/constants';
import { Divider } from '@/shared/ui';

export function AuthForm() {
	return (
      <form className={s.form}>
        <div className={s.formTitle}>
          <div className={s.titleLeft}>{TEXT_AUTH.form_sign_in}</div>
          <div className={s.titleRight}>{TEXT_AUTH.form_text_logo}</div>
        </div>
        <div className={s.loginBlock}>
          <input
            className={s.formInput}
            type="text"
            placeholder={TEXT_AUTH.form_google}
          />
          <input
            className={s.formInput}
            type="text"
            placeholder={TEXT_AUTH.form_spotify}
          />
        </div>
        <Divider />
        <div className={s.loginBlock}>
          <div className={s.loginInput}>
            <div className={s.inputHeader}>{TEXT_AUTH.form_email}</div>
            <input
              className={s.formInput}
              type="text"
              placeholder=''
            />
          </div>
          <div className={s.loginInput}>
            <div className={s.inputHeader}>{TEXT_AUTH.form_password}</div>
            <input
              className={s.formInput}
              type="text"
              placeholder=''
            />
            <div className={s.inputFooter}>
                <Link href="/">
                  {TEXT_AUTH.form_forget}
                </Link>
              </div>
          </div>
        </div>
        <Link href="/">
          <button className={s.btnAuth} role='presentation'>
            {TEXT_AUTH.form_sign_in}
          </button>
        </Link>
        <div className={s.signUpLine}>
          <div>{TEXT_AUTH.form_registration}</div>
          <Link href="/">{TEXT_AUTH.form_sign_up}</Link>
        </div>
      </form>
	)
}
