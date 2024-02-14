import { useEffect, useState, useContext, createContext } from "react";

export const User = createContext({});
export const UseUserContext = () => useContext(User);

const UserContext = ({ children }) => {
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
    place_name: "",
  });
  //   console.log(userLocation);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
      const response = await fetch(url);
      const data = await response.json();
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        place_name: data?.display_name,
        city: data?.address?.city,
      });
    });
  }, []);

  return <User.Provider value={{ userLocation }}>{children}</User.Provider>;
};

export default UserContext;
