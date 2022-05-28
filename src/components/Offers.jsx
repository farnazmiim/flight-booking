import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../components/Form";
import SelectField from "../components/SelectField";
import InputField from "../components/InputField";
import RadioField from "../components/RadioField";
import PassengerField from "../components/PassengerField";

import axios from "../api/axios";
import {
  ClassMsg,
  DepartureDateMsg,
  DescriptionMsg,
  OriginMsg,
  PassengerMsg,
  ReturnDateMsg,
} from "../utils/constans";

import ErrorPage from "../components/ErrorPage";

import { createSearchParams, useNavigate } from "react-router-dom";

import { useQuery } from "react-query";
import OffersList from "../components/OffersList";

export default function Offers() {
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const class_type = urlParams.get("class_type");
  const departure_date = urlParams.get("departure_date");
  const origin = urlParams.get("origin");
  const destination = urlParams.get("destination");
  const passengers = urlParams.get("passengers");
  const return_date = urlParams.get("return_date");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      class_type,
      departure_date,
      origin,
      destination,
      passengers,
      return_date,
    },
  });

  const onSubmit = (data) => {
    const params = createSearchParams(data);
    navigate(`/offers?${params}`);
  };

  const fetchFlight = async () => {
    const response = await axios.createSearchFlight({
      data: {
        slices: [
          {
            origin: origin,
            destination: destination,
            departure_date: departure_date,
          },
          {
            origin: destination,
            destination: origin,
            departure_date: return_date,
          },
        ],
        passengers: [
          {
            type: "adult",
          },
          {
            age: passengers,
          },
        ],
        cabin_class: class_type,
      },
    });
    return response.data?.data;
  };

  const { data, isLoading, error } = useQuery(
    [
      "searchFlight",
      {
        origin,
        destination,
        departure_date,
        return_date,
        passengers,
        class_type,
      },
    ],
    fetchFlight,
    {
      enabled: !!(
        class_type &&
        departure_date &&
        origin &&
        destination &&
        passengers &&
        return_date
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

      {data?.offers ? (
        <OffersList offersList={data?.offers}></OffersList>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)} className="page__layout--12">
          <>
            <div className="col-span-12">
              <legend className="page__title--base">Journey type</legend>
            </div>

            <div class="col-span-4">
              <RadioField
                id="one-way"
                type="radio"
                label="One way"
                name="journey_type"
                errors={errors["journey_type"]}
                registration={register("journey_type", {
                  required: "radio is required.",
                })}
                className="form__radio--focus"
                value="one-way"
              />
            </div>

            <div class="col-span-4">
              <RadioField
                id="return"
                type="radio"
                label="Return"
                name="journey_type"
                errors={errors["journey_type"]}
                registration={register("journey_type", {
                  required: "radio is required.",
                })}
                className="form__radio--focus"
                value="return"
              />
            </div>

            <div class="col-span-12">
              <InputField
                placeholder="From"
                type="text"
                label="Origin"
                errors={errors["origin"]}
                registration={register("origin", {
                  required: OriginMsg,
                })}
                className="form__input"
              />
            </div>

            <div class="col-span-12">
              <InputField
                placeholder="To"
                type="text"
                label="Destination"
                errors={errors["destination"]}
                registration={register("destination", {
                  required: DescriptionMsg,
                })}
                className="form__input"
              />
            </div>

            <div class="col-span-6">
              <InputField
                type="date"
                label="Departure date"
                errors={errors["departure_date"]}
                registration={register("departure_date", {
                  required: DepartureDateMsg,
                })}
                className="form__input"
              />
            </div>

            <div class="col-span-6">
              <InputField
                type="date"
                label="Return date"
                errors={errors["return_date"]}
                registration={register("return_date", {
                  required: ReturnDateMsg,
                })}
                className="form__input"
              />
            </div>

            <div class="col-span-6">
              <PassengerField
                type="input"
                label="Passengers"
                errors={errors["passengers"]}
                registration={register("passengers", {
                  required: PassengerMsg,
                })}
                className="form__input--passengers"
              />
            </div>

            <div class="col-span-6">
              <SelectField
                type="select"
                label="Class"
                errors={errors["class_type"]}
                registration={register("class_type", {
                  required: ClassMsg,
                })}
                className="form__input"
                options={["Premium Economy", "Business", "First", "Any"].map(
                  (type) => ({
                    label: type,
                    value: type,
                  })
                )}
              />
            </div>

            <div class="col-span-12 form__btn--active">
              <button type="submit" isLoading>
                Find available flights
              </button>
            </div>
          </>
        </Form>
      )}
    </div>
  );
}
