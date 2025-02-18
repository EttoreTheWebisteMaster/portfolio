import Card from '@/app/components/Card';
import Feedback from '@/app/components/Feedback';
import Paragraph from '@/app/components/Paragraph';
import Section from '@/app/components/Section';

export default function WorldsBook() {
	return (
		<>
			<Section
				title='World’s Book'
				text={
					<>
						A <b>collaborative storytelling platform</b> where users
						contribute to a <b>single evolving narrative</b>. Using{' '}
						<b>Writer’s Tokens</b>, they can <b>write</b> new
						passages, <b>remove</b> sections, or <b>start</b> fresh
						chapters, <b>shaping the story</b> dynamically.
					</>
				}
				deliverables='Idea, Branding, Website'
				date='Semptember 2024'
				role='UX/UI Designer, Developer'
				image='/img/projects/worlds-book/logo.webp'
			/>
			<Paragraph
				text={
					<>
						Take a closer look at the <b>creative process</b> and
						follow the journey of how <b>The World’s Book</b> came
						to life, <b>step by step</b>, from <b>concept</b> to{' '}
						<b>execution</b>.
					</>
				}
			/>
			<div className='space-y-2'>
				<Card
					subtitle='Refining the Idea'
					text={
						<>
							I started with a <b>simple but powerful concept</b>:
							a <b>global storytelling platform</b> where users
							shape a <b>shared narrative</b>. With{' '}
							<b>Writer’s Tokens</b>, they could <b>write</b>,{' '}
							<b>remove</b>, or <b>create</b> new chapters. The
							goal was to make storytelling <b>dynamic</b> and{' '}
							<b>engaging</b> while ensuring fair participation.
						</>
					}
				/>
				<Card
					subtitle='Researching the Market & Feasibility'
					text={
						<>
							To validate the idea, I <b>analyzed</b> existing
							collaborative writing platforms. I <b>identified</b>{' '}
							target users-<b>writers</b>, <b>bloggers</b>, and{' '}
							<b>creatives</b>, and tackled potential challenges
							like content moderation and engagement. I also
							explored <b>technical feasibility</b>, ensuring the
							platform could scale smoothly.
						</>
					}
				/>
				<Card
					subtitle='Planning Features & User Flow'
					text={
						<>
							I defined the <b>key roles</b>: writers contribute,
							and readers follow the evolving story. The{' '}
							<b>Writer’s Token</b> system was carefully designed
							to encourage meaningful contributions with{' '}
							<b>missions</b> and <b>rewards</b>.
						</>
					}
				/>
				<Card
					subtitle='Creating Wireframes & Mockups'
					image='/img/projects/worlds-book/mockup.webp'
					largeImage={true}
					text={
						<>
							I sketched <b>wireframes</b> to visualize the
							platform, refining the UI for <b>clarity</b> and{' '}
							<b>ease of use</b>. For the design, I chose a{' '}
							<b>typography font</b> and a{' '}
							<b>paper-like effect</b>, yet with a{' '}
							<b>futuristic</b> touch, balancing both tradition
							and innovation.
						</>
					}
				/>
				<Card
					subtitle='Development Phase'
					text={
						<>
							With the design finalized, I built the{' '}
							<b>frontend</b> for an <b>intuitive interface</b>,
							the backend to handle <b>authentication</b> and{' '}
							<b>token transactions</b>, and a{' '}
							<b>scalable database</b> to store stories and user
							data.
						</>
					}
				/>
				<Card
					subtitle='Showcasing the Product'
					image='/img/projects/worlds-book/showcase.webp'
					largeImage={true}
					text={
						<>
							To <b>attract</b> early adopters, I created a
							dedicated <b>landing page</b> that showcases{' '}
							<b>The World’s Book</b>. It highlights the{' '}
							<b>unique storytelling mechanics</b> and invites
							writers to <b>join the community</b>. The goal is to{' '}
							<b>generate interest</b>, <b>grow engagement</b>,
							and establish a passionate user base.
						</>
					}
				/>

				<Feedback />
			</div>
		</>
	);
}
