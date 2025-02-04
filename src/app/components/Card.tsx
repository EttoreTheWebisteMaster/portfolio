'use client';

import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';

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
			className={`glassElement md:w-full p-[32px] rounded-[10px] h-min ${
				props.animation ? 'hover:animate-bounceSoft' : ''
			} ${props.largeImage ? 'flex flex-col-reverse' : ''}`}
		>
			{props.image && (
				<div
					className={`w-full rounded-[15px] bg-center bg-no-repeat bg-cover innerShadow opacity-90 ${
						props.largeImage
							? 'h-[200px] sm:h-[450px] mt-[32px] bg-top'
							: 'h-[150px] lg:h-[250px] mb-[32px]'
					}`}
					style={{ backgroundImage: `url(${props.image})` }}
				></div>
			)}
			<div className='flex'>
				{props.roundImage && (
					<div
						className='w-[50px] h-[50px] min-w-[50px] min-h-[50px] mr-4 bg-white rounded-[50%] bg-center bg-no-repeat bg-cover innerShadow  opacity-90'
						style={{ backgroundImage: `url(${props.roundImage})` }}
					></div>
				)}
				<div className='mb-[8px]'>
					<p className='text-2xl font-black'>{props.title}</p>
					{props.info && (
						<p className='text-base italic opacity-75 mb-[16px]'>
							{props.info}
						</p>
					)}
				</div>
			</div>
			<div>
				{props.subtitle && (
					<p className='text-lg font-medium opacity-75 mb-[8px]'>
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
					className='inline-block w-full mt-8 py-2 px-8 uppercase rounded-[50px] bg-gradient-to-r from-blue-500 to-indigo-500 text-center font-black text-sm shadow-lg glassElement'
				>
					<span className='opacity-75'>Read the story</span>
				</button>
			)}
		</div>
	);
}
