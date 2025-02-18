import Card from '@/app/components/Card';
import Feedback from '@/app/components/Feedback';
import Paragraph from '@/app/components/Paragraph';
import Section from '@/app/components/Section';

export default function ExternalZone() {
	return (
		<>
			<Section
				title='External Zone'
				text={
					<>
						A <b>futuristic web agency</b> with branding that sets
						it apart from the competition, offering{' '}
						<b>innovative</b>, <b>high-quality</b> digital solutions
						through a <b>unique</b>, <b>simple</b> website.
					</>
				}
				deliverables='Idea, Branding, Website'
				date='March 2021'
				role='Founder, UX/UI Designer, Developer, Marketer'
				image='/img/projects/external-zone/logo.png'
			/>
			<Paragraph
				text={
					<>
						Discover the <b>process</b> behind the creation of a
						unique <b>brand</b> and <b>website</b>, and see how each
						element came together to <b>shape its identity</b>.
					</>
				}
			/>
			<div className='space-y-2'>
				<Card
					subtitle='Crafting the Logo'
					/* image='/img/projects/external-zone/trials.png' */
					largeImage={true}
					text={
						<>
							The logo was a key element in defining the brand’s
							identity, and I wanted it to evoke both{' '}
							<b>nostalgia</b> and a sense of <b>futurism</b>. I
							aimed for an <b>old</b>, <b>blurred</b> aesthetic
							combined with <b>futuristic</b> touches, symbolizing
							External Zone’s ability to bridge the past and the
							future.
							<br /><br />
							The design process involved numerous{' '}
							<b>retries</b> and revisions as I experimented with
							different <b>textures</b>, <b>shapes</b>, and{' '}
							<b>fonts</b>. Each iteration brought me closer to a
							logo that felt both <b>timeless</b> and{' '}
							<b>ahead of its time</b>, perfectly representing the
							agency’s unique position in the market.
						</>
					}
				/>
				<Card
					subtitle='Designing the Website'
					/* image='/img/projects/external-zone/website.gif' */
					largeImage={true}
					text={
						<>
							For the website, my vision was to create a{' '}
							<b>simple</b>, <b>direct</b>, and <b>focused</b>{' '}
							page that would effectively showcase External Zone’s
							expertise in <b>user experience</b>. I wanted
							visitors to feel an immediate connection with the
							brand, without overwhelming them with unnecessary{' '}
							<b>complexity</b>.
							<br /><br />
							The <b>layout</b> was designed to
							be <b>clean</b>, <b>minimal</b>, and{' '}
							<b>intuitive</b>, with easy <b>navigation</b> and{' '}
							<b>responsive</b> features that adapt to all
							devices. The goal was to ensure a <b>seamless</b>{' '}
							and <b>engaging</b> experience, reflecting the
							agency’s commitment to high-quality digital
							solutions.
						</>
					}
				/>

				<Feedback />
			</div>
		</>
	);
}
