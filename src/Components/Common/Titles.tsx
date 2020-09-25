import styled from "styled-components/macro";

export const PageSubtitle = styled.h1`
  font-family: "Caslon", sans-serif;
  font-weight: 300;
`;

export const PageTitle = styled(PageSubtitle)`
  font-weight: 200;
  font-family: "GT America", sans-serif;
`;

export const PageTitleBold = styled(PageTitle)`
  font-weight: 400;
`;

export const TitleWrapper = styled.div`
  border-bottom: 1px solid black;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  @media only screen and (min-width: 600px) {
    padding-bottom: 0.5rem;
    padding-top: 2rem;
  }
`;
