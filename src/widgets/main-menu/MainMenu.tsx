import Image from 'next/image';
import navImgSrc from '@/shared/assets/images/Frame 30.png';
import s from './MainMenu.module.scss';
import imgHomeImage from '@/shared/assets/icons/home_line.svg?url';
import imgHomeImageWhite from '@/shared/assets/icons/home_line_white.svg?url';
import imgMessagesImage from '@/shared/assets/icons/messages_line.svg?url';
import imgMessagesImageWhite from '@/shared/assets/icons/messages_line_white.svg?url';
import imgDashboardImage from '@/shared/assets/icons/dashboard_line.svg?url';
import imgDashboardImageWhite from '@/shared/assets/icons/dashboard_line_white.svg?url';
import imgPlaylistsImage from '@/shared/assets/icons/playlists_line.svg?url';
import imgPlaylistsImageWhite from '@/shared/assets/icons/playlists_line_white.svg?url';
import imgSettingsImage from '@/shared/assets/icons/settings_line.svg?url';
import imgSettingsImageWhite from '@/shared/assets/icons/settings_line_white.svg?url';
import imgLogoutImage from '@/shared/assets/icons/logout_line.svg?url';
import imgLogoutImageWhite from '@/shared/assets/icons/logout_line_white.svg?url';
import { NavItem } from '@/shared/ui';
import { MenuItemType } from '@/shared/ui/nav-item/NavItem';

type MainMenuItems = {
	menuMainItems: Array<MenuItemType>;
	menuSettingsItems: Array<MenuItemType>;
};

const MAIN_MENU_ITEMS: MainMenuItems = {
	menuMainItems: [
		{
			id: '001',
			data: {
				id: '001',
				text: 'Home',
				img: imgHomeImage,
				imgWhite: imgHomeImageWhite,
			},
		},
		{
			id: '002',
			data: {
				id: '002',
				text: 'Messages',
				img: imgMessagesImage,
				imgWhite: imgMessagesImageWhite,
			},
		},
		{
			id: '003',
			data: {
				id: '003',
				text: 'Dashboard',
				img: imgDashboardImage,
				imgWhite: imgDashboardImageWhite,
			},
		},
		{
			id: '004',
			data: {
				id: '004',
				text: 'Playlists',
				img: imgPlaylistsImage,
				imgWhite: imgPlaylistsImageWhite,
			},
		},
	],
	menuSettingsItems: [
		{
			id: '005',
			data: {
				id: '005',
				text: 'Settings',
				img: imgSettingsImage,
				imgWhite: imgSettingsImageWhite,
			},
		},
		{
			id: '006',
			data: {
				id: '006',
				text: 'Log out',
				img: imgLogoutImage,
				imgWhite: imgLogoutImageWhite,
			},
		},
	],
};

export const MainMenu = () => {
	return (
		<div className={s.mainMenu}>
			<div className={s.menuNav}>
				<div className={s.navImage}>
					<Image
						src={navImgSrc}
						alt=""
						role="presentation"
						className={s.imgTop}
					/>
					<div className={s.navTitleWrapper}>
						<div className={s.navTitle}>Top release</div>
					</div>
				</div>
				<div className={s.navItems}>
					{MAIN_MENU_ITEMS.menuMainItems.map((el) => (
						<NavItem key={el.id} id={el.id} data={el.data} />
					))}
				</div>
			</div>
			<div className={s.navItems}>
				{MAIN_MENU_ITEMS.menuSettingsItems.map((el) => (
					<NavItem key={el.id} id={el.id} data={el.data} />
				))}
			</div>
		</div>
	);
};
