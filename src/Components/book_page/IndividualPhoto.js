import React from "react";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

const Photo = styled.img`
  min-width: 45%;
  display: flex;
  margin: 2.5%;
  max-height: 20vw;
  min-height: 10vw;
  @media screen and (max-width: 500px) {
    max-height: 100vw;
    margin: 0.5%;
    width: 100%;
    height: auto;
  }
`;

export default function IndividualPhoto(props) {
  const { openLightbox, photo, index } = props;

  return (
    <VisibilitySensor>
      <Photo
        onClick={() => openLightbox(index)}
        src={photo}
        alt="photo of book"
      />
    </VisibilitySensor>
  );
}