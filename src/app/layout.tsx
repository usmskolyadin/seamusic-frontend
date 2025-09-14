'use client';

import { Particles } from '@/shared/ui/particles/Particles';
import './globals.css';


const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="ru">
			<body >
			  <Particles />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
