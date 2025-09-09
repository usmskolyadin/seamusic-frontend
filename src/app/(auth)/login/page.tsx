import { Login } from '@/pages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Login',
};

const Page = () => {
	return <Login />;
};
export default Page;
