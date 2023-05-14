import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Monthly from "../../pages/monthly/monthly";
import { BASE_URL } from '../../helper';

const Reserve = ({ setOpen, hotelId }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`${BASE_URL}/hotels/room/${hotelId}`);
  
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`${BASE_URL}/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };
  const handleClickM = async () => {
    navigate("/monthly");
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your Plane:</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="selectroom">
            <div className="rItemInfo">
              <div className="rTitle">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label><b>Check It:</b></label>
                  <input type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)} className="checkbox" />
                </div>              
              ))}
            </div>
            </div>

          
{/* ```````````````````````````````````````````` */}

<div className="plan">
        <div className="x">
        <button onClick={handleClickM} className="MonthlyButton">
                <h1>Monthly</h1>
                <h1>Rs.{item.permonthrent}</h1>
            </button>
        </div>
        <div className="x">
            <div className=" selectroom">
            <div className="textS">
                <h1>Per Night</h1>
                <h1>Rs.{item.perdayrent}</h1>
                </div>
                <input
                    type="checkbox"

                    // onClick={handleClick} 

                    className="checkbox"
                  />
            </div>
          </div>
    
        </div>

        </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
      {openModal && <Monthly setOpen={setOpenModal} hotelId={hotelId}/>}
    </div>
  );
};

export default Reserve;
