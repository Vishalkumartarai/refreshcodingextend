import React from "react";
import styled from "styled-components";

const Card = ({ content }) => {
  return (
    <StyledCard className="card-data bg-white dark:bg-slate-200 dark:text-white ml-0">
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  padding: 10px; /* Uniform padding for simplicity */
  border: 1px solid #ccc; /* Light border for definition */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  border-radius: 10px; /* Rounded corners for a softer look */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: start; /* Align text to start (left) */
  justify-content: flex-start; /* Ensure content is at the top */
  align-items: flex-start; /* Align items to the start (left) */
  transition: 0.2s ease;
  position: relative;
  margin: 10px auto;
  /* Center card horizontally with some space around */

  width: 90vw; /* 90% of the viewport width across all screen sizes */

  .content {
    font-size: 1rem; /* Base font size for mobile/tablet */
    line-height: 1.5;
    color: #333;

    overflow-wrap: break-word; /* Ensures words break onto the next line */
    word-wrap: break-word; /* For older browsers */
  }

  @media (min-width: 768px) {
    .content {
      font-size: 1.3rem; /* Larger font size for desktop/laptop */
    }
  }
  @media (max-width: 768px) {
    .content {
      font-size: 0.6rem; /* Larger font size for desktop/laptop */
    }
    .card-data {
      margin: 10px;
    }
  }
`;

export default Card;
