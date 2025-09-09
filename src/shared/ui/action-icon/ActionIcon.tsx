import s from './ActionIcon.module.scss';

type ActionIconProps = {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	handler?: (() => void) | null;
};

export const ActionIcon = ({ icon: Icon, handler = null }: ActionIconProps) => {
	const curStyle = handler
		? `${s.actionIcon}`
		: `${s.actionIcon} ${s.disableAction}`;

	const handlerClick = () => handler && handler();

	return (
		<div className={curStyle} onClick={handlerClick}>
			<Icon width={40} height={40} />
		</div>
	);
};
