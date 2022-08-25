import styled from "@emotion/styled";
import { Violet } from "../../../../utils/Colors";
import { Logo } from "../Logo";
import { NavElement } from "./components/NavElement";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: ${Violet};
  position: fixed;
  width: 100%;
  box-sizing: border-box;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${Violet};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Header = () => (
  <NavContainer>
    <Logo />
    <LinksContainer>
      <NavElement link="login" text="Para compañias" />
      <NavElement link="login" text="Para buscar trabajo" />
      <NavElement link="login" text="Sobre nosotros" />
      <NavElement link="login" text="Iniciar sesión" />
    </LinksContainer>
  </NavContainer>
);