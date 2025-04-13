import RestaurentCard, { withPromtedLabel } from "./RestaurentCard";
import reslist from "../utils/mockdata";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userCOntext";

const Body = () => {
  const [listofRestaurents, setlistofRestaurents] = useState([]);
  const [filteredrestaurent, setfilteredrestaurent] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestaurentCardPromoted = withPromtedLabel(RestaurentCard);
  
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4659813&lng=73.8246309&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    setlistofRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1 className="text-center text-xl my-8 text-red-500">Look Like You Are Offline</h1>;

  const { setuserName, loggedInUser } = useContext(UserContext);

  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body max-w-7xl mx-auto px-4">
      <div className="filter flex flex-wrap items-center bg-gray-100 p-4 rounded-lg mb-6 shadow-sm">
        <div className="search m-2 p-2">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={searchText}
            placeholder="Search restaurants..."
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-500 text-white m-2 rounded-md hover:bg-green-600 transition-colors"
            onClick={() => {
              const filteredrestaurent = listofRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredrestaurent(filteredrestaurent);
            }}
          >
            search
          </button>
        </div>
        <div className="m-2 p-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => {
              const filteredList = listofRestaurents.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setfilteredrestaurent(filteredList);
            }}
          >
            Top rated restaurent
          </button>
        </div>
        <div className="m-2 p-2 flex items-center">
          <label className="mr-2 font-medium">username :</label>
          <input
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {filteredrestaurent.map((reataurent) => (
          <Link
            key={reataurent.info.id}
            to={"/restaurents/" + reataurent.info.id}
            className="block"
          >
            {reataurent.info.isOpen ? (
              <RestaurentCardPromoted resdata={reataurent} />
            ) : (
              <RestaurentCard resdata={reataurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;