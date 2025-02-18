import ContactTags from '@/app/components/ContactTags';
import Paragraph from '@/app/components/Paragraph';

export default function Feedback() {
	return (
		<Paragraph
			text={
				<>
					<b>What do you think?</b>
					<br />
					<br />
					Is there anything you’d <b>tweak</b> or <b>improve</b>?
					<br />
					<br />
					Feel free to <b>reach out</b> and let me know your thoughts!
					<br />
					<br />
					<ContactTags />
				</>
			}
		/>
	);
}
