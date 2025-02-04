import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Spheres from '@/app/components/Spheres';
import { Container } from '@mui/material';
import Footer from './components/Footer';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	variable: '--font-roboto',
});

export const metadata: Metadata = {
	title: 'Ettore Serra',
	description:
		'A showcase of Ettore Serra’s creative and professional projects, highlighting a diverse portfolio of innovative work.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${roboto.variable} antialiased`}>
				<Spheres />
				<Navbar />
				<Container>
					<main className='pt-[100px]'>{children}</main>
				</Container>
				<Footer />
			</body>
		</html>
	);
}
