import Card from '@/app/components/Card';
import Feedback from '@/app/components/Feedback';
import Paragraph from '@/app/components/Paragraph';
import Section from '@/app/components/Section';

export default function MrFruitman() {
	return (
		<>
			<Section
				title='Mr Fruitman'
				text={
					<>
						Cycling through the city, serving up mouthwatering{' '}
						<b>topped fruit skewers</b>. The entire vibe is{' '}
						<b>inspired by the 20’s</b>, bringing a playful, vintage
						touch that really makes it pop.
					</>
				}
				deliverables='Branding, logo'
				date='October 2022'
				role='Illustrator'
				image='/img/projects/mr-fruitman/mr-fruitman-logo.webp'
			/>
			<Paragraph
				text={
					<>
						Take a peek <b>behind the scenes</b> and discover the
						journey of how this logo came to life,{' '}
						<b>step by step</b>.
					</>
				}
			/>
			<div className='space-y-2'>
				<Card
					subtitle='Set up the Mood'
					image='/img/projects/mr-fruitman/mood.webp'
					largeImage={true}
					text={
						<>
							After getting all the <b>necessary details</b> from
							the client , I put on my <b>headphones</b>, tuned
							into some <b>swing jazz</b>, and began{' '}
							<b>researching the 20’s</b>. This helped me immerse
							myself in the era’s vibe and{' '}
							<b>gather visual inspiration</b> for the logo.
						</>
					}
				/>
				<Card
					subtitle='Understand the Concept'
					text={
						<>
							I took the time to <b>fully understand</b> the
							essence of the brand, its <b>fun</b>, <b>retro</b>,
							and <b>quirky</b> feel. I wanted to capture the
							energy of <b>cycling</b> through the city with{' '}
							<b>fruit skewers</b>, all while embracing that
							distinct <b>20’s atmosphere</b>.
						</>
					}
				/>
				<Card
					subtitle='Sketch Initial Ideas'
					text={
						<>
							With the <b>mood set</b> and the{' '}
							<b>concept clear</b>, I grabbed my sketchbook and
							started putting down some rough ideas . I
							experimented with <b>different elements</b> and 20’s
							style typography. I focused on making it{' '}
							<b>playful</b> yet <b>vintage</b>.
						</>
					}
				/>
				<Card
					subtitle='Choose the Color Palette'
					text={
						<>
							After finalizing the initial sketch, I moved on to{' '}
							<b>picking colors</b>. I leaned towards{' '}
							<b>warm, vibrant tones</b>, something that reflects
							the <b>fresh</b>, <b>fruity</b> aspect of the brand
							while staying in line with the lively 20’s style.
							Think pops of <b>bright fruit colors</b> mixed with{' '}
							<b>muted vintage hues</b>. So i came out with a{' '}
							<b>light blue</b> and a <b>faded yellow</b>.
						</>
					}
				/>
				<Card
					subtitle='Digitalize the Design'
					image='/img/projects/mr-fruitman/mr-fruitman-digital.webp'
					largeImage={true}
					text={
						<>
							Next, <b>I took my sketch to Adobe Illustrator</b>.
							Using the pen tool, I recreated the logo in vector
							form, refining the lines, shapes, and overall
							composition.{' '}
							<b>
								I made sure the design was clean and scalable
								for any application.
							</b>
						</>
					}
				/>
				<Card
					subtitle='Select the Font'
					image='/img/projects/mr-fruitman/font.webp'
					largeImage={true}
					text={
						<>
							For the typography, I chose a{' '}
							<b>bold yet classic font</b> that had a touch of the
							20’s flair . It needed to balance both the{' '}
							<b>retro theme</b> and the <b>playful nature</b> of
							the brand, so I <b>tested a few different styles</b>{' '}
							before settling on the perfect one.
						</>
					}
				/>
				<Card
					subtitle='Refine and Perfect'
					image='/img/projects/mr-fruitman/logo-complete.webp'
					largeImage={true}
					text={
						<>
							I <b>fine-tuned the elements</b> of the logo,
							adjusting proportions and ensuring everything looked
							balanced. I also added a <b>fine vintage</b> effect
							and <b>tested</b> how the logo looked at{' '}
							<b>various sizes</b> to make sure it maintained its
							clarity and impact.
						</>
					}
				/>
				<Card
					subtitle='Final Review with the Client'
					text={
						<>
							Once I was happy with the design,{' '}
							<b>I shared it with the client for feedback</b>.
							After a few <b>minor tweaks</b>, the logo was
							finalized, capturing the 20’s vibe, the fun of
							cycling, and the freshness of fruit skewers in{' '}
							<b>one perfect design</b>.
						</>
					}
				/>
				<Card
					subtitle='Deliver the Final Files'
					text={
						<>
							Finally, I prepared all the necessary{' '}
							<b>file formats</b> for the client, whether for{' '}
							<b>digital</b>, <b>print</b>, or <b>social media</b>{' '}
							use and handed over the logo. The project was
							complete, and the logo was ready to make its mark.
						</>
					}
				/>

				<Feedback />
			</div>
		</>
	);
}
