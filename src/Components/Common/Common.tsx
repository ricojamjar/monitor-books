import styled from "styled-components/macro";

export const PageWrapper = styled.div<{ backgroundColour: string }>`
  padding: var(--small-component-spacing);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ backgroundColour }) =>
    `${backgroundColour || `var(--faded-blue)`}`};
  @media only screen and (max-width: 400px) {
    padding: var(--small-component-spacing), var(--small-text-spacing);
  }
`;
export const InfoSection = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const LoadingAnimation = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  height: 80px;
  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--main-border-colour);
    border-color: var(--main-border-colour) transparent
      var(--main-border-colour) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
