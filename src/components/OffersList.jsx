import dayjs from "dayjs";
import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import OffersDetails from "./OffersDetails";
import OffersHeader from "./OffersHeader";
import OffersPrice from "./OffersPrice";
import OffresResult from "./OffresResult";

export default function OffersList({ offersList }) {
  const [details, setDetails] = useState(false);
  const navigate = useNavigate();

  const detailsHandler = () => {
    setDetails(!details);
  };

  if (offersList?.length === 0) {
    return <div>No offers found</div>;
  }

  const priceHandler = (id) => {
    console.log(id, "id");
    // clickon price set id to url
    const params = createSearchParams({ id });
    console.log(params);

    navigate(`/offers/${params}`);
  };

  return (
    <div className="p-4">
      <h2 class="title__lg--base mb-3 basis-full">
        <OffersHeader />
      </h2>
      {offersList?.map((offer) => {
        const { id } = offer;

        return (
          <>
            <div key={id} onClick={detailsHandler} className="flex flex-wrap">
              <div className="grid grid-rows-2 grid-flow-col grid-cols-1 w-full bg-white p-3 rounded">
                {offer?.slices.map((slices) => {
                  return slices.segments.map((segment) => {
                    const departingAt = dayjs(segment?.departing_at).format(
                      "HH:mm"
                    );
                    const arrivingAt = dayjs(segment?.arriving_at).format(
                      "HH:mm"
                    );
                    const departingAtFormated = dayjs(
                      segment?.departing_at
                    ).format("ddd, DD MMM YYYY,");
                    const arrivingAtFormated = dayjs(
                      segment?.arriving_at
                    ).format("ddd, DD MMM YYYY,");

                    const location = {
                      departingAt,
                      arrivingAt,
                      departingAtFormated,
                      arrivingAtFormated,
                    };

                    return (
                      <div className="grid grid-cols-2 first:border-b-2 border-zinc-100 p-2">
                        <OffresResult
                          segment={segment}
                          slices={slices}
                          offer={offer}
                          location={location}
                        />
                        {details && (
                          <OffersDetails
                            segment={segment}
                            location={location}
                          />
                        )}
                      </div>
                    );
                  });
                })}
                <div className="row-span-2 bg-zinc-50 p-4 items-center self-center place-content-between place-self-center">
                  <OffersPrice offer={offer} priceHandler={priceHandler} />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
