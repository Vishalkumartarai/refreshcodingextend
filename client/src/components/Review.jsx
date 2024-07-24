import React, { useEffect, useState } from "react";

// Dummy image import statements (replace these with actual imports or paths)
import sudhir from "../images/review/sudhir.jpeg";
import shivam from "../images/review/shivam.jpeg";
import prashant from "../images/review/prashant (1).jpeg";
import mrinal from "../images/review/mrinal.jpeg";
import vishal from "../images/review/vishal.jpeg";

const reviews = [
  {
    image: sudhir,
    name: "SUDHIR ZALAYA",
    redLink: "https://www.linkedin.com/in/sudhir-zalaya-379ab5211/",
    heading: "Outstanding Training Experience",
    para: "Madhulika's training was a game-changer for my proficiency in Java full stack with React. Her expertise and meticulous approach created a solid base, enhancing my contributions to our projects. Capgemini's investment in such training is truly beneficial.",
  },
  {
    image: shivam,
    name: "SHIVAM GANJU",
    redLink: "https://www.linkedin.com/in/shivam-ganju-b0034519b/",
    heading: "Revolutionary Learning Platform",
    para: "Exploring Java full stack with Angular on Refresh Coding has been a revelation. The platform's courses navigate through Java's core while seamlessly integrating Angular, providing a holistic understanding of this tech fusion. With an instructor boasting 12 years of experience, the guidance offered is unparalleled.",
  },
  {
    image: prashant,
    name: "PRASHANT VISWAKARMA",
    redLink: "https://www.instagram.com/refreshcoding/",
    heading: "Exceptional Training Quality",
    para: "Madhulika's training in Java full stack with React was exceptional. She delved into each topic, providing a comprehensive understanding. Her commitment to quality education reflects Capgemini's commitment to nurturing talent and excellence.",
  },
  {
    image: mrinal,
    name: "MRINAL MALHOTRA",
    redLink: "https://www.linkedin.com/in/mrinal-malhotra-130259232/",
    heading: "Empowering DevOps Journey",
    para: "Venturing into DevOps on Refresh Coding has been an empowering journey. The courses seamlessly blend theory with practical implementation, offering a comprehensive understanding of DevOps principles and tools. Lucky to have had her as our trainer at Capgemini!",
  },
  {
    image: vishal,
    name: "VISHAL KUMAR TARAI",
    redLink: "https://www.linkedin.com/in/vishal-kumar-tarai-318773223/",
    heading: " Memorable Learning Experience",
    para: "Madhulika made our React training memorable. Her detailed explanations and commitment to covering every aspect made the learning experience enjoyable.",
  },
];

const ReviewComponent = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 py-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-6 text-black">
        Learner's <span className="text-yellow-300">Reviews</span>
      </h2>
      <div className="container mx-auto flex justify-center">
        <div className="review-box p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-700 ease-in-out bg-gray dark:bg-slate-400 w-96 text-center">
          <img
            src={reviews[currentReview].image}
            alt={reviews[currentReview].name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2 text-black">
            {reviews[currentReview].name}
          </h3>
          <a
            href={reviews[currentReview].redLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mb-2"
          >
            {reviews[currentReview].heading}
          </a>
          <p className="text-gray-700">{reviews[currentReview].para}</p>
        </div>
      </div>
      <style jsx>{`
        .review-box:hover {
          border-radius: 2px 80px 2px 80px;
        }
      `}</style>
    </div>
  );
};

export default ReviewComponent;
