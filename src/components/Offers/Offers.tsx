import { useEffect, useState } from "react";
import { Offer } from "../../models/Offer";
import { fetchOffers } from "../../services/OfferService";

export const Offers = () => {
  useEffect(() => setOffers(fetchOffers()), []);

  const [offers, setOffers] = useState<Offer[]>([]);
  return (
    <>
      {offers.map((offer) => (
        <div key={offer.company.id}>{offer.company.id}</div>
      ))}
    </>
  );
};
