import React from "react";

export default function Search() {
  return (
    <div class="grid grid-cols-12 gap-4 m-4">
      <div className="col-span-12">
        <legend className="text-base font-medium text-gray-900">
          Journey type
        </legend>
      </div>
      <div class="col-span-4">
        <input
          id="one-way"
          name="journey-type"
          type="radio"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="one-way" className="radio">
          One way
        </label>
      </div>
      <div class="col-span-4">
        <input
          id="return"
          name="journey-type"
          type="radio"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="return" className="radio">
          Return
        </label>
      </div>
      <div class="col-span-4">
        <input
          id="multi-city"
          name="journey-type"
          type="radio"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="multi-city" className="radio">
          Multi-city
        </label>
      </div>
      <div class="col-span-6">
        <label for="email" class="block mb-1 text-gray-600 font-semibold">
          Origin
        </label>
        <input
          type="text"
          class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
        />
      </div>
      <div class="col-span-6">
        <label for="email" class="block mb-1 text-gray-600 font-semibold">
          Destination
        </label>
        <input
          type="text"
          class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
        />
      </div>
      <div class="col-span-6">
        <label for="email" class="block mb-1 text-gray-600 font-semibold">
          Departure date
        </label>
        <input
          type="date"
          class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
        />
      </div>
      <div class="col-span-6">
        <label for="email" class="block mb-1 text-gray-600 font-semibold">
          Return date
        </label>
        <input
          type="date"
          class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
        />
      </div>
      <div class="col-span-6">
        <label for="email" class="block mb-1 text-gray-600 font-semibold">
          Passengers
        </label>
        <select
          class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
          aria-label="Default select example"
        >
          <option selected value="1">
            One
          </option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-span-6">
        <label for="email" class="block mb-1 text-gray-600 font-semibold">
          Class
        </label>
        <select
          class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
          aria-label="Default select example"
        >
          <option selected value="1">
            Economy
          </option>
          <option value="2">Premium Economy</option>
          <option value="3">Business</option>
          <option value="4">First</option>
          <option value="5">Any</option>
        </select>
      </div>
      <div class="col-span-12 py-2 px-4 border text-center border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4">
        <button type="submit" className="">
          Find available flights
        </button>
      </div>
    </div>
  );
}
