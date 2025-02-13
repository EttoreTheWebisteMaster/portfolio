import { ReactElement } from 'react';

export default function Paragraph(
	props: Readonly<{
		text?: ReactElement;
	}>
) {
	return (
		<div className='m-[48px] text-center'>
			<div className='py-16 md:py-24 px-2 lg:px-48 md:px-12 text-3xl md:text-5xl text-center'>
				{props.text}
			</div>
		</div>
	);
}
