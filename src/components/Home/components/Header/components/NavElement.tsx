import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Blue } from "../../../../../utils/Colors";

const ElementContainer = styled.div`
  a {
    margin-left: 25px;
    text-decoration: none;
    font-weight: bold;

    &.white {
      color: white;
    }

    &.blue {
      color: ${Blue};
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

type NavElementProps = {
  text: string;
  color: string;
  link: string;
};
export const NavElement = ({ text, link, color }: NavElementProps) => (
  <ElementContainer>
    <Link className={color} to={link}>
      {text}
    </Link>
  </ElementContainer>
);
