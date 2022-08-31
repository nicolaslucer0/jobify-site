import styled from "@emotion/styled";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Offer } from "../../models/Offer";
import { fetchOffers } from "../../services/OfferService";
import { Column, Container, Image } from "../../utils/Commons";
import { SearchBar } from "./components/SearchBar";

const OfferCard = styled(Card)`
  width: 30%;
  margin: 10px 0;
`;

export const Offers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => setOffers(fetchOffers()), []);

  const filterBySearch = (name: string) =>
    name.toLowerCase().includes(search.toLocaleLowerCase());
  return (
    <Column style={{ paddingTop: "100px" }}>
      <SearchBar search={search} setSearch={setSearch} />
      <Container className="wrap">
        {offers
          .filter((offer) => filterBySearch(offer.company.name))
          .map((offer) => (
            <OfferCard key={offer.company.id}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
                    <Image src={offer.company.logo} />
                  </Avatar>
                }
                title={offer.company.name}
                subheader={offer.location}
              />
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={offer.company.header}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {offer.location}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Ver mas</Button>
              </CardActions>
            </OfferCard>
          ))}
      </Container>
    </Column>
  );
};
