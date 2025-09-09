import s from './CircleLike.module.scss';
import ImportedIconLike from '@/shared/assets/icons/Like_Heart.svg';

const IconLike: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconLike;

export const CircleLike = () => {
	return (
		<div className={s.circleLike}>
			<IconLike width={27} height={23} />
		</div>
	);
};
