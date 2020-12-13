import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import { mainImageUrl, productsPageName } from "../../../constants";
import {
  ListItemContainer,
  ListItemPhotoWrap,
  ListItemPhoto,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  PageWrapper,
} from "../../Common";
import { PageTitle } from "../../Common/Titles";

interface Props extends RouteComponentProps {
  books: ById<Product>;
  bookIds: VisibileIds;
}

const ListWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.5rem;
`;

export const ProductsPage: FunctionComponent<Props> = ({ books, bookIds }) => {
  return (
    <PageWrapper>
      <PageTitle>Books</PageTitle>
      <ListWrap>
        {bookIds.map((bookId, index) => {
          const { slug, title, author, thumbnail, imagePath } = books[bookId];
          return (
            <ListItemContainer
              index={index}
              height="50%"
              width="100%"
              horizontalMargin="0rem"
              topMargin="1rem"
              key={index}
              to={`${productsPageName}/${slug}`}
            >
              <ListItemPhotoWrap width="30%">
                <ListItemPhoto
                  src={`${mainImageUrl}${imagePath}/thumbnails/${thumbnail}`}
                />
              </ListItemPhotoWrap>
              <MetaInfoContainer index={index} width="40%">
                <ListItemTitle>{title}</ListItemTitle>
                <ListItemSubtitle>{author}</ListItemSubtitle>
              </MetaInfoContainer>
            </ListItemContainer>
          );
        })}
      </ListWrap>
    </PageWrapper>
  );
};
