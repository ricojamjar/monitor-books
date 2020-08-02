import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";
import { connect } from "react-redux";

import { checkout } from "../../../actions";
import { getTotal, getCartProducts } from "../../../reducers";
import { AmericaTitle } from "../../Common/Titles";
import Basket from "./Basket";

const BasketTitle = styled(AmericaTitle)`
  width: 100%;
  text-align: center;
  display: block;
`;

interface IProps extends RouteComponentProps {
  products: [];
  total: string;
  checkout: (products: []) => void;
  productIds: string[];
  productsById: { [index: string]: Book };
}

const BasketContainer = ({
  productIds,
  productsById,
  products,
  total,
  checkout,
}: IProps) => {
  return (
    <div>
      <BasketTitle>Basket</BasketTitle>
      <Basket
        total={total}
        onCheckoutClicked={() => checkout(products)}
        productsById={productsById}
        productIds={productIds}
      />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  productIds: state.cart.addedIds,
  productsById: state.products.byId,
});

export default connect(mapStateToProps, { checkout })(BasketContainer);
