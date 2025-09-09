'use client';

import { AuthLeftBlock } from '@/widgets';
import s from './Auth.module.scss';

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className={s.auth}>
			<AuthLeftBlock />
			<form className={s.form}>{children}</form>
		</div>
	);
};

export default Layout;
