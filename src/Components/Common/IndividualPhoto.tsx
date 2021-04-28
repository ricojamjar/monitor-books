import React from "react";
import styled from "styled-components/macro";

import {mobileBreakpoint} from "../../constants"

const Photo = styled.img<{ width?: string; height?: string }>`
  max-height: 100%;
  max-width: 100%;
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  @media only screen and (max-width: ${mobileBreakpoint}) {
    max-height: 100vw;
    margin: 3% 0%;
    width: 100%;
    height: 100%;
  }
`;

interface IProps {
  openLightbox: (i: number) => void;
  src: string;
  index: number;
  altText: string;
  height?: string;
  width?: string;
}

export const IndividualPhoto = (props: IProps) => {
  const { openLightbox, src, index, altText, height, width } = props;
  return (
    <Photo
      onClick={() => openLightbox(index)}
      src={src}
      alt={altText}
      height={height}
      width={width}
    />
  );
};
