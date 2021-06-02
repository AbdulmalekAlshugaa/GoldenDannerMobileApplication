import client from "./client";

const getCardListings = () => client.get("/card/cards");

export default {
  getCardListings,
};
