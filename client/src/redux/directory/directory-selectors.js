import { createSelector } from "reselect";

const directorySelector = (state) => state.directory;

export const directorySectionsSelector = createSelector(
  [directorySelector],
  (directory) => directory.sections
);
