import React from "react";
import "./testmonial.css";

const TestimonialCard = () => {
	return (
		<div className="test-container">
			<div className="testimonial">
				<span className="open quote">“</span>
				<div className="image">
					<div className="clip"></div>
					<img src="https://placehold.co/100" />
				</div>
				<p>
					They made the entire home-buying process seamless and stress-free.
					From start to finish, the team was professional, responsive, and
					genuinely cared about helping me find the perfect home. I couldn’t be
					happier with my new property!
				</p>
				<div className="source">
					<span>Protyush Banarjee</span>
				</div>
				<span className="close quote">”</span>
			</div>

			<div className="testimonial">
				<span className="open quote">“</span>
				<div className="image">
					<div className="clip"></div>
					<img src="https://placehold.co/100" />
				</div>
				<p>
					I was impressed with the quality and attention to detail in every
					aspect of Z-India-Realty's work. They took the time to understand
					exactly what I was looking for and made it happen. Their team truly
					went above and beyond to make my dream a reality. Highly recommended
					for anyone looking for a reliable and trustworthy real estate partner!
				</p>
				<div className="source">
					<span>Arjun Biswas</span>
				</div>
				<span className="close quote">”</span>
			</div>

			<div className="testimonial">
				<span className="open quote">“</span>
				<div className="image">
					<div className="clip"></div>
					<img src="https://placehold.co/100" />
				</div>
				<p>
					I’m so happy with the apartment I purchased through Z-India-Realty
					They made the entire process smooth, and their team was there to
					answer every question I had. Their commitment to quality and customer
					satisfaction was evident in every step. I highly recommend them to
					anyone in the market for a new property.
				</p>
				<div className="source">
					<span>Abhilasha</span>
				</div>
				<span className="close quote">”</span>
			</div>
		</div>
	);
};

export default TestimonialCard;
