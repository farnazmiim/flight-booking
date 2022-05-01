import React from "react";

export default function Search() {
  return (
    <div class="page__layout--12 search-page">
      <div className="col-span-12">
        <legend className="page__title--base">Journey type</legend>
      </div>
      <div class="col-span-4">
        <input
          id="one-way"
          name="journey-type"
          type="radio"
          className="form__radio--focus"
        />
        <label htmlFor="one-way" className="form__radio">
          One way
        </label>
      </div>
      <div class="col-span-4">
        <input
          id="return"
          name="journey-type"
          type="radio"
          className="form__radio--focus"
        />
        <label htmlFor="return" className="form__radio">
          Return
        </label>
      </div>
      <div class="col-span-4">
        <input
          id="multi-city"
          name="journey-type"
          type="radio"
          className="form__radio--focus"
        />
        <label htmlFor="multi-city" className="form__radio">
          Multi-city
        </label>
      </div>
      <div class="col-span-6">
        <label for="text" class="block mb-1 form__label">
          Origin
        </label>
        <input type="text" class="form__input" />
      </div>
      <div class="col-span-6">
        <label for="text" class="block mb-1 form__label">
          Destination
        </label>
        <input type="text" class="form__input" />
      </div>
      <div class="col-span-6">
        <label for="date" class="block mb-1 form__label">
          Departure date
        </label>
        <input type="date" class="form__input" />
      </div>
      <div class="col-span-6">
        <label for="date" class="block mb-1 form__label">
          Return date
        </label>
        <input type="date" class="form__input" />
      </div>
      <div class="col-span-6">
        <label for="text" class="block mb-1 form__label">
          Passengers
        </label>
        <select class="form__input">
          <option selected value="1">
            One
          </option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-span-6">
        <label for="text" class="block mb-1 form__label">
          Class
        </label>
        <select class="form__input">
          <option selected value="1">
            Economy
          </option>
          <option value="2">Premium Economy</option>
          <option value="3">Business</option>
          <option value="4">First</option>
          <option value="5">Any</option>
        </select>
      </div>
      <div class="col-span-12 form__btn--active">
        <button type="submit" className="">
          Find available flights
        </button>
      </div>
    </div>
  );
}
