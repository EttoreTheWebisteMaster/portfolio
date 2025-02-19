import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Spheres from '@/app/components/Spheres';
import { Container } from '@mui/material';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/next';
import Head from 'next/head';

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
	openGraph: {
		title: 'Ettore Serra',
		description:
			'A showcase of Ettore Serra’s creative and professional projects, highlighting a diverse portfolio of innovative work.',
		images: [
			{
				url: '/img/logo.png',
				width: 1200,
				height: 630,
				alt: 'Logo',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ettore Serra',
		description:
			'A showcase of Ettore Serra’s creative and professional projects, highlighting a diverse portfolio of innovative work.',
		images: ['/img/logo.png'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Head>
				<meta
					property='og:image'
					content='/img/logo.png'
				/>
				<meta
					name='twitter:image'
					content='/img/logo.png'
				/>
			</Head>
			<body className={`${roboto.variable} antialiased`}>
				<Spheres />
				<Navbar />
				<Container>
					<main className='pt-[100px]'>{children}</main>
				</Container>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
