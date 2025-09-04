import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "./../assets/assets";
import StarRating from "../Components/Home/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState(null);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const roomData = roomsDummyData.find((room) => room._id === id);
    roomData && setRoom(roomData);
    roomData && setMainImage(roomData.images[0]);
  }, [id]);

  return (
    <div className="py-28 md:py-35 md:px-16 lg:px-24 xl:px-32">
      {/* Room Details  */}

      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 ">
        <h1 className="text-3xl md:text-4xl font-playfair">
          {room?.hotel?.name}{" "}
          <span className="font inner text-sm ">({room?.roomType})</span>
        </h1>
        <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
          20%OFF
        </p>
      </div>
      {/* Room Ratting  */}
      <div className="flex items-center gap-1 mt-2">
        <StarRating></StarRating>
        <p className="ml-2">200+ reviews</p>
      </div>
      {/* Room Address  */}
      <div className="flex items-center gap-1 text-gray-500 mt-2">
        <img src={assets?.locationIcon} alt="" />
        <span>{room?.hotel?.address}</span>
      </div>

      {/* Room images  */}
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt=""
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room?.images?.length > 1 &&
            room?.images?.map((image, index) => (
              <img
                onClick={() => setMainImage(image)}
                src={image}
                alt=""
                key={index}
                className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`}
              />
            ))}
        </div>
      </div>
{/* Room Highlight  */}

<div className="flex flex-col md:flex-row md:justify-between mt-10" >
<div>
    <h1 className="text-3xl md:text-4xl font-playfair">Experience Luxury Like Never Before</h1>
    <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
        {room?.amenities?.map((item,index)=>(
            <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                <img src={facilityIcons[item]} alt=""  className="w-5 h-5"/>
                <p className="text-xs">{item}</p>
            </div>
        ))}
    </div>
</div>


</div>







    </div>
  );
};

export default RoomDetails;
