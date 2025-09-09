import { ButtonHTMLAttributes, ReactNode } from 'react';

export type MainButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: ReactNode;
	variant: 'text' | 'secondary' | 'primary' | 'blackWhite';
	IconLeft?: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
	IconRight?: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
};

export type GradientButtonProps = {
	children: ReactNode;
	to?: string;
	handler?: () => void;
};
