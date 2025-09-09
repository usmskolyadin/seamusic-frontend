import { Main } from '@/pages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Main',
};

const Page = () => {
	return <Main />;
};

export default Page;
