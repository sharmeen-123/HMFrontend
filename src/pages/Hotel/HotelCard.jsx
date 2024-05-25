import React, { useState } from "react";
import Avatar from "../../assets/Avatar.svg";

const HotelCard = ({ data, setBook, setHotelId }) => {
  const [url] = useState(import.meta.env.VITE_API_URL);
  return (
    <div className="bg-black border border-white p-3  text-orange rounded-lg w-auto sm:w-80 ">
      <div className="flex items-center justify-around">
        <div className=" h-20 w-20 ">
          {data.image == null ? (
            <img
              src={Avatar}
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
          ) : (
            <img
              src={`${url}${data.image}`}
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
          )}
        </div>

        <div className="flex flex-col items-center m-3">
          <p className="font-Nunitoo text-16 lg:text-24 font-bold text-white">
            {data.name}
          </p>
          <p className="font-Nunitoo text-12 lg:text-16 font-regular text-orange">
            {data.location}
          </p>
        </div>
      </div>
      <div className="p-3">
        <p className="font-Nunitoo text-12 lg:text-16 font-bold text-orange">
          Booked Rooms : <span className="font-regular">{data.booked}</span>
        </p>
        <p className="font-Nunitoo text-12 lg:text-16 font-bold text-orange">
          Available Rooms :{" "}
          <span className="font-regular">{data.available}</span>
        </p>
        <p className="font-Nunitoo text-12 lg:text-16 font-bold text-orange">
          Total Rooms :{" "}
        </p>

        <div className="px-4 py-1">
          {data.rooms?.map((val, ind) => {
            return (
              <p
                className="font-Nunitoo text-12 lg:text-16 font-bold text-orange"
                key={ind}
              >
                {val.type} : <span className="font-regular">{val.number}</span>{" "}
              </p>
            );
          })}
        </div>
        <button
          className="text-orange bg-black border border-white w-full "
          onClick={() => {
            setBook(true);
            setHotelId(data.id);
          }}
        >
          Book Room
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
