import Tag from "./Tag";

export default function ContactTags(
    props: Readonly<{
        align?: string;
    }>
) {
	return (
		<div
			className={`flex flex-wrap space-y-2 py-4 items-end ${
				props.align == 'left' ? '' : 'md:px-24 justify-center'
			}`}
		>
			<Tag
				className='mr-2'
				image='/img/tags/contacts/phone.png'
				name='+39&nbsp;346&nbsp;613&nbsp;9414'
				url='tel:+393466139414'
			/>
			<Tag
				className='mr-2'
				image='/img/tags/contacts/mail.png'
				name='serra.ettore.es@gmail.com'
				url='mailto:serra.ettore.es@gmail.com'
			/>
			<Tag
				className='mr-2'
				image='/img/tags/contacts/instagram.png'
				name='ett.re'
				url='https://www.instagram.com/ett.re'
			/>
			<Tag
				className='mr-2'
				image='/img/tags/contacts/linkedin.png'
				name='Ettore&nbsp;Serra'
				url='https://www.linkedin.com/in/ettore-serra-developer'
			/>
		</div>
	);
}
