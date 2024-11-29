export const CardProducts2 = (props) => {
  const { data, title } = props;

  console.log(data);

  return (
    <section className="border-2 border-black ">
      <h1 className="mb-2 text-2xl font-semibold font-Poppins">{title}</h1>
      <ul className="grid grid-cols-5 gap-4">
        {data.map((item, id) => (
          <li
            key={id}
            className="p-4 transition-all duration-300 bg-white rounded-lg font-Poppins hover:-translate-x-2 hover:-translate-y-2"
            style={{
              boxShadow: "1px 1px 4px rgba(0,0,0,0.2)",
            }}
          >
            <div className="w-full h-32 border border-black">
              <img src={item.image} alt="" className="w-full h-full" />
            </div>
            {/* <div className="flex flex-col items-center justify-center w-1/2 border border-black h-2/5">
              <img src={item.image} alt="img" className="w-full h-full" />
            </div> */}

            <div>
              <p className="text-sm font-semibold">
                {item.title.substring(0, 18)}...
              </p>
              <p className="text-sm lowercase">
                {item.description.substring(0, 47)}...
              </p>
              <div className="flex">
                <p className="font-semibold text-teal-600">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center justify-around w-full mt-2">
              <button className="w-2/5 py-1 text-sm border rounded-md border-amber-500">
                add cart
              </button>
              <button className="w-2/5 py-1 text-sm border rounded-md bg-amber-500 border-amber-500">
                buy now
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
