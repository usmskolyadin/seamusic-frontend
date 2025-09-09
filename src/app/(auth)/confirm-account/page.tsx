import { ConfirmAccount } from '@/pages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Confirm Account',
};

const Page = () => {
	return <ConfirmAccount />;
};

export default Page;
