export const AboutPage = () => {
  return (
    <div className="flex justify-center py-24 bg-gray-50">
      <div className="w-4/5">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800">
            Welcome to <span className="text-rose-600">LUXURA</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your ultimate destination for luxurious and premium products.
            Discover the passion behind our brand and what makes us unique in
            the world of e-commerce.
          </p>
        </div>

        {/* Mission, Vision, and Values Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-8 text-center bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To provide our customers with premium, hand-picked products that
              enhance their lifestyle and bring them joy.
            </p>
          </div>
          <div className="p-8 text-center bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To redefine online shopping with a touch of luxury and become a
              trusted name in the industry.
            </p>
          </div>
          <div className="p-8 text-center bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Our Values
            </h2>
            <p className="text-gray-600">
              Integrity, quality, innovation, and customer satisfaction are at
              the core of everything we do.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            Behind LUXURA is a dedicated team working tirelessly to deliver
            excellence.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "John Doe", role: "Founder & CEO" },
              { name: "Jane Smith", role: "Chief Designer" },
              { name: "Emily Johnson", role: "Marketing Head" },
              { name: "Michael Brown", role: "Operations Lead" },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-r from-rose-400 to-rose-600"></div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-12 mt-16 text-white rounded-lg bg-gradient-to-r from-rose-400 to-rose-600">
          <div className="text-center">
            <h3 className="text-3xl font-bold">Why Choose LUXURA?</h3>
            <p className="mt-4 text-lg">
              Experience the difference of shopping with a brand that
              prioritizes quality, elegance, and exceptional service.
            </p>
            <button className="px-6 py-2 mt-8 font-semibold bg-white rounded-lg shadow-md text-rose-600 hover:bg-gray-100">
              Explore Our Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
