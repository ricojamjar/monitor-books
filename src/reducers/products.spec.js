import reducer, * as products from "./products";

describe("reducers", () => {
  describe("products", () => {
    let state;

    describe("when products are received", () => {
      beforeEach(() => {
        state = reducer(
          {},
          {
            type: "RECEIVE_PRODUCTS",
            books: [
              {
                id: 1,
                title: "Book 1",
                inventory: 2,
              },
              {
                id: 2,
                title: "Book 2",
                inventory: 1,
              },
            ],
          }
        );
      });

      it("contains the products from the action", () => {
        expect(products.getProduct(state, 1)).toEqual({
          id: 1,
          title: "Book 1",
          inventory: 2,
        });
        expect(products.getProduct(state, 2)).toEqual({
          id: 2,
          title: "Book 2",
          inventory: 1,
        });
      });

      it("contains no other products", () => {
        expect(products.getProduct(state, 3)).toEqual(undefined);
      });

      it("lists all of the products as visible", () => {
        expect(products.getVisibleProducts(state)).toEqual([
          {
            id: 1,
            title: "Book 1",
            inventory: 2,
          },
          {
            id: 2,
            title: "Book 2",
            inventory: 1,
          },
        ]);
      });

      describe("when an item is added to the cart", () => {
        beforeEach(() => {
          state = reducer(state, { type: "ADD_TO_CART", productId: 1 });
        });

        it("the inventory is reduced", () => {
          expect(products.getVisibleProducts(state)).toEqual([
            {
              id: 1,
              title: "Book 1",
              inventory: 1,
            },
            {
              id: 2,
              title: "Book 2",
              inventory: 1,
            },
          ]);
        });
      });
      describe("when an item is removed from the cart", () => {
        beforeEach(() => {
          state = reducer(state, {
            type: "REMOVE_FROM_CART",
            productId: 1,
            quantityToReplace: 10,
          });
        });

        it("the inventory is increased by the amount passed in", () => {
          expect(products.getVisibleProducts(state)).toEqual([
            {
              id: 1,
              title: "Book 1",
              inventory: 12,
            },
            {
              id: 2,
              title: "Book 2",
              inventory: 1,
            },
          ]);
        });
      });
    });
  });
});
