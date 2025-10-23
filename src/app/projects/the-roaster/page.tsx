import Card from '@/app/components/Card';
import Feedback from '@/app/components/Feedback';
import Paragraph from '@/app/components/Paragraph';
import Section from '@/app/components/Section';

export default function TheRoaster() {
	return (
		<>
			<Section
				title='The Roaster'
				text={
					<>
						A bold, hilarious <b>AI comedian</b> built to{' '}
						<b>roast</b> you with <b>precision</b> and{' '}
						<b>personality</b>. I designed its <b>sharp wit</b> and{' '}
						<b>comedic timing</b> to deliver{' '}
						<b>personalized burns</b> and{' '}
						<b>unforgettable laughs</b>, turning every chat into a
						front-row seat at a digital comedy show.
					</>
				}
				deliverables='Website'
				date='October 2025'
				role='UX/UI Designer, Developer'
				image='/img/projects/the-roaster/roaster.png'
				url='https://the-roaster.vercel.app/'
			/>
			<Paragraph
				text={
					<>
						The <b>creation</b>, <b>training</b>, and{' '}
						<b>personality tuning</b> of <b>The Roaster</b> followed
						a <b>meticulous</b>, <b>iterative process</b>,
						perfecting its <b>humor</b>, <b>timing</b>, and{' '}
						<b>roasting precision</b> to craft the ultimate AI
						comedian experience.
					</>
				}
			/>
			<div className='space-y-2'>
				<Card
					subtitle='Why create an AI comedian?'
					text={
						<>
							<p className='mb-2'>
								{' '}
								<b>The Roaster</b> was born from a desire to{' '}
								<b>explore AI</b> in a <b>fun</b> and{' '}
								<b>creative</b> way, combining technology with
								my passion for <b>stand-up comedy</b>.{' '}
							</p>{' '}
							It serves as a playful experiment in{' '}
							<b>AI personality design</b>,{' '}
							<b>humor generation</b>, and{' '}
							<b>interactive storytelling</b>, proving that
							machine learning can entertain, not just automate.
						</>
					}
				/>
				<Card
					subtitle='The design'
					image='/img/projects/the-roaster/chat.png'
					largeImage={true}
					text={
						<>
							<p className='mb-2'>
								{' '}
								The design of <b>The Roaster</b> captures the
								essence of a <b>live comedy club</b>: warm
								lighting, <b>stage presence</b>, and{' '}
								<b>crowd interaction</b>.{' '}
							</p>{' '}
							A clean, <b>chat-based interface</b> mirrors the
							dynamic between comedian and audience, blending{' '}
							<b>humor</b> and <b>conversation</b> through playful
							visual contrast, bold dialogue boxes, and an
							immersive, <b>storytelling atmosphere</b>.
						</>
					}
				/>
				<Card
					subtitle='What have I learned?'
					text={
						<>
							<p className='mb-2'>
								Building <b>The Roaster</b> showed me that{' '}
								<b>AI</b> can be both <b>simple</b> and{' '}
								<b>exciting</b>, a tool for creativity as much
								as technology.
							</p>
							What started as a fun experiment became proof that{' '}
							<b>innovation</b> doesn’t have to be serious to be
							impactful. <b>The Roaster</b> is just the beginning:
							more <b>AI-driven projects</b> with unique
							personalities and ideas are already on the way.
						</>
					}
				/>
				<Feedback />
			</div>
		</>
	);
}
