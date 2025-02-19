'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
	Bars3Icon,
	XMarkIcon,
	ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

function NavbarElement(
	props: Readonly<{
		text: string;
		url: string;
		active: boolean;
		onClick: () => void;
		mobile: boolean;
	}>
) {
	return (
		<a
			href={props.url}
			className={`block cursor-pointer font-medium
                ${props.active ? 'opacity-100' : 'opacity-50'}
                ${
					props.mobile
						? 'flex justify-between items-center text-2xl py-4'
						: 'text-lg'
				}
            `}
			aria-current={props.active ? 'page' : undefined}
			onClick={(e) => {
				e.preventDefault();
				props.onClick();
			}}
		>
			{props.text}
			{props.mobile && <ArrowRightIcon className='h-8 w-8' />}
		</a>
	);
}

export default function Navbar() {
	const router = useRouter();
	const pathname = usePathname();
	const [activePage, setActivePage] = useState(pathname);
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	// Handle navigation
	const handleNavigation = (url: string) => {
		setActivePage(url);
		router.push(url);
		setMenuOpen(false); // Close menu after navigation
	};

	// Detect screen size and update menu state accordingly
	useEffect(() => {
		// Function to check if screen is mobile (using 768px as the breakpoint)
		const checkMobile = () => setIsMobile(window.innerWidth < 768);

		// Add event listener to resize window
		window.addEventListener('resize', checkMobile);

		// Initial check
		checkMobile();

		// Clean up the event listener on component unmount
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Close menu if switching to desktop view
	useEffect(() => {
		if (!isMobile) {
			setMenuOpen(false); // Close menu on desktop
		}
	}, [isMobile]);

	return (
		<div
			className={`glassElement w-full px-12 py-6 z-10 fixed flex ${
				menuOpen
					? 'h-full items-start flex-col justify-start'
					: 'items-center '
			}`}
		>
			<div className='flex justify-between w-full items-center'>
				<div className='flex justify-between w-full items-center'>
					<button
						className='flex items-center text-left'
						onClick={() => handleNavigation('/')}
						aria-label='Ettore Serra | Developer & Designer'
					>
						<Image src='/img/logo.webp' alt='Logo' width={25} height={25} className='mr-2' />
						<div>
							<p className='text-2xl font-black'>Ettore Serra</p>
							<p className='text-xs font-medium uppercase opacity-50'>
								Developer & designer
							</p>
						</div>
					</button>
				</div>

				{/* Hamburger Icon */}
				<div className='md:hidden'>
					{menuOpen ? (
						<XMarkIcon
							className='h-6 w-6 cursor-pointer'
							onClick={() => setMenuOpen(false)}
						/>
					) : (
						<Bars3Icon
							className='h-6 w-6 cursor-pointer'
							onClick={() => setMenuOpen(true)}
						/>
					)}
				</div>
			</div>

			{/* Desktop Navigation */}
			<div className='hidden md:flex space-x-6'>
				<NavbarElement
					text='Work'
					url='/'
					active={activePage === '/'}
					onClick={() => handleNavigation('/')}
					mobile={menuOpen}
				/>
				<NavbarElement
					text='About'
					url='/about'
					active={activePage === '/about'}
					onClick={() => handleNavigation('/about')}
					mobile={menuOpen}
				/>
				<NavbarElement
					text='Contacts'
					url='/contacts'
					active={activePage === '/contacts'}
					onClick={() => handleNavigation('/contacts')}
					mobile={menuOpen}
				/>
			</div>

			{/* Mobile Navigation */}
			{menuOpen && (
				<div className='mt-6 w-full'>
					<NavbarElement
						text='Work'
						url='/'
						active={activePage === '/'}
						onClick={() => handleNavigation('/')}
						mobile={menuOpen}
					/>
					<NavbarElement
						text='About'
						url='/about'
						active={activePage === '/about'}
						onClick={() => handleNavigation('/about')}
						mobile={menuOpen}
					/>
					<NavbarElement
						text='Contacts'
						url='/contacts'
						active={activePage === '/contacts'}
						onClick={() => handleNavigation('/contacts')}
						mobile={menuOpen}
					/>
				</div>
			)}
		</div>
	);
}
