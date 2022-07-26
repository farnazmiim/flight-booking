import React from "react";

export default function SelectedOffersDetails({ segment, location }) {
  return (
    <div className="col-span-2 bg-zinc-50 p-4 my-2 rounded border-l-4 border-indigo-500">
      <span className="title__md--base">
        <img
          src={segment?.operating_carrier?.logo_symbol_url}
          className="w-5"
        ></img>
      </span>
      <div className="mb-2">
        <span className="title__md--base">
          {location?.departingAtFormated} {location?.departingAt}{" "}
        </span>
        <span className="title__sm--base">
          Departure from {segment.origin?.name} ({segment.origin?.iata_code})
        </span>
      </div>
      <div className="text-sm mb-2">flight duration : {segment.duration}</div>
      <div className="mb-2">
        <span className="title__md--base">
          {location?.arrivingAtFormated} {location?.arrivingAt}{" "}
        </span>
        <span className="title__sm--base">
          Arrive at {segment.origin?.name} ({segment.origin?.iata_code})
        </span>
      </div>

      <div className="col-span-12">
        <span className="text-sm">first {segment.marketing_carrier.name}</span>
        <span className="text-sm"> {segment.aircraft?.name}</span>
        <span className="text-sm">{segment.marketing_carrier.iata_code}</span>
      </div>
      </div>
  );
}
