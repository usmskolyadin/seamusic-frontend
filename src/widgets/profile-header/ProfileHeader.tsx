import { MainBtn } from '@/shared/ui/buttons';
import s from './ProfileHeader.module.scss';

const PROFILE_TEMP_DATA = {
	profileBtns: ['Edit profile', 'Share profile', 'Settings'],
	profileInfo: ['25 Subscribers', '3850 Plays'],
	navigationLink: ['Main', 'Activity', 'Tracks', 'Beats', 'Albums'],
	text: {
		name: 'Sam Mattal',
		login: '@sammattmusic',
		contentDescription:
			'Hey, I’m Sam—an artist blending indie vibes with the grooves of house and deep house. I create music to move both your heart and your feet. Let’s vibe together 🤙',
	},
};

export const ProfileHeader = () => {
	return (
		<div className={s.profileHeader}>
			<div className={s.header}>
				<div className={s.headerTop}></div>
				<div className={s.headerBottom}>
					<div className={s.profileBtns}>
						{PROFILE_TEMP_DATA.profileBtns.map((el, index) => (
							<MainBtn key={index} variant={'blackWhite'}>
								{el}
							</MainBtn>
						))}
					</div>
					<div className={s.profileInfo}>
						{PROFILE_TEMP_DATA.profileInfo.map((el, index) => (
							<div key={index} className={s.profileInfoItem}>
								{el}
							</div>
						))}
					</div>
				</div>
				<div className={s.headerAvatar}></div>
			</div>
			<div className={s.footer}>
				<div className={s.userInfo}>
					<div className={s.infoTitle}>
						<div className={s.name}>{PROFILE_TEMP_DATA.text.name}</div>
						<div className={s.login}>{PROFILE_TEMP_DATA.text.login}</div>
					</div>
					<div className={s.infoContent}>
						<div className={s.contentDescription}>
							{PROFILE_TEMP_DATA.text.contentDescription}
						</div>
						<div className={s.contentBtns}>
							{PROFILE_TEMP_DATA.profileBtns.map((el, index) => (
								<MainBtn key={index} variant={'blackWhite'}>
									{el}
								</MainBtn>
							))}
						</div>
					</div>
				</div>
				<div className={s.userBanner}></div>
			</div>
			<div className={s.navigation}>
				{PROFILE_TEMP_DATA.navigationLink.map((el, index) => (
					<div key={index} className={s.navigationLink}>
						{el}
					</div>
				))}
			</div>
		</div>
	);
};
