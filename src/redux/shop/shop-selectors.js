import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const collectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const collectionsSelectorAsArray = createSelector(
  [collectionsSelector],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const collectionSelector = (collectionUrlParam) =>
  createSelector(
    [collectionsSelector],
    (collections) => collections[collectionUrlParam]
  );
