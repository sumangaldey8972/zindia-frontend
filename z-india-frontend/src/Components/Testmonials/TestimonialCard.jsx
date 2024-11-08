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
          This is some testimonial text for this month's CodePen challenge! This
          is some testimonial text for this month's CodePen challenge!
        </p>
        <div className="source">
          <span>Testimonial Source</span>
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
          This is some testimonial text for this month's CodePen challenge! This
          is some testimonial text for this month's CodePen challenge!
        </p>
        <div className="source">
          <span>Testimonial Source</span>
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
          This is some testimonial text for this month's CodePen challenge! This
          is some testimonial text for this month's CodePen challenge!
        </p>
        <div className="source">
          <span>Testimonial Source</span>
        </div>
        <span className="close quote">”</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
