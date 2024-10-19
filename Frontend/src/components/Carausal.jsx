import React, { useState, useEffect } from "react";
import testimonialimg from "../assets/testimonial.jpeg";
import man1 from "../assets/man1.jpg";
import man3 from "../assets/man3.jpeg";
import woman from "../assets/woman.jpeg";
const testimonials = [
	{
		id: 1,
		name: "John Doe",
		text: "Donating blood was an incredibly rewarding experience. It's amazing to know that my small act can save lives!",
		image: testimonialimg,
	},
	{
		id: 2,
		name: "Jane Smith",
		text: "The process was quick, easy, and the staff was so friendly. I'll definitely be donating again!",
		image: man1,
	},
	{
		id: 3,
		name: "Mike Johnson",
		text: "As a regular donor, I can say that the feeling of helping others never gets old. It's a simple way to make a big difference.",
		image: man3,
	},
	{
		id: 4,
		name: "Emily Brown",
		text: "I was nervous at first, but the team made me feel so comfortable. Now, I encourage all my friends to donate!",
		image: woman,
	},
];

export default function TestimonialCarousel() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="py-20">
			<h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
				Testimonials
			</h1>
			<div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
				<div className="relative h-64 md:h-80 lg:h-96">
					{testimonials.map((testimonial, index) => (
						<div
							key={testimonial.id}
							className={`absolute inset-0 w-full h-full flex items-center justify-center p-6 transition-opacity duration-1000 ${
								index === currentTestimonial ? "opacity-100" : "opacity-0"
							}`}
							aria-hidden={index !== currentTestimonial}
						>
							<div className="flex flex-col items-center text-center">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-20 h-20 rounded-full mb-4"
								/>
								<p className="text-base md:text-lg px-20 lg:text-xl text-gray-700 mb-2">
									{testimonial.text}
								</p>

								<p className="font-semibold text-red-600 whitespace-nowrap">
									{testimonial.name}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className="flex justify-center p-2">
					{testimonials.map((_, index) => (
						<span
							key={index}
							className={`h-2 w-2 mx-1 rounded-full ${
								index === currentTestimonial ? "bg-red-600" : "bg-gray-300"
							}`}
							aria-hidden="true"
						></span>
					))}
				</div>
				<div className="sr-only" aria-live="polite">
					{`Current testimonial: ${testimonials[currentTestimonial].name} says ${testimonials[currentTestimonial].text}`}
				</div>
			</div>
		</div>
	);
}
