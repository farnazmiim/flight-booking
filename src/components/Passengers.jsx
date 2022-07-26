import React from "react";
import InputField from "./InputField";

export default function Passengers() {
  return (
    <>
      <h1>
        <h3>passengers flights</h3>
      </h1>
          <div className="p-4">
          <div class="col-span-12">
              <InputField
                placeholder="From"
                type="text"
                label="Origin"
                className="form__input"
              />
            </div>
      </div>
    </>
  );
}
