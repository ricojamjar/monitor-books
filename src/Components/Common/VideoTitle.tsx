import React from "react";
import styled from "styled-components/macro";

import {mobileBreakpoint} from "../../constants"

const TitleWrap = styled.h1`
  padding-bottom: 0;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-bottom: var(--x-small-text-spacing);
  }
`;

const SubtitleWrap = styled.h2`
  padding-bottom: 0;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-bottom: var(--medium-text-spacing);
  }
`;

interface Props {
  title: string;
  subtitle: string[];
}

export function VideoTitle(props: Props) {
  const { title, subtitle } = props;
  return (
    <>
      <TitleWrap>{title} </TitleWrap>

      <SubtitleWrap>
        {subtitle.map((creator, i) => {
          return <>{`${creator}${i < subtitle.length - 1 ? ", " : ""}`}</>;
        })}
      </SubtitleWrap>
    </>
  );
}
