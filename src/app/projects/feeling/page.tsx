'use client';

import Card from '@/app/components/Card';
import Feedback from '@/app/components/Feedback';
import Paragraph from '@/app/components/Paragraph';
import Section from '@/app/components/Section';
import YouTube from 'react-youtube'

const videoOptions = {
	height: '100%',
	width: '100%',
	playerVars: {
		autoplay: 1, // Autoplay video
		controls: 1, // Hide video controls
		modestbranding: 1, // Hide YouTube logo and branding
		rel: 0, // Disable showing related videos at the end
		showinfo: 0, // Hide video information (e.g., title)
		mute: 1
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
							The brand had been dormant for years but wanted to
							make a comeback with an <b>AI-driven concept</b>.
							The idea was to embrace a <b>resurrecting theme</b>,
							inspired by Halloween, where{' '}
							<b>zombie-inspired products</b> symbolized the
							brand’s revival. This concept was designed to blend{' '}
							<b>technology</b> with a bold, eerie{' '}
							<b>aesthetic</b>, creating a{' '}
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
							Using <b>Generative AI tools</b>, I designed
							exclusive, cutting-edge <b>products</b> and{' '}
							<b>promotional images</b> that embodied the{' '}
							<b>resurrection theme</b>. Each item, from{' '}
							<b>apparel</b> to <b>accessories</b>, was crafted
							with AI to produce <b>unique, innovative designs</b>{' '}
							that stood out in the market, blending <b>art</b>{' '}
							with <b>technology</b>.
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
						</>
					}
				/>
				<Card
					subtitle='Create Promotional AI Videos'
					largeImage={true}
					text={
						<>
							To promote the brand, I developed{' '}
							<b>AI-generated promotional videos</b>. These
							visually captivating clips featured{' '}
							<b>zombies interacting with the products</b>,
							showcasing the brand’s <b>theme of resurrection</b>.
							The videos created a sense of{' '}
							<b>intrigue and excitement</b>, highlighting the
							brand’s new, <b>AI-driven direction</b>.
						</>
					}
				/>
				<div
					className='relative w-full rounded overflow-hidden'
					style={{ paddingBottom: '56.25%', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 1px rgba(0, 0, 0, 0.08)' }}
				>
					<YouTube
						videoId='i45FemqhdGI' // Replace with your YouTube video ID
						opts={videoOptions}
						className='absolute top-0 left-0 w-full h-full'
					/>
				</div>

				<Feedback />
			</div>
		</>
	);
}
