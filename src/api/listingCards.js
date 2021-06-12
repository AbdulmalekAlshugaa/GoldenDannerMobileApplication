import client from "./client";

const getCardListings = () => client.get("/exChangeMoney/getIntExChangeMoney");
const listingTripExMoney = () =>
  client.get("tripExChangeMoney/getTriExChangeMoney");
const listingTripTransfer = () => client.get("transfer/get");
const gloableGolden = () => client.get("globalGold/get");
const tripGolden = () => client.get("tripGold/get");
const benGolden = () => client.get("benGold/get");
const benTransfer = () => client.get("benTransfer/get");
const benExChangeMoney = () => client.get("benExChangeMoney/get");

export default {
  getCardListings,
  listingTripExMoney,
  listingTripTransfer,
  gloableGolden,
  tripGolden,
  benGolden,
  benTransfer,
  benExChangeMoney,
};
