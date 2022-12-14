import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const InfoTitle = styled(Grid)`
  font-family: "Poppins";
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 30px;
`;

export const InfoDescription = styled(Grid)`
  font-family: "Poppins";
  font-weight: light;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 60px;
  position: relative;
  box-sizing: border-box;
  &.full-height {
    height: 100vh;
  }

  &.wrap {
    flex-wrap: wrap;
  }

  &.xs {
    width: 30%;
  }
  &.md {
    width: 50%;
  }
  &.xl {
    width: 70%;
  }
  &.full {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Column = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;

  &.xs {
    width: 30%;
  }
  &.md {
    width: 50%;
  }
  &.xl {
    width: 70%;
  }
  &.full {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    &.xs {
      width: 90%;
    }
    &.md {
      width: 90%;
    }
    &.xl {
      width: 90%;
    }
  }
`;

export const Row = styled.div`
  justify-content: center;
  display: flex;

  &.xs {
    width: 30%;
  }
  &.md {
    width: 50%;
  }
  &.xl {
    width: 70%;
  }

  @media only screen and (max-width: 600px) {
    &.xs {
      width: 90%;
    }
    &.md {
      width: 90%;
    }
    &.xl {
      width: 90%;
    }
  }
`;
