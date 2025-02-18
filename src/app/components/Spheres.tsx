'use client';
'use client';

import React, { useEffect, useState } from 'react';

const Spheres: React.FC = () => {
	const [spheres, setSpheres] = useState<number[]>([]);

	// Create random number of spheres and store them in state
	useEffect(() => {
		const numSpheres = 10; // Adjust number of spheres here
		const sphereArray = Array.from(
			{ length: numSpheres },
			(_, index) => index
		);
		setSpheres(sphereArray);
	}, []);

	return (
		<div className='fixed inset-0 z-0 pointer-events-none overflow-hidden'>
			{spheres.map((_, index) => {
				const size = Math.random() * 400 + 50; // Random size between 50px and 500px
				const randomDuration = Math.random() * 50 + 30; // spheres speed (the lower the number higher the speed)
				const randomDelay = Math.random() * 40 + 's'; // Random delay when spheres fade in
				const randomMovement = `translate(${Math.random() * 100}vw, ${
					Math.random() * 100
				}vh)`; // Random movement

				return (
					<div
						key={index}
						className='absolute rounded-full animate-fadeIn opacity-0' // Added fadeIn class to sphere
						style={{
							width: `${size}px`,
							height: `${size}px`,
							background: `linear-gradient(145.28deg, rgba(193, 230, 255, 0.25) 15.75%, rgba(0, 125, 211, 0.5) 82.37%)`,
							boxShadow: '5px 5px 40px rgba(0, 0, 0, 0.1)',
							filter: `blur(${Math.random() * 10 + 5}px)`, // Random blur effect
							top: `${Math.random() * 100}%`, // Random initial top position
							left: `${Math.random() * 100}%`, // Random initial left position
							animation: `float ${randomDuration}s ease-in-out infinite, fadeIn 5s forwards`,
							animationDelay: randomDelay, // Random animation delay
							transform: randomMovement, // Random initial movement
						}}
					></div>
				);
			})}
		</div>
	);
};

export default Spheres;
