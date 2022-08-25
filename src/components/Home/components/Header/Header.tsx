import styled from "@emotion/styled";
import { Blue } from "../../../../utils/Colors";
import { Logo } from "./components/Logo";
import { NavElement } from "./components/NavElement";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  color: ${Blue};
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  background: white;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${Blue};
    font-family: "Poppins";
    text-transform: uppercase;
    font-size: 12px;
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
