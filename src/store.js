// import React, { createContext, useState, useContext } from "react";

// const initialState = {
//   count: 0,
//   text: "hello",
// };

// const useMyState = () => useState(initialState);

// const MyContext = createContext(null);

// export const useSharedState = () => {
//   const value = useContext(MyContext);
//   if (value === null) throw new Error("Please add SharedStateProvider");
//   return value;
// };

// export const SharedStateProvider = ({ children }) => (
//   <MyContext.Provider value={useMyState()}>{children}</MyContext.Provider>
// );

/**
 * use react-tracked
 *
 *
 */

import { useState } from "react";
import { createContainer } from "react-tracked";

const initialState = {
  count: 0,
  text: "hello",
};

const useMyState = () => useState(initialState);

export const {
  Provider: SharedStateProvider,
  useTracked: useSharedState,
} = createContainer(useMyState);
