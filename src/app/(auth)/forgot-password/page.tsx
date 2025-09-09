import { ForgotPassword } from '@/pages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Forgot Password',
};

const Page = () => {
	return <ForgotPassword />;
};

export default Page;
