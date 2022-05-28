import React from "react";

export default function OffersPrice({ offer, priceHandler }) {
  return (
    <>
      {offer?.base_currency}
      <span className="title__md--base">{offer?.total_amount}</span>
      <div>
        <button
          className="form__btn--active"
          onClick={() => priceHandler(offer?.id)}
        >
          Checkout
        </button>
      </div>
    </>
  );
}
