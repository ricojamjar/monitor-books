import shop from "../api/shop";
import * as types from "../constants/actionTypes";

const receiveProducts = (products) => {
  return {
    type: types.RECEIVE_PRODUCTS,
    books: products,
  };
};

const receiveVideos = (videos) => {
  return {
    type: types.RECEIVE_VIDEOS,
    videos: videos,
  };
};

export const getAllProducts = () => (dispatch) => {
  shop.getProducts((products) => {
    return dispatch(receiveProducts(products));
  });
};

export const getAllVideos = () => (dispatch) => {
  shop.getVideos((videos) => {
    dispatch(receiveVideos(videos));
  });
};

const addToCartUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const addToCart = (productId) => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

const isInBasket = (state, productId) =>
  state.cart.quantityById[productId] > 0 &&
  state.cart.addedIds.indexOf(productId) !== -1;

export const decrementInCart = (productId) => (dispatch, getState) => {
  const state = getState();
  if (isInBasket(state, productId)) {
    dispatch({ type: types.DECREMENT_IN_CART, productId });
  }
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const state = getState();
  if (isInBasket(state, productId)) {
    dispatch({ type: types.REMOVE_FROM_CART, productId });
  }
};

export const checkout = (products) => (dispatch, getState) => {
  const { cart } = getState();

  dispatch({
    type: types.CHECKOUT_REQUEST,
  });
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart,
    });
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  });
};
