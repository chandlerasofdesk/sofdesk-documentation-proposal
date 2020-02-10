import { createSelector } from "reselect";
import coreInterface from "./interface.core";

const coreSelector = state => state.core;

export const sideBarActive = createSelector(
  [coreSelector],
  (core: coreInterface) => core.sideBarActive
);
