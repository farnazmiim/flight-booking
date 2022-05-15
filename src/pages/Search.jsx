import { useForm } from "react-hook-form";
import PassengersBtn from "../components/PassengersBtn";

export default function Search({ createSearchFlight, handleChange }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      createSearchFlight();
      const response = await axios.createSearchFlight(newData);

      setData(response.JSON.stringify(data));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  return (
    <form className="page__layout--12 " onSubmit={handleSubmit(onSubmit)}>
      <div className="col-span-12">
        <legend className="page__title--base">Journey type</legend>
      </div>
      <div class="col-span-4">
        <input
          id="one-way"
          name="journey_type"
          type="radio"
          className="form__radio--focus"
          onChange={handleChange}
          {...register("journey_type")}
          value="oneWay"
        />
        <label htmlFor="one-way" className="form__radio">
          One way
        </label>
      </div>
      <div class="col-span-4">
        <input
          id="return"
          name="journey_type"
          type="radio"
          className="form__radio--focus"
          onChange={handleChange}
          {...register("journey_type")}
          value="return"
        />
        <label htmlFor="return" className="form__radio">
          Return
        </label>
      </div>
      <div class="col-span-4">
        <input
          id="multi-city"
          name="journey_type"
          type="radio"
          className="form__radio--focus"
          onChange={handleChange}
          {...register("journey_type")}
          value="multi-city"
        />
        <label htmlFor="multi-city" className="form__radio">
          Multi-city
        </label>
      </div>
      <div class="col-span-12">
        <label for="text" class="block mb-1 form__label">
          Origin
        </label>
        <input
          name="origin"
          type="text"
          class="form__input"
          placeholder="Origin"
          {...register("origin")}
          onChange={handleChange}
        />
      </div>
      <div class="col-span-12">
        <label for="text" class="block mb-1 form__label">
          Destination
        </label>
        <input
          name="destination"
          type="text"
          class="form__input"
          placeholder="Destination"
          onChange={handleChange}
          {...register("destination")}
        />
      </div>
      <div class="col-span-6">
        <label for="date" class="block mb-1 form__label">
          Departure date
        </label>
        <input
          name="departure"
          type="date"
          class="form__input"
          onChange={handleChange}
          {...register("departure")}
        />
      </div>
      <div class="col-span-6">
        <label for="date" class="block mb-1 form__label">
          Return date
        </label>
        <input
          name="return"
          type="date"
          class="form__input"
          onChange={handleChange}
          {...register("return")}
        />
      </div>
      <div class="col-span-6">
        <label for="text" class="block mb-1 form__label">
          Passengers
        </label>
        <PassengersBtn value="adult" {...register("adult")}></PassengersBtn>
      </div>
      <div class="col-span-6">
        <label for="text" class="block mb-1 form__label">
          Class
        </label>
        <select
          class="form__input"
          name="class"
          onChange={handleChange}
          {...register("class")}
        >
          <option selected value="economy">
            Economy
          </option>
          <option value="2">Premium Economy</option>
          <option value="3">Business</option>
          <option value="4">First</option>
          <option value="5">Any</option>
        </select>
      </div>

      <div class="col-span-12 form__btn--active">
        <button type="submit">Find available flights</button>
      </div>
    </form>
  );
}
