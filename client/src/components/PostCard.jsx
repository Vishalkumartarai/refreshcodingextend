import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PostCard({ post }) {
  return (
    <Card>
      <CardInner>
        <CardFront>
          <Link to={`/post/${post.slug}`}>
            <CardImage src={post.image} alt="post cover" />
          </Link>
        </CardFront>
        <CardBack>
          <CardData>
            <p className="btitle">{post.title}</p>
            <span className="italic text-sm text-gray-600">
              {post.category}
            </span>
            <Link to={`/post/${post.slug}`} className="btn">
              Read article
            </Link>
          </CardData>
        </CardBack>
      </CardInner>
    </Card>
  );
}

const Card = styled.div`
  width: 300px; /* Fixed width for consistency */
  height: 350px; /* Fixed height for consistency */
  perspective: 1000px; /* Add perspective for 3D effect */
  border-radius: 15px; /* Rounded corners */
  overflow: hidden; /* Hide overflow to maintain rounded corners */
  box-shadow: 0 4px 8px #4c51bf; /* Subtle shadow for depth */
  transition: transform 0.3s ease-in-out; /* Smooth transition */
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-in-out; /* Smooth transition */
  transform-style: preserve-3d;
  position: relative;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center; /* Center image vertically */
  justify-content: center; /* Center image horizontally */
`;

const CardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(60deg, #4f46e5, #50c878);
  color: #fff; /* White text for better contrast */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  text-align: center;
`;

const CardData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .btitle {
    font-weight: 600; /* Slightly bolder for emphasis */
    font-size: 1.25rem; /* Adjusted font size */
    color: #fff; /* White text for better readability */
    margin: 0; /* Removed extra margin */
  }

  .btn {
    background-color: transparent;
    border: 2px solid #fff; /* White border */
    border-radius: 25px; /* Rounded button */
    padding: 0.75rem 1.5rem; /* Increased padding for better click area */
    font-size: 1.2rem; /* Slightly smaller font size */
    color: #fff; /* White text */
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-weight: 500; /* Medium font weight for button text */

    &:hover {
      background-color: #fff; /* White background */
      color: #4f46e5; /* Indigo text */
    }
  }
`;

const CardImage = styled.img`
  width: 150px; /* Fixed size for consistency */
  height: 150px; /* Fixed size for consistency */
  object-fit: cover;
  border-radius: 50%; /* Circular shape */
  border: 5px solid #fff; /* White border for contrast */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Slightly deeper shadow on hover */
  }
`;
