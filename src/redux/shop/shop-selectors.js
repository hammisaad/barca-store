import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const collectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const collectionsSelectorAsArray = createSelector(
  [collectionsSelector],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : null
);

export const collectionSelector = (collectionUrlParam) =>
  createSelector([collectionsSelector], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
