import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function PassengersBtn() {
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
    <div>
      <div onClick={selectHandler} className="form__input">
        Adult : {count}
      </div>
      {selectBox && (
        <div className="form__input mt-2">
          <span>Aults 18+</span>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={decrementCount}
            className="ml-2"
          />
          <button className="form__btn--transparent" value="ads">
            {count}
          </button>
          <FontAwesomeIcon icon={faChevronRight} onClick={incrementCount} />
        </div>
      )}
    </div>
  );
}
