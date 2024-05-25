import React, { useState, useEffect } from "react";
import Cross from "../../assets/cross.svg";
import BookRoomForm from "../forms/BookRoomForm";
import axios from "../../axios";

const BookRoom = ({ onClose, heading, id, addHotel, setShowAddUser, added }) => {
  const[data, setData] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getHotels = async () => {
      await axios
        .get("/hotel/getUnbookedRooms/"+id)
        .then((res) => {
          setData(res.data.data.rooms);
        })
        .catch((err) => {
          //   setError(err.response.data.data.error);
        });
    };
    const getUsers = async () => {
      await axios
        .get("/user/getUsers")
        .then((res) => {
          setUsers(res.data.data.user);
          console.log("data is", res.data.data.user);
        })
        .catch((err) => {
          //   setError(err.response.data.data.error);
        });
    };
    getUsers()
    getHotels();
  }, [added]);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
  
    <div className="m-8">
      <div className="flex flex-wrap justify-end h-2">
        <div className=" m-4 sm:m-8 cursor-pointer bg-orange rounded-full">
          <img src={Cross} alt={"cross-icon"} onClick={onClose} className="w-5 h-5 sm:w-8 sm:h-8"  />
        </div>
      </div>

      <div className="bg-black border border-white p-2 rounded-xl shadow-md px-3 md:px-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-Nunitoo text-orange text-19 sm:text-24 font-medium pt-2 sm:pt-8 pb-2">{heading}</h2>
        </div>
        <div className="flex flex-col sm:flex-row">
        
        <BookRoomForm onClose={onClose} data={data} users={users} id={id} addHotel={addHotel} setShowAddUser={setShowAddUser} />
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookRoom;
