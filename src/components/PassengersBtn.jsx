import React, { useState } from "react";

export default function PassengersBtn() {
  let [count, setCount] = useState(0);

  const incrementCount = () => {
    count = count + 1;
    setCount(count);
  };

  const decrementCount = () => {
    count = count - 1;
    setCount(count);
  };

  return (
    <div>
      <button onClick={decrementCount} className="form__btn--active">
        -
      </button>
      <button className="form__btn--deactivate w-2" value="ads">
        {count}
      </button>
      <button onClick={incrementCount} className="form__btn--active">
        +
      </button>
    </div>
  );
}
