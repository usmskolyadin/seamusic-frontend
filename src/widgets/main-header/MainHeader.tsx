import Link from 'next/link';
import s from './MainHeader.module.scss';

export const MainHeader = () => (
	<div className={s.mainHeader}>
		<div className={s.mainHeaderWrapper}>
			<div className={s.mainHeaderSearch}>
				<input className={s.headerSearch} type="text" placeholder="Search" />
				<div className={s.searchLogo} />
			</div>
			<div className={s.mainHeaderNav}>
				<div className={s.navBell} />
				<Link href={'/login'}>
					<div className={s.navAvatar}>
						<div className={s.avatarName}>Sam</div>
						<div className={s.avatarArrow} />
						<div className={s.avatarFoto} />
					</div>
				</Link>
			</div>
		</div>
	</div>
);
