const Modal = ({ modalRef, setShowModal, handleSave }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none transition-all duration-500 ease-out focus:outline-none w-full md:w-[70%] mx-auto max-w-[700px]`}
    >
      <div
        className={`mt-5 transition-[opacity] duration-500 ease-out mx-auto w-[85%]`}
      >
        <div
          ref={modalRef}
          className="relative flex flex-col rounded-xl bg-white shadow-lg dark:bg-gray-800"
        >
          <div className="absolute end-2 top-2 mt-3">
            <button
              type="button"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-overlay="#hs-basic-modal"
              onClick={() => setShowModal(false)}
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
          <div className="overflow-y-auto p-4 text-center sm:p-10">
            <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
              Fill the Form Please!
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="peer block w-full outline-none rounded-lg border-transparent bg-gray-100 px-4 py-3 ps-11 text-sm focus:border-none focus:ring-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              />
              <input
                type="text"
                name="mobile"
                placeholder="Enter your mobile number"
                className="peer block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3 ps-11 text-sm outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              />
              <div className="mt-3 flex justify-center gap-x-4">
                <button
                  className="inline-flex items-center gap-x-2 rounded-sm bg-primary px-5 py-2 text-sm text-white shadow-sm hover:bg-[#b33232] dark:focus:outline-none"
                  type="submit"
                  onClick={(e) => {
                    handleSave(e);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
