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
				<div
					className='w-6 h-6 min-w-6 min-h-6 rounded-[50%] bg-center bg-no-repeat bg-cover innerShadow object-cover opacity-90'
					style={{ backgroundImage: `url(${props.image})` }}
				></div>
			)}
			<p className='text-base font-medium truncate opacity-75 mx-[8px]'>
				{props.name}
			</p>
		</a>
	);
}
