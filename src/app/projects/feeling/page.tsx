'use client';

import Card from '@/app/components/Card';
import Feedback from '@/app/components/Feedback';
import Paragraph from '@/app/components/Paragraph';
import Section from '@/app/components/Section';
import YouTube from 'react-youtube';
import Tag from '@/app/components/Tag';

const videoId = 'vNyFxyhTa7U'; // YouTube video ID

const videoOptions = {
	height: '100%',
	width: '100%',
	playerVars: {
		autoplay: 1, // Autoplay video
		controls: 1, // Hide video controls
		modestbranding: 1, // Hide YouTube logo and branding
		rel: 0, // Disable showing related videos at the end
		showinfo: 0, // Hide video information (e.g., title)
		mute: 1, // Mute video
		loop: 1, // Enable looping
		playlist: videoId,
	},
};

export default function Feeling() {
	return (
		<>
			<Section
				title='Feeling'
				text={
					<>
						An <b>AI-driven clothing brand</b>. Every <b>ad</b>,{' '}
						<b>model</b>, and <b>product graphic</b> is designed
						using <b>advanced generative artificial intelligence</b>
						, offering a truly unique and personalized touch.
					</>
				}
				deliverables='Website, AI Products Graphics, AI Advertising Videos'
				date='October 2024 - December 2024'
				role='Designer, Developer, Marketer'
				image='/img/projects/feeling/logo.webp'
			/>
			<Paragraph
				text={
					<>
						Take a look and explore the <b>AI-driven process</b>{' '}
						that brings Feeling’s <b>products</b>, <b>ads</b>, and{' '}
						<b>models</b> to life.
					</>
				}
			/>
			<div className='space-y-2'>
				<Card
					subtitle='Understand the idea'
					text={
						<>
							<p className='mb-2'>
								The brand had been dormant for years but wanted
								to make a comeback with an{' '}
								<b>AI-driven concept</b>. The idea was to
								embrace a <b>resurrecting theme</b>, inspired by
								Halloween, where <b>zombie-inspired products</b>{' '}
								symbolized the brand’s revival.
							</p>
							This concept was designed to blend <b>technology</b>{' '}
							with a bold, eerie <b>aesthetic</b>, creating a{' '}
							<b>unique and intriguing identity</b>.
						</>
					}
				/>
				<Card
					subtitle='Design Products with AI'
					image='/img/projects/feeling/products.webp'
					largeImage={true}
					text={
						<>
							<p className='mb-2'>
								Using <b>Generative AI tools</b>, I designed
								exclusive, cutting-edge <b>products</b> and{' '}
								<b>promotional images</b> that embodied the{' '}
								<b>resurrection theme</b>.
							</p>
							Each item, from <b>apparel</b> to <b>accessories</b>
							, was crafted with AI to produce{' '}
							<b>unique, innovative designs</b> that stood out in
							the market, blending <b>art</b> with{' '}
							<b>technology</b>.
							<br />
							<br />
							<div className='flex flex-wrap space-y-2 justify-left items-end'>
								<Tag
									className='mr-2'
									image='/img/tags/skills/photoshop.png'
									name='Adobe Photoshop'
									url='https://www.adobe.com/products/photoshop.html'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/generativeai.webp'
									name='Generative AI'
									url='https://en.wikipedia.org/wiki/Generative_artificial_intelligence'
								/>
							</div>
						</>
					}
				/>
				<Card
					subtitle='Develop the website'
					image='/img/projects/feeling/website.webp'
					largeImage={true}
					text={
						<>
							I created a <b>sleek website</b> that captured the
							brand’s transformation. The design incorporated{' '}
							<b>smooth navigation</b> and{' '}
							<b>responsive features</b>, with a{' '}
							<b>Halloween-inspired collection</b> that reflected
							the resurrected brand.
							<br />
							<br />
							<div className='flex flex-wrap space-y-2 justify-left items-end'>
								<Tag
									className='mr-2'
									image='/img/tags/skills/figma.png'
									name='Figma'
									url='https://www.figma.com/'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/nextjs.webp'
									name='Next.js'
									url='https://nextjs.org/'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/ts.png'
									name='TypeScript'
									url='https://www.typescriptlang.org/'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/prisma.png'
									name='Prisma'
									url='https://www.prisma.io/'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/html.png'
									name='HTML'
									url='https://developer.mozilla.org/en-US/docs/Web/HTML'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/css.png'
									name='CSS'
									url='https://developer.mozilla.org/en-US/docs/Web/CSS'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/stripe.jpeg'
									name='Stripe'
									url='https://stripe.com/'
								/>
							</div>
						</>
					}
				/>
				<Card
					subtitle='Create Promotional AI Videos'
					largeImage={true}
					text={
						<>
							<p className='mb-2'>
								To promote the brand, I developed{' '}
								<b>AI-generated promotional videos</b>. These
								visually captivating clips featured{' '}
								<b>zombies interacting with the products</b>,
								showcasing the brand’s{' '}
								<b>theme of resurrection</b>.
							</p>
							The videos created a sense of{' '}
							<b>intrigue and excitement</b>, highlighting the
							brand’s new, <b>AI-driven direction</b>.
							<br />
							<br />
							<div className='flex flex-wrap space-y-2 justify-left items-end'>
								<Tag
									className='mr-2'
									image='/img/tags/skills/generativeai.webp'
									name='Generative AI'
									url='https://en.wikipedia.org/wiki/Generative_artificial_intelligence'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/photoshop.png'
									name='Adobe Photoshop'
									url='https://www.adobe.com/products/photoshop.html'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/video.jpg'
									name='Video Editing'
									url='https://en.wikipedia.org/wiki/Video_editing'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/imovie.jpeg'
									name='iMovie'
									url='https://www.apple.com/imovie/'
								/>
							</div>
						</>
					}
				/>
				<div
					className='relative w-full rounded overflow-hidden'
					style={{
						paddingBottom: '56.25%',
						boxShadow:
							'0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 1px rgba(0, 0, 0, 0.08)',
					}}
				>
					<YouTube
						videoId={videoId}
						opts={videoOptions}
						className='absolute top-0 left-0 w-full h-full'
					/>
				</div>

				<Feedback />
			</div>
		</>
	);
}
