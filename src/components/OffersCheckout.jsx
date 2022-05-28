import React from "react";
import { useParams } from "react-router-dom";

export default function OffersCheckout() {
  let params = useParams();
  console.log(params, "params");
  return <h1>Invoice {params.id}</h1>;
}
