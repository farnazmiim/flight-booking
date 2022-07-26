import dayjs from "dayjs";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import axios from "../api/axios";
import Passengers from "./Passengers";
import SelectedFlightResult from "./SelectedFlightResult";
import SelectedOffersDetails from "./SelectedOffersDetails";

export default function SelectedFlight({ selectedFlight }) {
  console.log(selectedFlight, "jj=========");
  const [details, setDetails] = useState(false);

  const detailsHandler = () => {
    setDetails(!details);
  };

  if (selectedFlight?.length === 0) {
    return <div>No offers found</div>;
  }

  // const {
  //   handleSubmit,
  // } = useForm();

  const onsadd = async() => {
    const response = await axios.createOrderFlight({
      data: {
        type: "instant",
        services: [
          {
            quantity: 1,
            id: "ase_00009hj8USM7Ncg31cB123"
          }
        ],
        selected_offers: [
          "off_00009htyDGjIfajdNBZRlw"
        ],
        payments: [
          {
            "type": "balance",
            "currency": "GBP",
            "amount": "30.20"
          }
        ],
        passengers: [
          {
            type: "adult",
            title: "mrs",
            phone_number: "+442080160509",
            infant_passenger_id: "pas_00009hj8USM8Ncg32aTGHL",
            identity_documents: [
              {
                unique_identifier: "19KL56147",
                type: "passport",
                issuing_country_code: "GB",
                expires_on: "2025-04-25"
              }
            ],
            id: "pas_00009hj8USM7Ncg31cBCLL",
            given_name: "Amelia",
            gender: "f",
            family_name: "Earhart",
            email: "amelia@duffel.com",
            born_on: "1987-07-24"
          }
        ]
      }


      
    });

    console.log(response)
  };
  
  // const fetchOrder = async () => {
  //   const response = await axios.createOrderFlight({
  //     data: {
  //       type: "instant",
  //       services: [
  //         {
  //           quantity: 1,
  //           id: "ase_00009hj8USM7Ncg31cB123"
  //         }
  //       ],
  //       selected_offers: [
  //         "off_00009htyDGjIfajdNBZRlw"
  //       ],
  //       payments: [
  //         {
  //           "type": "balance",
  //           "currency": "GBP",
  //           "amount": "30.20"
  //         }
  //       ],
  //       passengers: [
  //         {
  //           type: "adult",
  //           title: "mrs",
  //           phone_number: "+442080160509",
  //           infant_passenger_id: "pas_00009hj8USM8Ncg32aTGHL",
  //           identity_documents: [
  //             {
  //               unique_identifier: "19KL56147",
  //               type: "passport",
  //               issuing_country_code: "GB",
  //               expires_on: "2025-04-25"
  //             }
  //           ],
  //           id: "pas_00009hj8USM7Ncg31cBCLL",
  //           given_name: "Amelia",
  //           gender: "f",
  //           family_name: "Earhart",
  //           email: "amelia@duffel.com",
  //           born_on: "1987-07-24"
  //         }
  //       ]
  //     }


      
  //   });
  //   return response.data?.data;
  // };


  // const { data} = useQuery(
  //   fetchOrder,
  //   {
  //     onSuccess: (data) => {
  //       console.log(data);
  //     },
  //     onError: (error) => {
  //       console.log(error);
  //     },
  //   }
  // );

  

  // console.log(data);

  return (
    <>
      <div className="p-4">
        <div onClick={detailsHandler} className="flex flex-wrap" >
          <div className="grid grid-rows-2 grid-flow-col grid-cols-1 w-full bg-white p-3 rounded">
            {selectedFlight?.slices.map((slices) => {
              return slices.segments.map((segment) => {
                const departingAt = dayjs(segment?.departing_at).format(
                  "HH:mm"
                );
                const arrivingAt = dayjs(segment?.arriving_at).format("HH:mm");
                const departingAtFormated = dayjs(segment?.departing_at).format(
                  "ddd, DD MMM YYYY,"
                );
                const arrivingAtFormated = dayjs(segment?.arriving_at).format(
                  "ddd, DD MMM YYYY,"
                );

                const location = {
                  departingAt,
                  arrivingAt,
                  departingAtFormated,
                  arrivingAtFormated,
                };

                return (
                  <div
                    className="grid grid-cols-2 first:border-b-2 border-zinc-100 p-2"
                    key={selectedFlight.id}
                  >
                    <SelectedFlightResult
                      segment={segment}
                      slices={slices}
                      selectedFlight={selectedFlight}
                      location={location}
                    />
                    {details && (
                      <SelectedOffersDetails
                        segment={segment}
                        location={location}
                      />
                    )}
                  </div>
                );
              });
            })}
          </div>
        </div>
      </div>
      <button onClick={onsadd}> adad</button>
      <Passengers></Passengers>
    </>
  );
}
