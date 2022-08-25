import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ElementContainer = styled.div`
  margin-left: 10px;
  text-decoration: none;
`;

type NavElementProps = {
  text: string;
  link: string;
};
export const NavElement = ({ text, link }: NavElementProps) => (
  <ElementContainer>
    <Link to={link}>{text}</Link>
  </ElementContainer>
);
