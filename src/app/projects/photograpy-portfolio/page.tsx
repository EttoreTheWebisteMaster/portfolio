import Card from '@/app/components/Card';
import Feedback from '@/app/components/Feedback';
import Paragraph from '@/app/components/Paragraph';
import Section from '@/app/components/Section';

export default function PhotographyPortfolio() {
	return (
		<>
			<Section
				title='Photography portfolio'
				text={
					<>
						A <b>black-and-white brutalist photography portfolio</b>
						designed in <b>Figma</b>, with raw aesthetics while
						maintaning functional usability. The site showcase the
						photos while allowing users to purchase prints.
					</>
				}
				deliverables='Mockup'
				date='March 2021'
				role='UX/UI Designer'
				image='/img/projects/photograpy-portfolio/mockup.webp'
			/>
			<Paragraph
				text={
					<>
						Explore the <b>vision</b> behind this bold <b>mockup</b>{' '}
						and see how each design choice blends seamlessly to{' '}
						<b>define its character</b>.
					</>
				}
			/>
			<div className='space-y-2'>
				<Card
					subtitle='Research & Inspiration'
					text={
						<>
							I explored <b>brutalist web design</b>,{' '}
							<b>high contrast</b>, <b>bold typography</b>,
							asymmetric grids—while ensuring smooth navigation
							and seamless product integration. The goal was to
							create something <b>striking yet functional</b>.
						</>
					}
				/>
				<Card
					subtitle='UI Design'
					largeImage={true}
					image='/img/projects/photograpy-portfolio/mockup-1.webp'
					text={
						<>
							The site features a strict <b>B/W color scheme</b>,
							bold typography, and high-contrast layouts, creating
							a raw and impactful aesthetic. Navigation is{' '}
							<b>minimal yet effective</b>, and product purchase
							elements are seamlessly integrated without
							disrupting the brutalist vibe.
						</>
					}
				/>
				<Card
					subtitle='High-Fidelity Mockup'
					largeImage={true}
					image='/img/projects/photograpy-portfolio/mockup-2.webp'
					text={
						<>
							The <b>final Figma mockup</b> captures the essence
							of <b>brutalist design</b> while maintaining a
							functional user experience. <b>Sharp contrasts</b>,{' '}
							<b>oversized typography</b>, and an unpolished yet
							structured layout create a visually{' '}
							<b>raw aesthetic</b>. The grid feels intentionally
							rigid, while <b>bold imagery</b> and{' '}
							<b>minimal distractions</b> ensure the focus stays
							on the photography.
							<br />
							<br />
							E-commerce elements are seamlessly embedded, making
							the purchasing experience <b>feel natural</b> within
							the brutalist framework. The result is a portfolio
							that is both <b>unapologetically striking</b> and{' '}
							<b>effortlessly navigable</b>.
						</>
					}
				/>

				<Feedback />
			</div>
		</>
	);
}
