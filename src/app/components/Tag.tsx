import Image from "next/image";

export default function Tag(
	props: Readonly<{
		name?: string;
		image?: string;
		className?: string;
		url?: string;
	}>
) {
	return (
		<a
			href={props.url}
			target='_blank'
			className={`glassElement size-min p-[8px] rounded-[50px] flex items-center max-w-full hover:animate-bounceSoft cursor-pointer ${props.className}`}
		>
			{props.image && (
				<div className='relative w-6 h-6 min-w-6 min-h-6 rounded-full innerShadow opacity-90'>
					<Image
						src={props.image}
						alt={props.name ?? 'Tag'}
						layout='intrinsic'
						width={24}
						height={24}
						className='rounded-full object-cover'
					/>
				</div>
			)}
			<div className='text-base font-medium truncate opacity-75 mx-[8px]'>
				{props.name}
			</div>
		</a>
	);
}
