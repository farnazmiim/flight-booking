import dayjs from "dayjs";
import React, { useState } from "react";

export default function OffersList({ offersList }) {
  const [details, setDetails] = useState(false);

  const detailsHandler = () => {
    setDetails(!details);
  };
  console.log(offersList);
  if (offersList?.length === 0) {
    return <div>No offers found</div>;
  }

  return (
    <div className="p-4">
      {offersList?.map((offer) => {
        const { id, owner, total_amount,base_currency } = offer;
        console.log(offer, "offer");

        return (
          <>
            <div key={id} onClick={detailsHandler} className="flex flex-wrap">
              <h2 class="title__lg--base mb-3 basis-full">
                Flight Information
              </h2>
              <div className="grid grid-rows-2 grid-flow-col grid-cols-1 w-full justify-center items-center">
                {offer?.slices.map((slices) => {
                  const { fare_brand_name } = slices;
                  return slices.segments.map((segment) => {
                    const {
                      departing_at,
                      arriving_at,
                      duration,
                      origin,
                      destination,
                      marketing_carrier,
                      aircraft,
                    } = segment;

                    const departingAt = dayjs(departing_at).format("HH:mm");
                    const arrivingAt = dayjs(arriving_at).format("HH:mm");
                    const departingAtFormated =
                      dayjs(departing_at).format("ddd, DD MMM YYYY,");
                    const arrivingAtFormated =
                      dayjs(arriving_at).format("ddd, DD MMM YYYY,");

                    return (
                      <div className="grid grid-cols-2">
                          <div class="grid-cols-6">
                            <div class="title__md--base">
                              {departingAt} - {arrivingAt}
                            </div>
                            <span class="title__sm--base">
                              {fare_brand_name} {owner?.name}
                            </span>
                          </div>
                          <div class="grid-cols-6">
                            <span class="title__md--base">{duration}</span>
                            <div className="title__sm--base">
                              {origin.iata_code} - {destination?.iata_code}
                            </div>
                          </div>
                        {details && (
                          <div className="col-span-2 bg-slate-200 p-4 my-2 rounded">
                            <div className="mb-2">
                              <span className="title__md--base">
                                {departingAtFormated} {departingAt}{" "}
                              </span>
                              Departure from {origin?.name} ({origin?.iata_code}
                              )
                            </div>
                            <div className="mb-2">
                              <span className="title__md--base">
                                {arrivingAtFormated} {arrivingAt}{" "}
                              </span>
                              Arrive at {origin?.name} ({origin?.iata_code})
                            </div>
                            <div className="text-sm mb-2">
                              flight duration : {duration}
                            </div>
                            <div className="col-span-12">
                              <span className="text-sm">
                                first {marketing_carrier.name}
                              </span>
                              <span className="text-sm"> {aircraft?.name}</span>
                              <span className="text-sm">
                                {marketing_carrier.iata_code}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  });
                })}
                


                <div className="row-span-2">{base_currency}<span className="title__md--base">{total_amount}</span></div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
