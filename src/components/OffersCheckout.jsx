import React from "react";
import { useParams } from "react-router-dom";
import OffersHeader from "./OffersHeader";

export default function OffersCheckout() {
  let params = useParams();
  console.log(params, "params");
  return (
    <h1>
      <div className="p-4">
        <h2 class="title__lg--base mb-3 basis-full">
          <OffersHeader />
        </h2>
        <span>{params.id}</span>
      </div>
    </h1>
  );
}
