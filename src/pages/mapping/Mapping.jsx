import { UseUserContext } from "../../context/UserContext";
import { useState, useEffect, useRef } from "react";
import { driverData } from "../../utils/driverData";
import { calculateDistance } from "../../utils/nominatimApis";
import { UserAvatar } from "../../components/icons";
import MapModal from "../../components/MapModal";
import MappingLoading from "../../components/MappingLoading";

const Mapping = () => {
  const { userLocation } = UseUserContext();
  const [sortedData, setSortedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [selectDestination, setSelectDestination] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const mapModalRef = useRef();

  useEffect(() => {
    if (userLocation.place_name) {
      let filterByCity = driverData.filter((driver) => {
        if (
          userLocation.place_name
            .toLowerCase()
            .includes(driver.district.toLowerCase()) &&
          driver.isAvailable
        ) {
          let distance = calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            driver.latitude,
            driver.longitude
          );
          driver.distance = distance;
          return driver;
        }
      });
      filterByCity.sort((a, b) => a.distance - b.distance);
      setSortedData(filterByCity);
      setLoading(false);
    }
  }, [userLocation]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mapModalRef.current && !mapModalRef.current.contains(event.target)) {
        setShowMap(false);
        setIsBooking(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowMap]);

  const handleBooking = (driver) => {
    setSelectDestination(driver);
    setIsBooking(true);
    setShowMap(true);
  };
  return (
    <>
      {showMap && (
        <MapModal
          mapModalRef={mapModalRef}
          setShowMap={setShowMap}
          sourceLocation={userLocation}
          destinationLocation={selectDestination}
          isBooking={isBooking}
          setIsBooking={setIsBooking}
        />
      )}
      {loading ? (
        <MappingLoading />
      ) : (
        <div className="p-5">
          <h2 className="text-2xl font-semibold dark:text-secondary-dark text-center">
            Nearest Drivers in {userLocation.city}{" "}
            <span className="text-[15px]">({sortedData.length} results)</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            {sortedData.map((driver) => {
              return (
                <div
                  key={driver.id}
                  className="w-full gap-3 flex bg-white rounded-md shadow-lg dark:bg-[#3d3d3f] dark:text-secondary-dark p-5 justify-around dark:hover:bg-[#4a4a4b] hover:scale-[1.01] duration-300"
                >
                  <div className="flex flex-col justify-center items-center h-full">
                    <UserAvatar />
                  </div>
                  <div className="flex flex-col justify-start text-sm items-start gap-3">
                    <p>
                      <span className="font-semibold">Name : </span>
                      {driver.name}
                    </p>
                    <p>
                      <span className="font-semibold">Gender : </span>
                      {driver.gender}
                    </p>
                    <p>
                      <span className="font-semibold">District : </span>
                      {driver.district}
                    </p>
                    <p>
                      <span className="font-semibold">Place : </span>
                      {driver.place_name}
                    </p>
                    <p>
                      <span className="font-semibold">Distance : </span>
                      {driver.distance.toFixed(2)} km
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button
                      type="button"
                      className="bg-primary hover:bg-primary-dark text-white py-2 px-5"
                      onClick={() => handleBooking(driver)}
                    >
                      Book
                    </button>
                    <button
                      type="button"
                      className="bg-primary hover:bg-primary-dark text-white py-2 px-5"
                      onClick={() => {
                        setSelectDestination(driver);
                        setShowMap(true);
                      }}
                    >
                      Map
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Mapping;
