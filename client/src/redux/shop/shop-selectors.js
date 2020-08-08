import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsAsArray = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : null
);

export const selectFeaturedItems = createSelector(
  [selectCollectionsAsArray],
  (collections) =>
    collections
      ? collections.map(({ title, items }) => ({ title, item: items[0] }))
      : null
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
export const selectIsCollectionIsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

export const selectCollectionItem = (itemId) =>
  createSelector([selectCollectionsAsArray], (collections) =>
    collections
      ? collections
          .map(({ items }) => items)
          .flat([Infinity])
          ?.find(({ id }) => id === Number(itemId))
      : null
  );
