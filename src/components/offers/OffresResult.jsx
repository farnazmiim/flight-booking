import React from "react";

export default function OffresResult({ segment, slices, offer, location }) {
  return (
    <>
      <div class="grid-cols-6">
        <div class="title__md--base">
          {location?.departingAt} - {location?.arrivingAt}
        </div>
        <span class="title__sm--base">
          {slices?.fare_brand_name} {offer?.owner?.name}
        </span>
      </div>
      <div class="grid-cols-6">
        <span class="title__md--base">{segment.duration}</span>
        <div className="title__sm--base">
          {segment.origin.iata_code} - {segment.destination?.iata_code}
        </div>
      </div>
    </>
  );
}
