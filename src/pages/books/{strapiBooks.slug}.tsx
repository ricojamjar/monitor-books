import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components/macro";
import ReactMarkdown from "react-markdown";

import { productMapper } from "../../api/mappers";
import { sanitizeText } from "../../utils";

import Layout from "../../Components/layout";
import { AddToBasketButton, Photos } from "../../Components/Common";
import SEO from "../../Components/seo";
import { mobileBreakpoint } from "../../constants";
import { useSetBackground } from "../../hooks/useSetBackground";


export const query = graphql`
  query BookQuery($slug: String!) {
    strapiBooks(slug: { eq: $slug }) {
      title
      author
      images {
        fullSize
      }
      gallery_images {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      blurb1
      blurb2
      publishedDate
      slug
      id
      inventory
      thumbnail
      devPriceId
      prodPriceId
      price
    }
  }
`;


const Container = styled.div`
  padding-top: var(--spacing-6);
  padding-bottom: var(--spacing-6);
  border-top: var(--line-thickness) solid var(--main-text-colour);
  border-bottom: var(--line-thickness) solid var(--main-text-colour);
  @media only screen and (max-width: ${mobileBreakpoint}) {
    border-bottom: none;
    border-top: none;
    padding-bottom: 0;
    padding-top: var(--xx-small-component-spacing);
  }
`;
const LeftSection = styled(ReactMarkdown)`
  width: 45%;
  padding-bottom: 0;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-bottom: var(--spacing-3);
    border-bottom: var(--line-thickness) solid var(--main-border-colour);
    width: 100%;
  }
`;

const RightSection = styled(LeftSection)`
  width: 100%;
  padding-bottom: 0;
  p {
    padding-bottom: 0;
  }
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-left: 0;
    padding-bottom: var(--spacing-10);
    padding-top: var(--spacing-10);
  }
`;

const RightSectionWrapper = styled.div`
  padding-left: 9%;
  display: flex;
  flex-direction: column;
  width: 45%;
  @media only screen and (max-width: ${mobileBreakpoint}) {
  width: 100%;
  padding-left: 0;
  }
`

const TextWrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 2.5%;
  div blockquote {
    text-indent: -0.3rem;
  }
  b {
    font-style: italic;
  }
  @media only screen and (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    margin-bottom: var(--spacing-6);
  }
`;


interface ProductPageProps extends PageProps {
  data: { strapiBooks: ApiProduct };
}

const ProductPage: React.FC<ProductPageProps> = ({ data, location }) => {
  useSetBackground('product-background-colour')
  const product: Product = productMapper(data.strapiBooks);
  const {
    title,
    author,
    blurb1,
    blurb2,
    priceId,
    publishedDate,
    galleryImages,
  } = product;

  const sanitizedText = [blurb1, blurb2].map(
    sanitizeText
  );


  return (
    <Layout
      pathname={location.pathname}
    >
      <SEO title={`${title} by ${author}`} description={blurb1} />
      <Container>
        <Photos photos={galleryImages} title={title} />
        <h1>{title.split(" ")
          .map((word) => `${word[0]}${word.slice(1).toLowerCase()}`)
          .join(" ")}</h1>
        <h2>{author}</h2>
        <TextWrapper className="TextWrapper">
          <LeftSection
            className="left-section"
            children={sanitizedText[0]}
          />
          <RightSectionWrapper>
            <RightSection
              className="right-section">
              {sanitizedText[1]}
            </RightSection>
            <AddToBasketButton id={priceId} preorder={new Date(publishedDate).getTime() > new Date().getTime()} />
          </RightSectionWrapper>
        </TextWrapper >
      </Container>
    </Layout >
  );
};
export default ProductPage;
