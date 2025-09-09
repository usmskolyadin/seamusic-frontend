export type TextFieldProps = {
	status: 'default' | 'error' | 'success' | 'attention';
	name?: string;
	placeholder?: string;
	text?: string;
	hint?: string;
	IconLeft?: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
	IconRight?: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
};
