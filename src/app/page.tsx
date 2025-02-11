import Card from '@/app/components/Card';
import Paragraph from './components/Paragraph';

export default function Home() {
	return (
		<div>
			<Paragraph
				text={
					<>
						Hi, I’m <b>Ettore Serra</b>.
						<br />
						<br />
						Blending <b>technology</b>, <b>design</b>, and{' '}
						<b>storytelling</b> I love to craft experiences that{' '}
						<b>captivate</b>, <b>inspire</b>, and disrupt the
						ordinary.
					</>
				}
			/>

			{/* Grid Layout for Cards */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				<Card
					title='Mr Fruitman'
					url='mr-fruitman'
					image='/img/projects/mr-fruitman/mr-fruitman-logo.png'
					text={
						<>
							Cycling through the city, serving up mouthwatering{' '}
							<b>topped fruit skewers</b>. The entire vibe is{' '}
							<b>inspired by the 20’s</b>, bringing a playful,
							vintage touch that really makes it pop.
						</>
					}
					animation={true}
					truncate={true}
				/>
				<Card
					title='INFN Data Cloud'
					url='infn-data-cloud'
					image='/img/projects/infn-data-cloud/data-cloud-logo.png'
					text={
						<>
							<b>Redesign of the INFN Data Cloud Dashboard</b>, a
							user interface for managing and deploying{' '}
							<b>cloud resources</b>, providing a streamlined,
							secure, and efficient experience for{' '}
							<b>researchers</b> and <b>developers</b>.
						</>
					}
					animation={true}
					truncate={true}
				/>
				<Card
					title='Feeling'
					url='feeling'
					image='/img/projects/feeling/logo.png'
					text={
						<>
							An <b>AI-driven clothing brand</b>. Every <b>ad</b>,{' '}
							<b>model</b>, and <b>product graphic</b> is designed
							using{' '}
							<b>advanced generative artificial intelligence</b>,
							offering a truly unique and personalized touch.
						</>
					}
					animation={true}
					truncate={true}
				/>
				<Card
					title='External Zone'
					url='external-zone'
					image='/img/projects/external-zone/logo.png'
					text={
						<>
							A <b>futuristic web agency</b> with branding that
							sets it apart from the competition, offering{' '}
							<b>innovative</b>, <b>high-quality</b> digital
							solutions through a <b>unique</b>, <b>simple</b>{' '}
							website.
						</>
					}
					animation={true}
					truncate={true}
				/>
				<Card
					title='World’s Book'
					url='worlds-book'
					image='/img/projects/worlds-book/logo.png'
					text={
						<>
							A <b>collaborative storytelling platform</b> where
							users contribute to a{' '}
							<b>single evolving narrative</b>. Using{' '}
							<b>Writer’s Tokens</b>, they can <b>write</b> new
							passages, <b>remove</b> sections, or <b>start</b>{' '}
							fresh chapters, <b>shaping the story</b>{' '}
							dynamically.
						</>
					}
					animation={true}
					truncate={true}
				/>
				<Card
					title='Aine Team'
					url='aine-team'
					image='/'
					text={
						<>
							Cycling through the city, serving up mouthwatering{' '}
							<b>topped fruit skewers</b>. The entire vibe is{' '}
							<b>inspired by the 20’s</b>, bringing a playful,
							vintage touch that really makes it pop.
						</>
					}
					animation={true}
					truncate={true}
				/>
				<Card
					title='Savage'
					url='savage'
					image='/'
					text={
						<>
							Cycling through the city, serving up mouthwatering{' '}
							<b>topped fruit skewers</b>. The entire vibe is{' '}
							<b>inspired by the 20’s</b>, bringing a playful,
							vintage touch that really makes it pop.
						</>
					}
					animation={true}
					truncate={true}
				/>
				<Card
					title='Photograpy Portfolio'
					url='photography-portfolio'
					image='/'
					text={
						<>
							Cycling through the city, serving up mouthwatering{' '}
							<b>topped fruit skewers</b>. The entire vibe is{' '}
							<b>inspired by the 20’s</b>, bringing a playful,
							vintage touch that really makes it pop.
						</>
					}
					animation={true}
					truncate={true}
				/>
			</div>
		</div>
	);
}
