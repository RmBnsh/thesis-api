import Link from 'next/link';
import Image from 'next/image';

import Head from 'next/head';

const About = () => {
	return (
		
		
		<section class="bg-center bg-no-repeat bg-gray-500 bg-blend-multiply"
		style={{ backgroundImage: "url('/board-meeting-2048x1414.jpg')" }}
		>
			<div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
				<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We Empower the Future through Innovation and Technology</h1>
				<p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Welcome to the Digital Systems Department, where we are dedicated to advancing knowledge in technology and fostering innovation. Our team has developed this website as part of our thesis project, aiming to create a valuable resource for our community.</p>
				<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
					<a href="https://ds.uth.gr/" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
						Our Department
						<svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
					<a href="https://www.linkedin.com/in/banush-rama/" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
						Learn more about me
					</a>  
				</div>
			</div>
		</section>
		

	)
}

export default About