import { useEffect, useState } from "react";
import { dataUser } from "../services/login";

export const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [timezone, setTimeZone] = useState("");
  const [address, setAddress] = useState("");
  const checkoutHistory = localStorage.getItem("data_checkout");
  const h = JSON.parse(checkoutHistory);

  useEffect(() => {
    const fethData = async () => {
      const userData = await dataUser();
      setUser(userData);
      const lat = userData.address.geolocation.lat;
      const long = userData.address.geolocation.long;
      setTimeZone(`lat : ${lat} long : ${long}`);
      setAddress(
        `${userData.address.number} ${userData.address.street} ${userData.address.city}`
      );
      // console.log(lat);
      // console.log(long);
    };
    fethData();
  }, []);

  console.log(h);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* <p>Loading...</p> */}
        <img src="/images/Spinner.gif" alt="" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen pb-10 pt-28 bg-gray-50 dark:bg-gray-900">
      <div className="w-4/5 h-auto px-10 py-6 bg-white border rounded-lg 2xl:w-3/5">
        <div className="flex flex-col w-full h-full font-Poppins">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                My Profile
              </h2>
              <p className="text-sm text-gray-500">
                Manage your profile information to control, protect and secure
                your account
              </p>
            </div>
            <div>
              <button className="px-8 py-2 rounded-sm text-slate-200 bg-rose-600">
                edit
              </button>
            </div>
          </div>
          <div className="my-8 border border-black ">
            <div className="flex ">
              <img src="/images/man-1.png" alt="" className="w-12 h-12" />
              <div className="ml-2 ">
                <p className="text-gray-800 capitalize">{user.username}</p>
                <p className="text-gray-400">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-x-20 gap-y-5">
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-sm ">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder={user.name.firstname + user.name.lastname}
                  className="w-full py-2 pl-4 text-sm bg-gray-200 rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-sm ">
                  Nick Name
                </label>
                <input
                  type="text"
                  placeholder={user.name.firstname}
                  className="w-full py-2 pl-4 text-sm bg-gray-200 rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-sm ">
                  Number Phone
                </label>
                <input
                  type="text"
                  placeholder={user.phone}
                  className="w-full py-2 pl-4 text-sm bg-gray-200 rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-sm ">
                  Address
                </label>
                <input
                  type="text"
                  placeholder={address}
                  className="w-full py-2 pl-4 text-sm bg-gray-200 rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-sm ">
                  Time Zone
                </label>
                <input
                  type="text"
                  placeholder={timezone}
                  className="w-full py-2 pl-4 text-sm bg-gray-200 rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-sm ">
                  Zip Code
                </label>
                <input
                  type="text"
                  placeholder={user.address.zipcode}
                  className="w-full py-2 pl-4 text-sm bg-gray-200 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Checkout History</p>
          <p>{h.card_number}</p>
          <p>{h.card_number}</p>
          <p>{h.card_number}</p>
          <p>{h.card_number}</p>
          <p>{h.card_number}</p>
          <p>{h.card_number}</p>
          <p>{h.card_number}</p>
          <p>{h.card_number}</p>
          <p>{h.card_number}</p>
          <p>{h.card_number}</p>
          <p>{h.card_number}</p>
        </div>
      </div>
    </div>
  );
};
