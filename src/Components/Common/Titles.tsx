import styled from "styled-components/macro";

export const CalsonTitle = styled.h1`
  font-family: "Caslon", sans-serif;
  font-weight: 300;
`;

export const AmericaTitle = styled(CalsonTitle)`
  font-weight: 200;
  font-family: "GT America", sans-serif;
`;

export const AmericaTitleBold = styled(AmericaTitle)`
  font-weight: 400;
`;

export const TitleWrapper = styled.div`
  padding-bottom: 2.5%;
  padding-top: 2.5%;
  border-bottom: 1px solid black;
`;
