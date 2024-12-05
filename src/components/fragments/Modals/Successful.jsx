export const Successful = () => {
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative max-w-xs mx-auto">
          <div className="relative flex flex-col items-center justify-center px-10 py-4 transition-transform duration-500 ease-in-out delay-300 bg-white shadow-xl rounded-xl">
            <img src="/images/payments/success.gif" alt="" />
            <p>Add to cart Successful</p>
          </div>
        </div>
      </div>
    </>
  );
};
