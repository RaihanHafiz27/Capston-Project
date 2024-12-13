export const ContactUsPage = () => {
  return (
    <div className="flex justify-center min-h-screen pb-10 pt-28 bg-gray-50 dark:bg-gray-900">
      <div className="w-4/5 2xl:w-3/5">
        {/* Start Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-slate-200">
            Get in Touch with <span className="text-rose-600">LUXURA</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-200">
            Have questions or need assistance? Our team is here to help. Contact
            us using the form below or through our other channels.
          </p>
        </div>
        {/* End Header Section */}
        {/* Start Contact Form and Info Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  className="block mb-2 font-medium text-gray-600"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  className="block mb-2 font-medium text-gray-600"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  className="block mb-2 font-medium text-gray-600"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 font-semibold text-white rounded-lg shadow-md bg-rose-500 hover:bg-rose-600"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* End Contact Form and Info Section */}
          {/* Start Contact Info */}
          <div className="p-8 text-white rounded-lg bg-gradient-to-r from-rose-500 to-rose-600">
            <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p>123 Luxury Lane, Premium City, PC 54321</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p>support@luxura.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p>+1 234 567 890</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Social Media</h3>
                <p>
                  <a href="#" className="underline hover:text-rose-200">
                    Instagram
                  </a>
                  ,{" "}
                  <a href="#" className="underline hover:text-rose-200">
                    Facebook
                  </a>
                  ,{" "}
                  <a href="#" className="underline hover:text-rose-200">
                    Twitter
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* End Contact Info */}
        </div>
      </div>
    </div>
  );
};
