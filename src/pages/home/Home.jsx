import EmergencyImage from "../../assets/orange-doctor-rushing-to-the-patient.png";
import NonEmergencyCase from "../../assets/rubber-girl-with-a-dog.png";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowModal]);

  const handleSave = async (e) => {
    e.preventDefault();
    setShowModal(false);
    navigate("/mapping");
  };

  return (
    <>
      {showModal && (
        <Modal
          modalRef={modalRef}
          setShowModal={setShowModal}
          handleSave={handleSave}
        />
      )}
      <div className="w-full h-full flex justify-center items-center p-4 flex-col gap-6 text-secondary dark:text-secondary-dark">
        <div className="w-full flex flex-col gap-3 items-center">
          <h1 className="text-3xl font-bold">Welcome to MediCare</h1>
          <p className="text-md text-left leading-7">
            Our app is designed to efficiently manage patient cases by
            categorizing them into 'Emergency' and 'Non-emergency' for immediate
            attention and appropriate case handling. With our app, you can track
            the status of your patients easily and effectively. Our team of
            experts is always ready to assist you with any queries you may have.
          </p>
        </div>
        <div className="w-full flex flex-col">
          <h4 className="text-xl font-bold text-center">
            What do need help with?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
            {/* Emergency */}
            <div className="relative group w-full h-full overflow-hidden rounded row-span-2">
              <img
                alt="Image"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={EmergencyImage}
                style={{ aspectRatio: "3/2", objectFit: "contain" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 flex items-center justify-center dark:bg-zinc-500 dark:bg-opacity-40">
                <p className="text-[#FCD34D] text-3xl font-semibold dark:text-white p text-center">
                  Emergency Case
                </p>
              </div>
            </div>
            {/* Non-Emergency */}
            <div
              className="relative group w-full h-full overflow-hidden rounded row-span-2"
              onClick={() => setShowModal(true)}
            >
              <img
                alt="Image"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={NonEmergencyCase}
                style={{ aspectRatio: "3/2", objectFit: "contain" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 flex items-center justify-center dark:bg-zinc-500 dark:bg-opacity-40">
                <p className="text-[#FCD34D] text-3xl font-semibold dark:text-white p text-center">
                  Non-Emergency Case
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
