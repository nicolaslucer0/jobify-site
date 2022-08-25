import React from "react";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info.tsx/Info";
import { Main } from "./components/Main";

export const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Info />
    </>
  );
};
