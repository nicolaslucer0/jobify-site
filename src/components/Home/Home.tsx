import AppInfo from "./components/AppInfo";
import ExtraInfo from "./components/ExtraInfo";
import Info from "./components/Info";
import { Main } from "./components/Main";
import TimeInfo from "./components/TimeInfo";

export const Home = () => {
  return (
    <>
      <Main />
      <Info />
      <AppInfo />
      <TimeInfo />
      <ExtraInfo />
    </>
  );
};
