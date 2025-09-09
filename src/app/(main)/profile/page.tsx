import { Profile } from '@/pages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Profile',
};

const Page = () => {
	return <Profile />;
};

export default Page;
