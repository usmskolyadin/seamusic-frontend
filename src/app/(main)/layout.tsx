'use client';

import s from './MainLayout.module.scss';
import { AudioPlayer, MainHeader, MainLogo, MainMenu } from '@/widgets';
import { TRACK_ITEMS } from '@/shared/constants/constants';

const MainLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className={s.main}>
			<MainHeader />
			<MainMenu />
			<div className={s.content}>
				<div className={s.mainContent}>{children}</div>
			</div>
			<AudioPlayer tracks={TRACK_ITEMS} />
		</div>
	);
};

export default MainLayout;
