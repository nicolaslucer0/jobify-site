import React from "react";
import { AppInfo } from "./components/AppInfo/AppInfo";
import { ExtraInfo } from "./components/ExtraInfo/ExtraInfo";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";
import { Main } from "./components/Main";
import { TimeInfo } from "./components/TimeInfo/TimeInfo";

export const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Info />
      <AppInfo />
      <TimeInfo />
      <ExtraInfo />
    </>
  );
};
