import React, { useState } from "react";
import { CardCategory } from "./Card/CardCategory";

export const TableTopUp = () => {
  const [activeColumn, setActiveColumn] = useState("Credit");

  const handleColumnClick = (column) => {
    setActiveColumn(column);
  };

  const getPlaceholder = (column, field) => {
    const placeholders = {
      Credit: { number: "Input Number Phone" },
      "Data Package": { number: "Input Number Phone" },
      Donation: { number: "Input Virtual Account" },
      "Top Up Games": { number: "Input ID" },
    };
    return placeholders[column][field];
  };

  return (
    // test
    <div className="w-full h-auto p-2 mt-4 bg-white border border-gray-200 md:mx-auto md:rounded-xl lg:w-4/5 2xl:w-3/5 shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
      <div className="flex justify-around py-2 border-b border-gray-400 font-Poppins">
        <h2 className="text-sm font-semibold lg:text-lg 2xl:text-xl">
          Preferred Category
        </h2>
        <h2 className="hidden text-sm font-semibold lg:block lg:text-lg 2xl:text-xl">
          Top up
        </h2>
      </div>
      <div className="flex w-full">
        <div className="flex w-full lg:w-1/2">
          <CardCategory />
        </div>
        <div className="hidden w-full mx-auto lg:flex-col lg:flex lg:w-1/2 ">
          <p className="my-2 text-sm tracking-wide text-center text-gray-600 font-Roboto">
            Please top up here which is safe, easy, and reliable.
          </p>
          <div className="hidden w-full border border-gray-400 lg:flex rounded-xl">
            <table className="w-full m-2">
              <thead>
                <tr className="border-b">
                  {["Credit", "Data Package", "Donation", "Top Up Games"].map(
                    (column) => (
                      <th
                        key={column}
                        onClick={() => handleColumnClick(column)}
                        className={`cursor-pointer font-Poppins text-xs 2xl:text-sm ${
                          activeColumn === column ? "active text-rose-600" : ""
                        }`}
                      >
                        {column}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4}>
                    <div className="flex items-center p-2 space-x-2">
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="number"
                          className="my-1 text-xs font-semibold text-gray-500 2xl:text-sm"
                        >
                          {activeColumn === "Credit" && "Number"}
                          {activeColumn === "Data Package" && "Number"}
                          {activeColumn === "Donation" && "Virtual Account"}
                          {activeColumn === "Top Up Games" && "Games ID"}
                        </label>
                        <input
                          type="text"
                          id="number"
                          name="notelp"
                          value=""
                          readOnly
                          placeholder={getPlaceholder(activeColumn, "number")}
                          className="w-full p-2 text-xs border border-gray-400 rounded outline-none 2xl:text-sm"
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="amount"
                          className="my-1 text-sm font-semibold text-gray-500"
                        >
                          Select Nominal
                        </label>
                        <select
                          id="amount"
                          name="purchase"
                          className="w-full p-2 text-sm border border-gray-400 rounded outline-none"
                        >
                          <option value="" disabled hidden>
                            Select Nominal
                          </option>
                          <option value="Rp.10000">Rp. 10,000</option>
                          <option value="Rp.20000">Rp. 20,000</option>
                          <option value="Rp.30000">Rp. 30,000</option>
                          <option value="Rp.40000">Rp. 40,000</option>
                          <option value="Rp.50000">Rp. 50,000</option>
                          <option value="Rp.60000">Rp. 60,000</option>
                          <option value="Rp.70000">Rp. 70,000</option>
                          <option value="Rp.80000">Rp. 80,000</option>
                          <option value="Rp.90000">Rp. 90,000</option>
                          <option value="Rp.100000">Rp. 100,000</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <button className="w-1/2 p-2 text-white rounded bg-rose-600 hover:bg-rose-800">
                        Buy Now
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    // test
    // <div className="hidden w-full mx-auto lg:flex-col lg:flex lg:w-1/2 ">
    //   <p className="my-2 text-sm tracking-wide text-center text-gray-600 font-Roboto">
    //     Please top up here which is safe, easy, and reliable.
    //   </p>
    //   <div className="hidden w-full border border-gray-400 lg:flex rounded-xl">
    //     <table className="w-full m-2">
    //       <thead>
    //         <tr className="border-b">
    //           {["Credit", "Data Package", "Donation", "Top Up Games"].map(
    //             (column) => (
    //               <th
    //                 key={column}
    //                 onClick={() => handleColumnClick(column)}
    //                 className={`cursor-pointer font-Poppins text-xs 2xl:text-sm ${
    //                   activeColumn === column ? "active text-rose-600" : ""
    //                 }`}
    //               >
    //                 {column}
    //               </th>
    //             )
    //           )}
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td colSpan={4}>
    //             <div className="flex items-center p-2 space-x-2">
    //               <div className="flex flex-col w-full">
    //                 <label
    //                   htmlFor="number"
    //                   className="my-1 text-xs font-semibold text-gray-500 2xl:text-sm"
    //                 >
    //                   {activeColumn === "Credit" && "Number"}
    //                   {activeColumn === "Data Package" && "Number"}
    //                   {activeColumn === "Donation" && "Virtual Account"}
    //                   {activeColumn === "Top Up Games" && "Games ID"}
    //                 </label>
    //                 <input
    //                   type="text"
    //                   id="number"
    //                   name="notelp"
    //                   value=""
    //                   readOnly
    //                   placeholder={getPlaceholder(activeColumn, "number")}
    //                   className="w-full p-2 text-xs border border-gray-400 rounded outline-none 2xl:text-sm"
    //                 />
    //               </div>
    //               <div className="flex flex-col w-full">
    //                 <label
    //                   htmlFor="amount"
    //                   className="my-1 text-sm font-semibold text-gray-500"
    //                 >
    //                   Select Nominal
    //                 </label>
    //                 <select
    //                   id="amount"
    //                   name="purchase"
    //                   className="w-full p-2 text-sm border border-gray-400 rounded outline-none"
    //                 >
    //                   <option value="" disabled hidden>
    //                     Select Nominal
    //                   </option>
    //                   <option value="Rp.10000">Rp. 10,000</option>
    //                   <option value="Rp.20000">Rp. 20,000</option>
    //                   <option value="Rp.30000">Rp. 30,000</option>
    //                   <option value="Rp.40000">Rp. 40,000</option>
    //                   <option value="Rp.50000">Rp. 50,000</option>
    //                   <option value="Rp.60000">Rp. 60,000</option>
    //                   <option value="Rp.70000">Rp. 70,000</option>
    //                   <option value="Rp.80000">Rp. 80,000</option>
    //                   <option value="Rp.90000">Rp. 90,000</option>
    //                   <option value="Rp.100000">Rp. 100,000</option>
    //                 </select>
    //               </div>
    //             </div>
    //             <div className="flex items-center justify-center w-full">
    //               <button className="w-1/2 p-2 text-white rounded bg-rose-600 hover:bg-rose-800">
    //                 Buy Now
    //               </button>
    //             </div>
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};
