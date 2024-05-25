import React, { useState } from "react";

const RoomType = ({rooms, setRooms}) => {
 
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newRooms = [...rooms];
    newRooms[index][name] = value;
    setRooms(newRooms);
  };

  const addRoom = () => {
    setRooms([...rooms, { roomType: "", noOfRooms: "" }]);
  };

  const removeRoom = (index) => {
    const newRooms = [...rooms];
    newRooms.splice(index, 1);
    setRooms(newRooms);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(rooms);
    // You can do whatever you want with the rooms array here (e.g., send it to the server)
  };

  return (
    <div style={{ maxHeight: "200px", overflowY: "scroll" }}>
    
    <form onSubmit={handleSubmit}>
      {rooms.map((room, index) => (
        <div key={index} className="flex gap-x-1 mt-2">
          <input
            type="text"
            className={`border border-blue3 bg-white focus:outline-none rounded-md p-1 sm:p-2 px-2 w-full font-Nunitoo placeholder-blue2 text-14 placeholder-text-14`}
            placeholder="Room Type"
            name="roomType"
            value={room.roomType}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            type="text"
            placeholder="Number of Rooms"
            className={`border border-blue3 bg-white focus:outline-none rounded-md p-1 sm:p-2 px-2 w-full font-Nunitoo placeholder-blue2 text-14 placeholder-text-14`}
            name="noOfRooms"
            value={room.noOfRooms}
            onChange={(e) => handleChange(index, e)}
          />
          <div
            onClick={() => removeRoom(index)}
            className="flex items-center justify-center  h-6 w-6 rounded-full text-white cursor-pointer"
          >
            -
          </div>
        </div>
      ))}
      <div
        onClick={addRoom}
        className="flex items-center justify-center bg-orange h-6 w-6 rounded-full text-white cursor-pointer mt-2"
      >
        +
      </div>
    </form>
    </div>
  );
};

export default RoomType;
