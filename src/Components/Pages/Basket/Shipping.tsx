import React from "react";
import styled from "styled-components/macro";

import { ShippingCost } from "./ShippingCost";

import { text, shippingCosts } from "../../../constants";

const ShippingLabel = styled.label`
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  color: ${text};
`;

const ShippingSelector = styled.select`
  width: 7.5rem;
`;
interface Props {
  setShipping: (index: any) => void;
  shipping: Shipping;
  shippingOptions: Shipping[];
}

export const Shipping: React.FC<Props> = ({
  setShipping,
  shipping,
  shippingOptions,
}) => {
  return (
    <>
      <ShippingLabel htmlFor="shipping">Postal region:</ShippingLabel>
      <ShippingSelector
        id="shipping-selector"
        onChange={(event) => {
          const index = +event.target.value;
          setShipping(shippingCosts[index]);
        }}
      >
        {shippingOptions.map((shippingRegion, index) => (
          <option value={index} key={index}>
            {shippingRegion.region}
          </option>
        ))}
      </ShippingSelector>
      <ShippingCost
        total={(Math.round(shipping.price * 100) / 100).toFixed(2)}
      />
    </>
  );
};
