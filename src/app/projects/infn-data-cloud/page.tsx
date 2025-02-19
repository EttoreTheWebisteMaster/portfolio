import Card from '@/app/components/Card';
import Feedback from '@/app/components/Feedback';
import Paragraph from '@/app/components/Paragraph';
import Section from '@/app/components/Section';
import Tag from '@/app/components/Tag';

export default function InfnDataCloud() {
	return (
		<>
			<Section
				title='INFN Data Cloud'
				text={
					<>
						A <b>powerful</b>, <b>intuitive</b> interface designed
						for <b>researchers</b> and <b>developers</b> to deploy
						and control <b>cloud resources</b> with unmatched ease.
						I led its <b>redesign</b> and <b>refactoring</b>,{' '}
						<b>enhanced security</b> and <b>efficiency</b> to
						elevate the experience.
					</>
				}
				deliverables='UX/UI Interface, Vulnerability Fixes, Codebase Refactoring'
				date='October 2023 - February 2024'
				role='UX/UI Designer, Developer'
				image='/img/projects/infn-data-cloud/data-cloud-logo.webp'
			/>
			<Paragraph
				text={
					<>
						The <b>redesign</b>, <b>refactoring</b>, and{' '}
						<b>security enhancement</b> of the INFN Data Cloud
						Dashboard involved a <b>meticulous</b>,{' '}
						<b>step-by-step process</b>.
					</>
				}
			/>
			<div className='space-y-2'>
				<Card
					subtitle='What is the INFN Cloud Dashboard?'
					text={
						<>
							<p className='mb-2'>
								The INFN Cloud Dashboard is a <b>powerful</b>{' '}
								and <b>intuitive</b> web interface designed to
								streamline the management of{' '}
								<b>cloud computing resources</b>.
							</p>
							It provides users with secure access to advanced{' '}
							<b>computing</b>, <b>storage</b>, and{' '}
							<b>networking</b> capabilities, enabling efficient
							deployment and monitoring of <b>virtual machines</b>
							, <b>containers</b>, and various other{' '}
							<b>cloud services</b>.
						</>
					}
				/>
				<Card
					subtitle='Identifying Design Challenges'
					image='/img/projects/infn-data-cloud/old.webp'
					largeImage={true}
					text={
						<>
							<p className='mb-2'>
								It started by conducting a thorough audit of the{' '}
								<b>existing INFN Data Cloud Dashboard</b>.
							</p>
							<p className='mb-2'>
								My goal was to uncover design flaws, user pain
								points, and areas where the platform fell short
								in terms of <b>security</b>, <b>performance</b>,
								and <b>user engagement</b>.
							</p>
							This phase involved <b>direct user feedback</b>,
							analyzing session recordings, and consulting with
							internal teams to understand the dashboard’s{' '}
							<b>core issues</b>.
						</>
					}
				/>
				<Card
					subtitle='Crafting UX/UI Mockups'
					image='/img/projects/infn-data-cloud/mockup.webp'
					largeImage={true}
					text={
						<>
							<p className='mb-2'>
								Based on the insights from the initial audit, I
								created detailed <b>wireframes</b> and{' '}
								<b>prototypes</b> using modern{' '}
								<b>UX/UI design tools</b>.
							</p>
							<p className='mb-2'>
								The focus was on simplifying complex workflows,
								enhancing the <b>visual appeal</b> with a
								cleaner, more intuitive layout, and introducing{' '}
								<b>responsive design</b> for better
								accessibility across devices.
							</p>
							I also ensured that the dashboard remained aligned
							with <b>INFN’s branding</b> while improving its{' '}
							<b>usability</b> and overall <b>user journey</b>.
						</>
					}
				/>
				<Card
					subtitle='Implementing Frontend Enhancements'
					image='/img/projects/infn-data-cloud/new.webp'
					largeImage={true}
					text={
						<>
							<p className='mb-2'>
								With the designs finalized, I transitioned into
								the implementation phase, where I enhanced the
								frontend using <b>HTML5</b>, <b>CSS3</b>, and{' '}
								<b>JavaScript</b>.
							</p>
							<p className='mb-2'>
								My focus was on optimizing the <b>layout</b>,
								improving <b>responsiveness</b> across various
								screen sizes, and ensuring{' '}
								<b>smooth interactions</b>.
							</p>
							Additionally, I integrated a <b>report</b> section,
							a <b>side navbar</b>, and <b>bookmarks</b> for easy
							and quick access to key features.
							<br />
							<br />
							<div className='flex flex-wrap space-y-2 justify-left items-end'>
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
									image='/img/tags/skills/js.png'
									name='JavaScript'
									url='https://www.javascript.com/'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/flask.png'
									name='Flask'
									url='https://flask.palletsprojects.com/'
								/>
							</div>
						</>
					}
				/>
				<Card
					subtitle='Refactoring the Codebase'
					text={
						<>
							<p className='mb-2'>
								I performed a comprehensive <b>refactoring</b>{' '}
								of the existing <b>codebase</b> to improve its{' '}
								<b>maintainability</b> and <b>scalability</b>.
							</p>
							<p className='mb-2'>
								The code was streamlined to eliminate{' '}
								<b>redundancies</b> and improve its{' '}
								<b>modularity</b>. I adopted{' '}
								<b>best practices</b>, such as separating
								concerns, creating <b>reusable components</b>,
								and improving <b>code readability</b>.
							</p>
							This made it easier for developers to add new
							features in the future and ensured a smoother{' '}
							<b>development process</b> moving forward.
							<br />
							<br />
							<div className='flex flex-wrap space-y-2 justify-left items-end'>
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
									image='/img/tags/skills/js.png'
									name='JavaScript'
									url='https://www.javascript.com/'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/flask.png'
									name='Flask'
									url='https://flask.palletsprojects.com/'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/py.png'
									name='Python'
									url='https://www.python.org/'
								/>
							</div>
						</>
					}
				/>
				<Card
					subtitle='Gathering User Feedback'
					text={
						<>
							<p className='mb-2'>
								<b>Testing</b> was critical to ensure that the
								redesigned <b>dashboard</b> functioned smoothly
								and securely.
							</p>
							I conducted extensive <b>usability testing</b> with
							real users to ensure the new <b>interface</b> was
							intuitive and met their <b>needs</b>.
							<br />
							<br />
							<Tag
								image='/img/tags/skills/clientrelationships.png'
								name='Client Relationships'
								url='https://en.wikipedia.org/wiki/Customer_relationship_management'
							/>
						</>
					}
				/>
				<Card
					subtitle='Conducting Comprehensive Security Testing'
					text={
						<>
							<p className='mb-2'>
								<b>Security</b> was a top priority throughout
								the redesign process. I used <b>Burp Suite</b>{' '}
								for comprehensive security assessments, which
								included:
							</p>
							<p className='mb-2'>
								<b>Mapping the Application</b>: Used Burp
								Suite’s Spider tool to crawl the application and{' '}
								<b>identify accessible endpoints</b> and
								functionalities;
							</p>
							<p className='mb-2'>
								<b>Analyzing the Attack Surface</b>: Examined{' '}
								<b>input fields</b>, <b>cookies</b>, and{' '}
								<b>headers</b> to detect vulnerabilities;
							</p>
							<p className='mb-2'>
								<b>Testing for Vulnerabilities</b>: Employed
								Burp Suite’s Scanner to detect vulnerabilities
								like <b>SQL injection</b>, <b>XSS</b>, and{' '}
								<b>CSRF</b>;
							</p>
							<p className='mb-2'>
								<b>Manual Testing</b>: Performed manual testing
								with Burp Suite’s <b>Repeater</b> and{' '}
								<b>Intruder</b> tools to exploit
								vulnerabilities;
							</p>
							<p className='mb-2'>
								<b>Reporting</b>: Generated reports with{' '}
								<b>risk assessments</b> and <b>mitigations</b>.
							</p>
							This thorough testing ensured the dashboard met the{' '}
							<b>highest security standards</b> and was{' '}
							<b>resilient against attacks</b>.
							<br />
							<br />
							<div className='flex flex-wrap space-y-2 justify-left items-end'>
								<Tag
									className='mr-2'
									image='/img/tags/skills/burpsuite.webp'
									name='Burp Suite'
									url='https://portswigger.net/burp'
								/>
								<Tag
									className='mr-2'
									image='/img/tags/skills/websecurity.png'
									name='Web Security'
									url='https://en.wikipedia.org/wiki/Internet_security'
								/>
							</div>
						</>
					}
				/>
				<Card
					subtitle='Deploying the Redesigned Dashboard'
					image=''
					text={
						<>
							<p className='mb-2'>
								Once the testing phase was complete, we
								finalized the <b>deployment</b> of the updated
								dashboard. This involved setting up{' '}
								<b>
									continuous integration/continuous deployment
									(CI/CD)
								</b>{' '}
								pipelines to ensure smooth updates and bug fixes
								in the future.
							</p>
							<p className='mb-2'>
								The new dashboard was deployed in a{' '}
								<b>staged approach</b> to ensure a seamless
								transition for users, with clear communication
								about the changes.
							</p>
							<b>Post-launch monitoring</b> was set up to track
							any performance issues, gather <b>user feedback</b>,
							and ensure that the platform operated as expected in
							a live environment.
						</>
					}
				/>
				<Card
					subtitle='Presenting the INFN Data Cloud Dashboard Redesign at ISGC 2024'
					image='/img/projects/infn-data-cloud/isgc.webp'
					largeImage={true}
					text={
						<>
							<p className='mb-2'>
								After deploying the redesigned dashboard, I
								presented the changes at the{' '}
								<b>
									International Symposium on Grids & Clouds
									(ISGC) 2024 at Taipei
								</b>
								.
							</p>
							This presentation showcased the enhancements in{' '}
							<b>efficiency</b>, <b>user experience</b>, and{' '}
							<b>security</b> to a wide range of{' '}
							<b>international agencies</b>, highlighting the
							comprehensive improvements made to the{' '}
							<b>INFN Cloud Dashboard</b>.
						</>
					}
				/>

				<Feedback />
			</div>
		</>
	);
}
