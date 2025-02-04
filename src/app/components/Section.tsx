import { ReactElement } from "react";

export default function ProjectSection(
	props: Readonly<{
		title?: string;
		text?: ReactElement;
		image?: string;
		deliverables?: string;
		date?: string;
		role?: string;
	}>
) {
	return (
		<div className='glassElement md:w-full p-[32px] mt-[32px] rounded-[10px]'>
			<div className='md:flex md:items-center'>
				<div
					className='w-full md:min-w-80 md:w-80 md:min-h-80 h-40 mb-[32px] md:mb-0 rounded-[15px] bg-center bg-no-repeat bg-cover innerShadow opacity-90'
					style={{ backgroundImage: `url(${props.image})` }}
				></div>

				<div className='md:px-12 w-full'>
					<p className='text-4xl font-black mb-2'>{props.title}</p>

					<p className='text-base text-justify opacity-50'>
						{props.text}
					</p>

					<div className='py-6'>
						<p className='font-medium text-lg opacity-75'>
							Deliverables
						</p>
						<p className='text-base opacity-50'>{props.deliverables}</p>
					</div>

					<div className='flex justify-between items-center flex-wrap'>
						<p className='font-medium text-lg opacity-75'>Date</p>
						<p className='text-base opacity-50'>{props.date}</p>
					</div>

					<div className='flex justify-between items-center flex-wrap'>
						<p className='font-medium text-lg opacity-75'>Role</p>
						<p className='text-base opacity-50'>{props.role}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
