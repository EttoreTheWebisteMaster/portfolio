import { ReactElement } from "react";
import Image from "next/image";

export default function ProjectSection(
	props: Readonly<{
		title?: string;
		text?: ReactElement;
		image?: string;
		deliverables?: string;
		date?: string;
		role?: string;
		url?: string;
	}>
) {
	return (
		<div className='glassElement md:w-full mt-[32px] rounded-[10px] overflow-hidden'>
			<div className='md:flex md:items-center'>
				<div className='relative w-full md:min-w-[24em] md:w-[24em] md:min-h-[25em] h-[15em] mb-[32px] md:mb-0'>
					<Image
						src={props.image ?? ''}
						alt={props.title ?? 'Image'}
						layout='fill'
						objectFit='cover'
						className='innerShadow opacity-90'
					/>
				</div>

				<div className='md:px-12 w-full p-[32px]'>
					<p className='text-4xl font-black mb-2'>{props.title}</p>

					<p className='text-base text-justify opacity-50'>
						{props.text}
					</p>

					<div className='py-6'>
						<p className='font-medium text-lg opacity-75'>
							Deliverables
						</p>
						<p className='text-base opacity-50'>
							{props.deliverables}
						</p>
					</div>

					<div className='flex justify-between items-center flex-wrap'>
						<p className='font-medium text-lg opacity-75'>Date</p>
						<p className='text-base opacity-50'>{props.date}</p>
					</div>

					<div className='flex justify-between items-center flex-wrap'>
						<p className='font-medium text-lg opacity-75'>Role</p>
						<p className='text-base opacity-50'>{props.role}</p>
					</div>

					{props.url ? (
						<div className='flex justify-between items-center flex-wrap pt-4'>
							<p className='font-medium text-lg opacity-75'>
								Check it out:
							</p>
							<a href={props.url} target="_blank" className='text-base opacity-50 underline font-bold'>{props.url}</a>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
}
