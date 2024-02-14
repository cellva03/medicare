import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Location } from "./icons";
const MapModal = ({
  mapModalRef,
  setShowMap,
  sourceLocation,
  destinationLocation,
  isBooking,
  setIsBooking,
}) => {
  let source = [sourceLocation.latitude, sourceLocation.longitude];
  let destination = [
    destinationLocation.latitude,
    destinationLocation.longitude,
  ];
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none transition-all duration-500 ease-out focus:outline-none w-full md:w-[85%] mx-auto`}
    >
      <div
        className={`mt-5 transition-[opacity] duration-500 ease-out mx-auto w-[90%]`}
      >
        <div
          ref={mapModalRef}
          className="relative flex flex-col rounded-xl bg-white shadow-lg dark:bg-gray-800"
        >
          <div className="absolute end-2 top-2 mt-3">
            <button
              type="button"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-overlay="#hs-basic-modal"
              onClick={() => {
                setShowMap(false);
                setIsBooking(false);
              }}
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-4 w-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="p-5 pt-16  w-full flex gap-3 flex-col">
            {isBooking ? (
              <h2 className="text-xl font-semibold text-primary text-center">
                Booking Confirmed !
              </h2>
            ) : null}
            <MapContainer
              center={source}
              zoom={14}
              scrollWheelZoom={false}
              style={{ height: "60vh", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={source}>
                <Popup>You are here</Popup>
              </Marker>
              <Marker position={destination}>
                <Popup>Driver is here</Popup>
              </Marker>
              <Polyline positions={[source, destination]} color="blue" />
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
