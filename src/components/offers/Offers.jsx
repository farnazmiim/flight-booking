import axios from "../../api/axios";

import ErrorPage from "../notification/ErrorPage";

import queryString from "querystring";

import { useQuery } from "react-query";
import OffersList from "../offers/OffersList";

export default function Offers() {
  const queryParams = queryString.parse(window.location.search);

  const fetchFlight = async () => {
    const response = await axios.createSearchFlight({
      data: {
        slices: [
          {
            origin: queryParams.origin,
            destination: queryParams.destination,
            departure_date: queryParams.departure_date,
          },
          {
            origin: queryParams.destination,
            destination: queryParams.origin,
            departure_date: queryParams.return_date,
          },
        ],
        passengers: [
          {
            type: "adult",
          },
          {
            age: queryParams.passengers,
          },
        ],
        cabin_class: queryParams.class_type,
      },
    });
    return response.data?.data;
  };

  const { data, isLoading, error } = useQuery(
    [
      "searchFlight",
      {
        origin: queryParams.origin,
        destination: queryParams.destination,
        departure_date: queryParams.departure_date,
        return_date: queryParams.return_date,
        passengers: queryParams.passengers,
        class_type: queryParams.class_type,
      },
    ],
    fetchFlight,
    {
      enabled: !!(
        queryParams.origin &&
        queryParams.destination &&
        queryParams.departure_date &&
        queryParams.return_date &&
        queryParams.passengers &&
        queryParams.class_type
      ),
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

  console.log(data);

  return (
    <div>
      {error && <ErrorPage />}

      {isLoading && <div>Loading ...</div>}

      {data && <OffersList offersList={data?.offers}></OffersList>}
    </div>
  );
}
