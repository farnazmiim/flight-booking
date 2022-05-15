import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useMutation } from "react-query";
import Search from "./Search";

export default function SearchWrapper() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState({});

  console.log(value);

  const returnData = {
    data: {
      slices: [
        {
          origin: value.origin,
          destination: value.destination,
          departure_date: value.departure,
        },
        {
          origin: value.destination,
          destination: value.origin,
          departure_date: value.return,
        },
      ],
      passengers: [
        {
          type: "adult",
        },
        {
          age: 1,
        },
      ],
      cabin_class: value.class,
    },
  };

  const oneWayData = {
    data: {
      slices: [
        {
          origin: value.origin,
          destination: value.destination,
          departure_date: value.departure,
        },
        {
          origin: value.destination,
          destination: value.origin,
          departure_date: value.return,
        },
      ],
      passengers: [
        {
          type: "adult",
        },
        {
          age: 1,
        },
      ],
      cabin_class: value.class,
    },
  };
  const multiData = {
    data: {
      slices: [
        {
          origin: value.origin,
          destination: value.destination,
          departure_date: value.departure,
        },
        {
          origin: value.destination,
          destination: value.origin,
          departure_date: value.return,
        },
      ],
      passengers: [
        {
          type: value.passengers,
        },
        {
          age: 1,
        },
      ],
      cabin_class: value.class,
    },
  };

  const newData =
    value.journey_type === "return"
      ? returnData
      : value.journey_type === "oneWay"
      ? oneWayData
      : multiData;

  // const handleSubmit = async (e) => {};
  const { mutate: createSearchFlight } = useMutation(newData);

  console.log(data);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <div class="search-page">
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Search
          handleChange={handleChange}
          createSearchFlight={createSearchFlight}
        ></Search>
      )}
    </div>
  );
}
