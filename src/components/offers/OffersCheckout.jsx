import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import ErrorPage from "../ErrorPage";
import OffersHeader from "./OffersHeader";
import OffersList from "./OffersList";

export default function OffersCheckout() {
  let params = useParams();

  console.log(params);

  const getDetails = async () => {
    const response = await axios.getDetailsFlight(params.id.replace(/\=/g, ""));
    return response.data?.data;
  };

  const { data, isLoading, error } = useQuery(
    [
      "getDetailsFlight",
      {
        id: params.id,
      },
    ],
    getDetails,
    {
      enabled: !!params.id,
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  console.log(data, "datadatadata");

  return (
    <h1>
      {error && <ErrorPage />}

      {isLoading && <div>Loading ...</div>}
      <div className="p-4">
        <h2 class="title__lg--base mb-3 basis-full">
          <OffersHeader />
        </h2>
        <h3>base_amount :{data?.base_amount}</h3>
      </div>
    </h1>
  );
}
