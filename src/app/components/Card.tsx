'use client';

import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Card(
	props: Readonly<{
		title?: string;
		info?: string;
		subtitle?: string;
		text?: ReactElement;
		image?: string;
		largeImage?: boolean;
		roundImage?: string;
		animation?: boolean;
		truncate?: boolean;
		url?: string;
	}>
) {
	const router = useRouter();

	const handleNavigate = (url: string) => {
		router.push(`/projects/${url}`);
	};

	return (
		<div
			className={`glassElement md:w-full rounded-[10px] overflow-hidden h-min ${
				props.animation ? 'hover:animate-bounceSoft' : ''
			} ${props.largeImage ? 'flex flex-col-reverse' : ''}`}
		>
			{props.image && (
				<div
					className={`w-full innerShadow opacity-90 relative ${
						props.largeImage
							? 'h-[200px] sm:h-[450px] bg-top'
							: 'h-[150px] lg:h-[250px]'
					}`}
				>
					<Image
						src={props.image}
						alt={props.title ?? 'Image'}
						layout='fill'
						objectFit='cover'
						className='absolute top-0 left-0'
					/>
				</div>
			)}
			<div className='p-[32px]'>
				<div className='flex'>
					{props.roundImage && (
						<div className='relative w-[50px] h-[50px] min-w-[50px] min-h-[50px] mr-4 bg-white rounded-full innerShadow opacity-90'>
							<Image
								src={props.roundImage}
								alt={props.title ?? 'Image'}
								layout='intrinsic'
								width={50}
								height={50}
								className='rounded-full'
							/>
						</div>
					)}
					{
						(props.title || props.info) && (
							<div className='mb-[8px]'>
								<p className='text-3xl font-black'>{props.title}</p>
								{props.info && (
									<p className='text-base italic opacity-75 mb-[16px]'>
										{props.info}
									</p>
								)}
							</div>
						)
					}
				</div>
				<div>
					{props.subtitle && (
						<p className='text-2xl font-medium opacity-75 mb-[8px]'>
							{props.subtitle}
						</p>
					)}
					<div
						className={`text-base opacity-50 ${
							props.truncate ? 'line-clamp-3' : ''
						}`}
					>
						{props.text}
					</div>
				</div>
				{props.url && (
					<button
						onClick={() => handleNavigate(props.url ?? '')}
						className='inline-block w-full mt-8 py-2 px-8 uppercase rounded-[50px] bg-gradient-to-r from-blue-500 to-indigo-500 text-center font-black text-base shadow-lg glassElement'
					>
						<span className='opacity-75'>Read the story</span>
					</button>
				)}
			</div>
		</div>
	);
}
