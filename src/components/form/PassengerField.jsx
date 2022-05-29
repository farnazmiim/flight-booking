import React, { useState } from "react";
import FieldWrapper from "./FieldWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function PassengerField({
  type = "text",
  label,
  className,
  registration,
  errors,
}) {
  let [count, setCount] = useState(0);
  let [selectBox, setSelectBox] = useState(false);

  const incrementCount = () => {
    count = count + 1;
    setCount(count);
  };

  const decrementCount = () => {
    count = count - 1;
    setCount(count);
  };

  const selectHandler = () => {
    setSelectBox(!selectBox);
  };

  return (
    <div className="InputField">
      <FieldWrapper errors={errors}>
        <label className="block mb-1 form__label">{label}</label>
        <div onClick={selectHandler} className="form__input">
          Adults : {count}
        </div>
        {selectBox && (
          <div className="form__input mt-2">
            <span>18+</span>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={decrementCount}
              className="ml-2"
            />
            <input
              type={type}
              className={className}
              value={count}
              placeholder={count}
              {...registration}
            />

            <FontAwesomeIcon icon={faChevronRight} onClick={incrementCount} />
          </div>
        )}
      </FieldWrapper>
    </div>
  );
}
