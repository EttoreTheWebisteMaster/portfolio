import Contacts from "./Contacts";

export default function Footer() {
	return (
		<div className='glassElement w-full px-12 py-6 pt-12 mt-24'>
			<div className='mb-8'>
				<p className='text-2xl font-black'>Ettore Serra</p>
				<p className='text-xs font-medium uppercase opacity-50'>
					Developer & designer
				</p>
			</div>
			<Contacts />
		</div>
	);
}
