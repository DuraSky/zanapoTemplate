import React from "react";
import { Header } from "./header/Header";

export const CategoryLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
