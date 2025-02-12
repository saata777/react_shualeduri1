import { Card } from "../molecules/CardDetails";

export const CardDetails = ({ cardData }) => {
  return <Card cardNumber={cardData.number} cardHolder={cardData.holder} />;
};
