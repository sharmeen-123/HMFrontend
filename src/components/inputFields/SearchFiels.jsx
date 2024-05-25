import React, { useEffect } from "react";
import axios from "../../axios";

const SearchFiels = ({
  value,
  setValue,
  Bg,
  Placeholder,
  PlaceholderColor,
  iconn,
  search,
  setData,
}) => {
  useEffect(() => {
    const Search = async () => {
      await axios
        .get(`/${search}/search/${value}`)
        .then((res) => {
          if (search == "user") {
            setData(res.data.data.user);
            console.log("search item re", res.data.data.user);
          } else if (search == "hotel") {
            setData(res.data.data.hotel);
            console.log("search item re", res.data.data.hotel);
          }
        })
        .catch((err) => {
          // setLoader(false)
          //   setError(err.response.data.data.error);
        });
    };
    Search();
  }, [value]);
  return (
    <div
      className={`flex items-center border border-blue3 bg-${Bg} rounded-md p-1 md:p-2 w-auto  lg:w-80 mr-4`}
    >
      <img src={iconn} className="mr-2 w-4 h-4 md:w-5 md:h-5" />
      <input
        className={` bg-${Bg} w-full focus:outline-none  placeholder-${PlaceholderColor} placeholder-text-10 sm:placeholder-text-14`}
        placeholder={Placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchFiels;
