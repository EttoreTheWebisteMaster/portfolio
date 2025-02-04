import Card from '../components/Card';
import ContactTags from '../components/ContactTags';
import Paragraph from '../components/Paragraph';
import Tag from '../components/Tag';

export default function About() {
	return (
		<>
			<div className='glassElement md:w-full p-[32px] mt-[32px] rounded-[10px] cursor-pointer'>
				<div className='md:flex md:items-center'>
					<div
						className='w-full md:min-w-80 md:w-80 md:h-80 h-40 mb-[32px] md:mb-0 rounded-[15px] bg-center bg-no-repeat bg-cover innerShadow opacity-90'
						style={{ backgroundImage: `url(/img/profile.jpeg)` }}
					></div>

					<div className='md:px-12'>
						<p className='text-4xl font-black mb-2'>Ettore Serra</p>
						<p className='text-base opacity-50'>
							A full-stack <b>developer</b>, <b>designer</b>, and{' '}
							<b>IT specialist</b> with a passion for{' '}
							<b>computer science</b>, <b>design</b>, <b>art</b>,{' '}
							<b>music</b>, <b>nature</b>, and <b>martial arts</b>
							. I’m a creative thinker who constantly seeks new
							knowledge, always on the lookout for inspiration in
							everything around me.
						</p>
						<ContactTags align='left' />
					</div>
				</div>
			</div>

			{/* EDUCATION */}
			<Paragraph
				text={
					<>
						My journey started in <b>classrooms</b>, and evolved
						through <b>internships</b>, <b>courses</b> and{' '}
						<b>competitions</b>.
					</>
				}
			/>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				<Card
					title='I.I.S. Europa Unita'
					info='September 2015 - July 2020'
					roundImage='/img/tags/education/eu.png'
					subtitle='IT Expert Diploma'
					truncate={false}
					text={
						<>
							Gained proficiency in <b>programming languages</b>{' '}
							such as <b>C++</b>, <b>C#</b>, and <b>Java</b>.
							Developed websites using a range of technologies
							including <b>HTML</b>, <b>Bootstrap</b>, <b>CSS</b>,{' '}
							<b>jQuery</b>, <b>PHP</b>, <b>MySQL</b>, and{' '}
							<b>JavaScript</b>.
							<br />
							<br />
							Gained hands-on experience with{' '}
							<b>telecommunication technologies</b> and{' '}
							<b>Arduino</b>. Built a strong foundation in{' '}
							<b>systems architecture</b>,{' '}
							<b>network protocols</b>, and{' '}
							<b>infrastructure management</b>.
						</>
					}
				/>
				<Card
					title='You Are My Guide'
					info='June 2018 - September 2018'
					subtitle='Developer Internship'
					roundImage='/img/tags/education/yamgu.jpg'
					truncate={false}
					text={
						<>
							Developed a <b>Messenger-integrated chatbot</b> for
							a <b>restaurant</b>, designed to{' '}
							<b>streamline the ordering process</b> and{' '}
							<b>enhance the customer experience</b>.
							<br />
							<br />
							Programmed{' '}
							<b>intelligent, pre-defined question flows</b> to
							assist customers seamlessly, from{' '}
							<b>placing orders</b> to addressing their{' '}
							<b>needs during their meal</b>.
						</>
					}
				/>
				<Card
					title='Zero Robotics'
					info='October 2018 - April 2019'
					subtitle='Online Coding Competition'
					roundImage='/img/tags/education/zerorobotics.png'
					truncate={false}
					text={
						<>
							Competed in a programming challenge centered on
							controlling <b>SPHERES satellites</b>, designing
							software to navigate <b>obstacles</b>, retrieve{' '}
							<b>virtual objects</b>, and manage resources like{' '}
							<b>fuel</b> and <b>battery</b> under strict
							constraints.
							<br />
							<br />
							Inspired by real-world problems from <b>
								DARPA
							</b>, <b>NASA</b>, and <b>MIT</b>, the competition
							showcased practical applications of coding in{' '}
							<b>space exploration</b>.
						</>
					}
				/>
				<Card
					title='Google'
					info='September 2020 - January 2025'
					subtitle='Online Courses'
					roundImage='/img/tags/education/google.png'
					truncate={false}
					text={
						<>
							<b>Google UX Design:</b> building user-focused
							designs with industry-standard tools and practices.
							<br />
							<br />
							<b>
								Product Design, Validation, UX & Design Sprints:
							</b>{' '}
							mastering the end-to-end product design process,
							from ideation to testing.
							<br />
							<br />
							<b>Introduction to Generative AI:</b> exploring the
							foundations of AI.
						</>
					}
				/>
				<Card
					title='Jhons Hopkins University'
					info='January 2021 - March 2021'
					subtitle='Online Course'
					roundImage='/img/tags/education/jhu.png'
					truncate={false}
					text={
						<>
							<b>HTML, CSS, and JavaScript for Web Developers:</b>{' '}
							a comprehensive course focused on building dynamic,
							responsive websites using core web technologies,
							equipping learners with essential front-end
							development skills.
						</>
					}
				/>
				<Card
					title='Awwwards'
					info='September 2021 - January 2022'
					subtitle='Online Courses'
					roundImage='/img/tags/education/awwwards.png'
					truncate={false}
					text={
						<>
							<b>Art Direction & Design Leadership:</b> mastering
							the art of leading creative projects with vision and
							strategy.
							<br />
							<br />
							<b>Unleashing Your Best:</b> a journey to unlock
							your full creative potential.
							<br />
							<br />
							<b>Building an Immersive Website:</b> crafting a
							fully custom, framework-free website from the ground
							up.
						</>
					}
				/>
				<Card
					title='IBM'
					info='November 2023 - December 2023'
					subtitle='Online Course'
					roundImage='/img/tags/education/ibm.webp'
					truncate={false}
					text={
						<>
							<b>Introduction to Artificial Intelligence:</b> a
							foundational course covering AI principles,
							technologies, and real-world applications, designed
							to demystify the basics of artificial intelligence.
						</>
					}
				/>
				<Card
					title='Harvard'
					info='November 2023 - October 2024'
					subtitle='Online Courses'
					roundImage='/img/tags/education/harvard.png'
					truncate={false}
					text={
						<>
							<b>CS50’s Introduction to Computer Science:</b> a
							comprehensive dive into the fundamentals of computer
							science and programming.
							<br />
							<br />
							<b>
								CS50’s Introduction to Artificial Intelligence
								with Python:
							</b>{' '}
							exploring AI concepts and applications through
							Python, from search algorithms to machine learning.
						</>
					}
				/>
				<Card
					title='PortSwigger'
					info='February 2024 - April 2024'
					subtitle='Online Cybersecurity Academy'
					roundImage='/img/tags/education/ps.png'
					truncate={false}
					text={
						<>
							<b>Web Security Academy:</b> an in-depth program
							exploring web security concepts, vulnerabilities,
							and defenses, designed to build expertise in
							identifying and mitigating risks in modern web
							applications.
						</>
					}
				/>
			</div>

			{/* EXPERIENCE */}
			<Paragraph
				text={
					<>
						It’s been a path filled with <b>freelancing gigs</b> and{' '}
						<b>full-time roles</b>, each adding a new layer to my
						experience.
					</>
				}
			/>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				<Card
					title='ICP Informatica'
					info='January 2021 - August 2023'
					subtitle='Full-stack Developer'
					roundImage='/img/tags/experience/icp.png'
					truncate={false}
					text={
						<>
							Developed, maintained, and optimized the{' '}
							<b>myEsperto management software</b>, a
							comprehensive and user-friendly solution designed to
							meet the unique needs of{' '}
							<b>commercial, production, and service companies</b>
							.
							<br />
							<br />
							Managed <b>bug fixes</b>, <b>database operations</b>
							, and enhanced <b>system efficiency</b> using web
							technologies such as <b>JavaScript</b>,{' '}
							<b>TypeScript</b>, and <b>SQL</b>.
							<br />
							<br />
							Provided <b>end-to-end customer support</b>,
							covering <b>hardware</b>, <b>software</b>, and{' '}
							<b>administrative assistance</b>, ensuring seamless
							functionality and <b>customer satisfaction</b>.
						</>
					}
				/>
				<Card
					title='External Zone'
					info='March 2021 - August 2023'
					subtitle='Freelance Web Developer'
					roundImage='/img/tags/experience/ez.png'
					truncate={false}
					text={
						<>
							Designed and developed custom <b>websites</b> for
							personal projects and clients, turning initial
							concepts into fully functional online solutions.
							<br />
							<br />
							Conducted <b>requirements gathering</b>,{' '}
							<b>branding</b>, and <b>mockup creation</b> to
							ensure alignment with client goals and target
							audiences.
							<br />
							<br />
							Managed <b>end-to-end development</b>, including{' '}
							<b>hosting setup</b>, <b>domain registration</b>,
							and <b>site deployment</b>.
							<br />
							<br />
							Implemented <b>SEO strategies</b> to boost online
							visibility and optimize site performance
							post-launch.
						</>
					}
				/>
				<Card
					title='INFN - Italian National Institute of Nuclear Physics'
					info='October 2023 - present'
					subtitle='Full-stack Developer'
					roundImage='/img/tags/experience/infn.png'
					truncate={false}
					text={
						<>
							Designed, developed, and maintained the{' '}
							<b>INFN Data Cloud dashboard</b>, an integrated
							suite of <b>cloud services</b> operating on the
							dedicated <b>INFN Cloud infrastructure</b>,
							providing seamless access and management for
							researchers.
							<br />
							<br />
							Led the development and ongoing enhancement of{' '}
							<b>websites</b> and <b>services</b> used by an
							international community of researchers, ensuring{' '}
							<b>reliability</b>, <b>scalability</b>, and{' '}
							<b>user-centric functionality</b>.
							<br />
							<br />
							Presented the project at{' '}
							<b>international conferences</b>, showcasing its
							impact and innovation.
						</>
					}
				/>
			</div>

			{/* CODING SKILLS */}
			<Paragraph
				text={
					<>
						<b>Coding</b> became second nature through{' '}
						<b>constant learning</b> and tackling real-world{' '}
						<b>challenges</b>. This helped me developing the
						following <b>coding skills</b>.
					</>
				}
			/>
			<div className='flex flex-wrap space-x-2 space-y-2 justify-center md:px-24 items-end'>
				<Tag
					image='/img/tags/skills/git.png'
					name='Git'
					url='https://git-scm.com/'
				/>
				<Tag
					image='/img/tags/skills/py.png'
					name='Python'
					url='https://www.python.org/'
				/>
				<Tag
					image='/img/tags/skills/MySQL.png'
					name='MySQL'
					url='https://www.mysql.com/'
				/>
				<Tag
					image='/img/tags/skills/js.png'
					name='JavaScript'
					url='https://www.javascript.com/'
				/>
				<Tag
					image='/img/tags/skills/ts.png'
					name='TypeScript'
					url='https://www.typescriptlang.org/'
				/>
				<Tag
					image='/img/tags/skills/nodejs.png'
					name='Node.js'
					url='https://nodejs.org/'
				/>
				<Tag
					image='/img/tags/skills/nextjs.webp'
					name='Next.js'
					url='https://nextjs.org/'
				/>
				<Tag
					image='/img/tags/skills/react.webp'
					name='React.js'
					url='https://reactjs.org/'
				/>
				<Tag
					image='/img/tags/skills/threejs.png'
					name='Three.js'
					url='https://threejs.org/'
				/>
				<Tag
					image='/img/tags/skills/jquery.png'
					name='jQuery'
					url='https://jquery.com/'
				/>
				<Tag
					image='/img/tags/skills/php.webp'
					name='PHP'
					url='https://www.php.net/'
				/>
				<Tag
					image='/img/tags/skills/java.png'
					name='Java'
					url='https://www.java.com/'
				/>
				<Tag
					image='/img/tags/skills/laravel.png'
					name='Laravel'
					url='https://laravel.com/'
				/>
				<Tag
					image='/img/tags/skills/docker.webp'
					name='Docker'
					url='https://www.docker.com/'
				/>
				<Tag
					image='/img/tags/skills/html.png'
					name='HTML'
					url='https://developer.mozilla.org/en-US/docs/Web/HTML'
				/>
				<Tag
					image='/img/tags/skills/css.png'
					name='CSS'
					url='https://developer.mozilla.org/en-US/docs/Web/CSS'
				/>
				<Tag
					image='/img/tags/skills/c.png'
					name='C'
					url='https://en.wikipedia.org/wiki/C_(programming_language)'
				/>
				<Tag
					image='/img/tags/skills/cplusplus.png'
					name='C++'
					url='https://en.wikipedia.org/wiki/C%2B%2B'
				/>
				<Tag
					image='/img/tags/skills/csharp.png'
					name='C#'
					url='https://learn.microsoft.com/en-us/dotnet/csharp/'
				/>
				<Tag
					image='/img/tags/skills/arduino.png'
					name='Arduino'
					url='https://www.arduino.cc/'
				/>
				<Tag
					image='/img/tags/skills/flask.png'
					name='Flask'
					url='https://flask.palletsprojects.com/'
				/>
				<Tag
					image='/img/tags/skills/prisma.png'
					name='Prisma'
					url='https://www.prisma.io/'
				/>
				<Tag
					image='/img/tags/skills/stripe.jpeg'
					name='Stripe'
					url='https://stripe.com/'
				/>
				<Tag
					image='/img/tags/skills/unity.png'
					name='Unity'
					url='https://unity.com/'
				/>
				<Tag
					image='/img/tags/skills/unreal.png'
					name='Unreal Engine 4'
					url='https://www.unrealengine.com/'
				/>
			</div>

			{/* DESIGN SKILLS */}
			<Paragraph
				text={
					<>
						My <b>design skills</b> grew through projects that
						constantly pushed me to <b>innovate</b> and{' '}
						<b>perfect</b> my craft.
					</>
				}
			/>
			<div className='flex flex-wrap space-x-2 space-y-2 justify-center md:px-24 items-end'>
				<Tag
					image='/img/tags/skills/figma.png'
					name='Figma'
					url='https://www.figma.com/'
				/>
				<Tag
					image='/img/tags/skills/photoshop.png'
					name='Adobe Photoshop'
					url='https://www.adobe.com/products/photoshop.html'
				/>
				<Tag
					image='/img/tags/skills/illustrator.png'
					name='Adobe Illustrator'
					url='https://www.adobe.com/products/illustrator.html'
				/>
				<Tag
					image='/img/tags/skills/lightroom.png'
					name='Adobe Lightroom'
					url='https://www.adobe.com/products/photoshop-lightroom.html'
				/>
				<Tag
					image='/img/tags/skills/photography.jpg'
					name='Photography'
					url='https://en.wikipedia.org/wiki/Photography'
				/>
				<Tag
					image='/img/tags/skills/video.jpg'
					name='Video Editing'
					url='https://en.wikipedia.org/wiki/Video_editing'
				/>
				<Tag
					image='/img/tags/skills/premiere.png'
					name='Premiere Pro'
					url='https://www.adobe.com/products/premiere.html'
				/>
				<Tag
					image='/img/tags/skills/sonyvegas.webp'
					name='Sony Vegas'
					url='https://www.vegascreativesoftware.com/us/'
				/>
				<Tag
					image='/img/tags/skills/imovie.jpeg'
					name='iMovie'
					url='https://www.apple.com/imovie/'
				/>
				<Tag
					image='/img/tags/skills/finalcut.png'
					name='Final Cut Pro'
					url='https://www.apple.com/final-cut-pro/'
				/>
			</div>

			{/* OTHER SKILLS */}
			<Paragraph
				text={
					<>
						Lastly, throughout the journey, I collected a variety of{' '}
						<b>other skills</b> that have shaped my approach and
						broadened my <b>capabilities</b>.
					</>
				}
			/>
			<div className='flex flex-wrap space-x-2 space-y-2 justify-center md:px-24 items-end'>
				<Tag
					image='/img/tags/skills/burpsuite.webp'
					name='Burp Suite'
					url='https://portswigger.net/burp'
				/>
				<Tag
					image='/img/tags/skills/websecurity.png'
					name='Web Security'
					url='https://en.wikipedia.org/wiki/Internet_security'
				/>
				<Tag
					image='/img/tags/skills/generativeai.webp'
					name='Generative AI'
					url='https://en.wikipedia.org/wiki/Generative_artificial_intelligence'
				/>
				<Tag
					image='/img/tags/skills/officesuite.jpeg'
					name='Office Suite'
					url='https://www.microsoft.com/en-us/microsoft-365'
				/>
				<Tag
					image='/img/tags/skills/zabbix.png'
					name='Zabbix'
					url='https://www.zabbix.com/'
				/>
				<Tag
					image='/img/tags/skills/openstack.png'
					name='Openstack'
					url='https://www.openstack.org/'
				/>
				<Tag
					image='/img/tags/skills/foreman.webp'
					name='Foreman'
					url='https://theforeman.org/'
				/>
				<Tag
					image='/img/tags/skills/grafana.png'
					name='Grafana'
					url='https://grafana.com/'
				/>
				<Tag
					image='/img/tags/skills/linux.png'
					name='Linux'
					url='https://www.linux.org/'
				/>
				<Tag
					image='/img/tags/skills/windows.png'
					name='Windows'
					url='https://www.microsoft.com/en-us/windows/'
				/>
				<Tag
					image='/img/tags/skills/macos.png'
					name='MacOS'
					url='https://www.apple.com/macos/'
				/>
				<Tag
					image='/img/tags/skills/projectmanagement.png'
					name='Project Management'
					url='https://en.wikipedia.org/wiki/Project_management'
				/>
				<Tag
					image='/img/tags/skills/clientrelationships.png'
					name='Client Relationships'
					url='https://en.wikipedia.org/wiki/Customer_relationship_management'
				/>
			</div>
		</>
	);
}
