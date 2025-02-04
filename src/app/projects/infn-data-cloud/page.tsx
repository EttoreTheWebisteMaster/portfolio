import Card from '@/app/components/Card';
import ContactTags from '@/app/components/ContactTags';
import Paragraph from '@/app/components/Paragraph';
import Section from '@/app/components/Section';

export default function InfnDataCloud() {
	return (
		<>
			<Section
				title='INFN Data Cloud'
				text={
					<>
						<b>Redesign of the INFN Data Cloud Dashboard</b>, a user
						interface for managing and deploying{' '}
						<b>cloud resources</b>, providing a streamlined, secure,
						and efficient experience for <b>researchers</b> and{' '}
						<b>developers</b>.
					</>
				}
				deliverables='UX/UI Interface, Vulnerability Fixes, Codebase Refactoring'
				date='October 2023 - February 2024'
				role='UX/UI Designer, Developer'
				image='/img/projects/infn-data-cloud/data-cloud-logo.png'
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
					subtitle='Identifying Design Challenges'
					image='/img/projects/infn-data-cloud/old.png'
					largeImage={true}
					text={
						<>
							It started by conducting a thorough audit of the{' '}
							<b>existing INFN Data Cloud Dashboard</b>. My goal
							was to uncover design flaws, user pain points, and
							areas where the platform fell short in terms of{' '}
							<b>security</b>, <b>performance</b>, and{' '}
							<b>user engagement</b>. This phase involved{' '}
							<b>direct user feedback</b>, analyzing session
							recordings, and consulting with internal teams to
							understand the dashboard’s <b>core issues</b>.
						</>
					}
				/>
				<Card
					subtitle='Crafting UX/UI Mockups'
					image='/img/projects/infn-data-cloud/mockup.png'
					largeImage={true}
					text={
						<>
							Based on the insights from the initial audit, I
							created detailed <b>wireframes</b> and{' '}
							<b>prototypes</b> using modern{' '}
							<b>UX/UI design tools</b>. The focus was on
							simplifying complex workflows, enhancing the{' '}
							<b>visual appeal</b> with a cleaner, more intuitive
							layout, and introducing <b>responsive design</b> for
							better accessibility across devices. I also ensured
							that the dashboard remained aligned with{' '}
							<b>INFN’s branding</b> while improving its{' '}
							<b>usability</b> and overall <b>user journey</b>.
						</>
					}
				/>
				<Card
					subtitle='Implementing Frontend Enhancements'
					image='/img/projects/infn-data-cloud/new.png'
					largeImage={true}
					text={
						<>
							With the designs finalized, I transitioned into the
							implementation phase, where I enhanced the frontend
							using <b>HTML5</b>, <b>CSS3</b>, and{' '}
							<b>JavaScript</b>. My focus was on optimizing the{' '}
							<b>layout</b>, improving <b>responsiveness</b>{' '}
							across various screen sizes, and ensuring{' '}
							<b>smooth interactions</b>. Additionally, I
							integrated a <b>report</b> section, a{' '}
							<b>side navbar</b>, and <b>bookmarks</b> for easy
							and quick access to key features.
						</>
					}
				/>
				<Card
					subtitle='Refactoring the Codebase'
					text={
						<>
							I performed a comprehensive <b>refactoring</b> of
							the existing <b>codebase</b> to improve its{' '}
							<b>maintainability</b> and <b>scalability</b>. The
							code was streamlined to eliminate{' '}
							<b>redundancies</b> and improve its{' '}
							<b>modularity</b>. I adopted <b>best practices</b>,
							such as separating concerns, creating{' '}
							<b>reusable components</b>, and improving{' '}
							<b>code readability</b>. This made it easier for
							developers to add new features in the future and
							ensured a smoother <b>development process</b> moving
							forward.
						</>
					}
				/>
				<Card
					subtitle='Gathering User Feedback'
					text={
						<>
							<b>Testing</b> was critical to ensure that the
							redesigned <b>dashboard</b> functioned smoothly and
							securely. I conducted extensive{' '}
							<b>usability testing</b> with real users to ensure
							the new <b>interface</b> was intuitive and met their{' '}
							<b>needs</b>.
						</>
					}
				/>
				<Card
					subtitle='Conducting Comprehensive Security Testing'
					text={
						<>
							<b>Security</b> was a top priority throughout the
							redesign process. I used <b>Burp Suite</b> for
							comprehensive security assessments, which included:
							<ul>
								<li>
									<b>&nbsp;&nbsp;• Mapping the Application</b>
									: Used Burp Suite’s Spider tool to crawl the
									application and{' '}
									<b>identify accessible endpoints</b> and
									functionalities;
								</li>
								<li>
									<b>
										&nbsp;&nbsp;• Analyzing the Attack
										Surface
									</b>
									: Examined <b>input fields</b>,{' '}
									<b>cookies</b>, and <b>headers</b> to detect
									vulnerabilities;
								</li>
								<li>
									<b>
										&nbsp;&nbsp;• Testing for
										Vulnerabilities
									</b>
									: Employed Burp Suite’s Scanner to detect
									vulnerabilities like <b>SQL injection</b>,{' '}
									<b>XSS</b>, and <b>CSRF</b>;
								</li>
								<li>
									<b>&nbsp;&nbsp;• Manual Testing</b>:
									Performed manual testing with Burp Suite’s{' '}
									<b>Repeater</b> and <b>Intruder</b> tools to
									exploit vulnerabilities;
								</li>
								<li>
									<b>&nbsp;&nbsp;• Reporting</b>: Generated
									reports with <b>risk assessments</b> and{' '}
									<b>mitigations</b>.
								</li>
							</ul>
							<br />
							This thorough testing ensured the dashboard met the{' '}
							<b>highest security standards</b> and was{' '}
							<b>resilient against attacks</b>.
						</>
					}
				/>
				<Card
					subtitle='Deploying the Redesigned Dashboard'
					image=''
					text={
						<>
							Once the testing phase was complete, we finalized
							the <b>deployment</b> of the updated dashboard. This
							involved setting up{' '}
							<b>
								continuous integration/continuous deployment
								(CI/CD)
							</b>{' '}
							pipelines to ensure smooth updates and bug fixes in
							the future. The new dashboard was deployed in a{' '}
							<b>staged approach</b> to ensure a seamless
							transition for users, with clear communication about
							the changes. <b>Post-launch monitoring</b> was set
							up to track any performance issues, gather{' '}
							<b>user feedback</b>, and ensure that the platform
							operated as expected in a live environment.
						</>
					}
				/>
				<Card
					subtitle='Presenting the INFN Data Cloud Dashboard Redesign at ISGC 2024'
					image='/img/projects/infn-data-cloud/isgc.png'
					largeImage={true}
					text={
						<>
							After deploying the redesigned dashboard, I
							presented the changes at the{' '}
							<b>
								International Symposium on Grids & Clouds (ISGC)
								2024 at Taipei
							</b>
							. This presentation showcased the enhancements in{' '}
							<b>efficiency</b>, <b>user experience</b>, and{' '}
							<b>security</b> to a wide range of{' '}
							<b>international agencies</b>, highlighting the
							comprehensive improvements made to the{' '}
							<b>INFN Cloud Dashboard</b>.
						</>
					}
				/>

				<Paragraph
					text={
						<>
							<b>What do you think?</b>
							<br />
							<br />
							Is there anything you’d <b>tweak</b> or{' '}
							<b>improve</b>?
							<br />
							<br />
							Feel free to <b>reach out</b> and let me know your
							thoughts!
						</>
					}
				/>
				<ContactTags />
			</div>
		</>
	);
}
