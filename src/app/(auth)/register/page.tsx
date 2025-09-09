import { Register } from '@/pages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Login',
};

const Page = () => {
	return <Register />;
};

export default Page;
