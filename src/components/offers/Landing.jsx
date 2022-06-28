import React from "react";
import { useForm } from "react-hook-form";
import { createSearchParams, useNavigate } from "react-router-dom";
import Form from "../form/Form";
import SelectField from "../form/SelectField";
import InputField from "../form/InputField";
import RadioField from "../form/RadioField";
import PassengerField from "../form/PassengerField";
import queryString from "querystring";
import {
  ClassMsg,
  DepartureDateMsg,
  DescriptionMsg,
  OriginMsg,
  PassengerMsg,
  ReturnDateMsg,
} from "../../utils/constans";

export default function Landing() {
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // dont clear data in url when submit
 
  
    const params = queryString.stringify(data);
    navigate(`/offers?${params}`);
  };



  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   origin: queryParams.origin,
    //   destination: queryParams.destination,
    //   departure_date: queryParams.departure_date,
    //   return_date: queryParams.return_date,
    //   passengers: queryParams.passengers,
    //   class_type: queryParams.class_type,

    // },
  });

  return (
    <div>
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
    </div>
  );
}
