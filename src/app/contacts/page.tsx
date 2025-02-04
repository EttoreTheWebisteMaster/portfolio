import ContactTags from '../components/ContactTags';
import Paragraph from '../components/Paragraph';

export default function Contacts() {
	return (
		<>
			<Paragraph
				text={
					<>
						Have a question, an{' '}
						<b>exciting idea you’d like to share</b>, or just want
						to say hello?
						<br />
						<br />
						I’m always open to <b>connecting</b>,{' '}
						<b>brainstorming</b>, and <b>exploring</b> new
						possibilities.
						<br />
						<br />
						Don’t hesitate to <b>drop me a message!</b>
						<br />
						<br />
						I’d love to hear your thoughts, share insights, and see
						how we can <b>create something truly remarkable</b>{' '}
						together.
					</>
				}
			/>
			<ContactTags />
		</>
	);
}
