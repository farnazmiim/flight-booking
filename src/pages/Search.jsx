import PassengersBtn from "../components/PassengersBtn";

export default function Search({ handleSubmit, handleChange }) {
  return (
    <>
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
        />
      </div>
      <div class="col-span-12">
        <label for="text" class="block mb-1 form__label">
          Class
        </label>
        <select class="form__input" name="class" onChange={handleChange}>
          <option selected value="economy">
            Economy
          </option>
          <option value="2">Premium Economy</option>
          <option value="3">Business</option>
          <option value="4">First</option>
          <option value="5">Any</option>
        </select>
      </div>
      <div class="col-span-5">
        <label for="text" class="block mb-1 form__label">
          Passengers
        </label>
        <span>Adult : </span>
        <PassengersBtn value="adult" onChange={handleChange}></PassengersBtn>
      </div>
      <div class="col-span-5">
        <label class="block mb-1 form__label">&nbsp;</label>
        <span>Child : </span>
        <PassengersBtn value="child"></PassengersBtn>
      </div>

      <div class="col-span-12 form__btn--active">
        <button type="submit" className="" onClick={handleSubmit}>
          Find available flights
        </button>
      </div>
    </>
  );
}
