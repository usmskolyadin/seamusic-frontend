'use client';

import './globals.css';


const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="ru">
			<body >{children}</body>
		</html>
	);
};

export default RootLayout;
