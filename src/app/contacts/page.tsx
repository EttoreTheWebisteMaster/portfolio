import ContactTags from '../components/ContactTags';
import Paragraph from '../components/Paragraph';

export default function Contacts() {
	return (
			<Paragraph
				text={
					<>
						Have a <b>question</b>, an <b>exciting idea</b> you’d
						like to share, or just want to <b>say hello</b>?
						<div className='my-16'>
							<ContactTags />
						</div>
						I’m always open to <b>connecting</b>,{' '}
						<b>brainstorming</b>, and <b>exploring</b> new
						possibilities.
						<br />
						<br />
						Don’t hesitate to <b>drop me a message!</b>
					</>
				}
			/>
	);
}
