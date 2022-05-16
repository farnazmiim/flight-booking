import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../components/Form";
import SelectField from "../components/SelectField";
import InputField from "../components/InputField";
import RadioField from "../components/RadioField";
import PassengerField from "../components/PassengerField";
// import { useMutation } from "react-query";
import axios from "../api/axios";
import {
  ClassMsg,
  DepartureDateMsg,
  DescriptionMsg,
  OriginMsg,
  PassengerMsg,
  ReturnDateMsg,
} from "../utils/constans";

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (value) => {
    try {
      setLoading(true);

      const response = await axios.createSearchFlight({
        data: {
          slices: [
            {
              origin: value?.origin,
              destination: value?.destination,
              departure_date: value?.departure_date,
            },
            {
              origin: value?.destination,
              destination: value?.origin,
              departure_date: value?.return_date,
            },
          ],
          passengers: [
            {
              type: "adult",
            },
            {
              age: value?.passengers,
            },
          ],
          cabin_class: value?.class,
        },
      });

      console.log(response);

      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error.response.status);
    }
  };

  return (
    <div>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
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
                errors={errors["class"]}
                registration={register("class", {
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
              <button type="submit">Find available flights</button>
            </div>
          </>
        </Form>
      )}
    </div>
  );
}
