import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Blue } from "../../../../utils/Colors";

const InfoContainer = styled(Grid)`
  color: white;
  background: ${Blue};
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

const InfoTitle = styled(Grid)`
  font-family: "Poppins";
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 30px;
`;
export const Info = () => {
  return (
    <InfoContainer>
      <Grid
        container
        xs={12}
        md={9}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-evenly"
      >
        <Grid item xs={12} md={4} p={2}>
          <InfoTitle>Todo en un lugar</InfoTitle>
          <div>
            Desde la firma del contrato hasta el pago, todo se hace de forma
            digital a través de la app.
          </div>
        </Grid>
        <Grid xs={12} md={4} p={2}>
          <InfoTitle>No mas busquedas laborales</InfoTitle>
          <div>Automaticamente hacemos match con los trabajos para tí.</div>
        </Grid>
        <Grid item xs={12} md={4} p={2}>
          <InfoTitle>No mas frustraciones</InfoTitle>
          <div>Basta de entrevistas que no se acomodan a tus necesidades.</div>
        </Grid>
      </Grid>
    </InfoContainer>
  );
};
