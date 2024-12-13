import { useEffect, useState } from "react";
import { dataUser } from "../services/login";

export const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [timezone, setTimeZone] = useState("");
  const [address, setAddress] = useState("");
  const checkoutHistory = localStorage.getItem("data_checkout");
  const history = JSON.parse(checkoutHistory);

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
    };
    fethData();
  }, []);

  const spending =
    history?.products?.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ) || 0;

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
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
          <div className="flex flex-col items-center justify-center my-4">
            <img src="/images/man-1.png" alt="" className="w-28 h-28" />
            <div className="text-center ">
              <p className="text-gray-800 capitalize">{user.username}</p>
              <p className="text-gray-500">{user.email}</p>
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
        <div className="mt-8 font-Poppins">
          <div className="flex items-center justify-between my-4 text-gray-800">
            <h2 className="text-lg font-semibold ">Checkout History</h2>
            <p className="font-semibold">
              Spending :{" "}
              <span className="text-teal-700">$ {spending.toFixed(2)}</span>
            </p>
          </div>
          {history?.products.length > 0 ? (
            <div className=" max-h-[70vh] overflow-auto">
              <table className="w-full h-full border border-collapse border-gray-300 table-fixed">
                <thead className="text-sm">
                  <tr className="bg-gray-100">
                    <th className="p-2 border border-gray-300">Product</th>
                    <th className="p-2 border border-gray-300">Quantity</th>
                    <th className="p-2 border border-gray-300">Total Price</th>
                    <th className="p-2 border border-gray-300">Payment</th>
                    <th className="p-2 border border-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history.products.map((item) => (
                    <tr
                      key={item.id}
                      className="transition-colors hover:bg-gray-50"
                    >
                      <td className="p-2 border border-gray-300">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-12 h-12"
                          />
                          <p className="ml-2 text-sm line-clamp-2">
                            {item.title}
                          </p>
                        </div>
                      </td>
                      <td className="p-2 text-center border border-gray-300">
                        {item.quantity}
                      </td>
                      <td className="p-2 text-center text-teal-700 border border-gray-300">
                        $ {item.price * item.quantity}
                      </td>
                      <td className="p-2 text-center border border-gray-300">
                        Debit
                      </td>
                      <td className="p-2 text-center border border-gray-300">
                        {item.id % 2 === 0 ? "In Transit" : "Success"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <img
                src="/images/empty-cart.png"
                alt="Empty Cart"
                className="w-3/12 mb-4"
              />
              <p className="w-1/2 text-center text-gray-600">
                Oops, your checkout history is empty! Looks like you haven’t
                made any purchases yet. Let’s go shopping and grab something
                awesome!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
