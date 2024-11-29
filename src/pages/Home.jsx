import { useRef } from "react";
import { Button } from "../components/elements/Button/Primary/Button";
import { RightDoubleArrow } from "../components/elements/icons/RighDoubleArrow";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import CustomCursor from "../components/elements/Cursor/CustomCursor";

export const HomePage = () => {
  const videoRef = useRef(null);
  const handleVideoEnd = () => {
    // Mulai kembali video setelah selesai
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <section className="relative flex items-center justify-center h-screen bg-center bg-cover border-2 border-pink-500">
      <video
        ref={videoRef}
        autoPlay
        muted
        onEnded={handleVideoEnd}
        onError={(e) => console.error("Error occurred:", e)}
        src="/video/jam.webm"
        className="absolute inset-0 object-cover w-full h-full -z-10"
      ></video>
      <CustomCursor />
      <div className="z-10 w-11/12 border-2 border-pink-600 lg:w-4/5">
        <div className="w-full border-2 border-white lg:w-1/2 2xl:w-2/5">
          <div className="flex flex-col items-center justify-center text-lg font-semibold lg:items-start lg:text-2xl 2xl:text-3xl font-Poppins text-slate-200">
            <h1 className="text-3xl lg:text-5xl text-amber-500 2xl:text-6xl">
              Welcome to Luxura
            </h1>
            <TypewriterComponent
              options={{
                strings: [
                  "Discover Luxury Redefined.",
                  "Premium Shopping Experience.",
                ],
                autoStart: true,
                loop: true,
                delay: 250, // Menyesuaikan kecepatan pengetikan
                deleteSpeed: 50, // Menyesuaikan kecepatan penghapusan
                cursor: "|", // Mengubah tampilan cursor
                cursorClassName: "Typewriter__cursor", // Menggunakan class untuk lebih mengontrol gaya cursor
              }}
            />
          </div>

          <p className="mx-auto my-6 text-sm text-justify lg:w-full lg:text-start lg:my-4 2xl:my-6 lg:text-base 2xl:text-lg text-slate-200 font-Roboto">
            Discover the epitome of luxury, elegance, and sophistication.
            Explore our collection of premium products designed just for you.
            Shop with ease, enjoy seamless transactions, and elevate your
            lifestyle with our exclusive e-commerce platform.
          </p>
          {/* <p className="mx-auto my-2 text-sm tracking-widest text-justify lg:w-full lg:text-start 2xl:my-5 lg:text-base 2xl:text-xl text-slate-200 font-Roboto">
            Shop with ease, enjoy seamless transactions, and elevate your
            lifestyle with our exclusive e-commerce platform.
          </p> */}
          <Link
            to={"/products"}
            className="flex items-center justify-center w-2/5 py-2 mx-auto mt-8 text-sm text-white rounded lg:text-base bg-amber-500 lg:mx-0 lg:mt-6 2xl:mt-10 lg:w-2/6 2xl:w-1/4 font-Roboto"
          >
            Shop Now <RightDoubleArrow />
          </Link>
        </div>
      </div>
    </section>
  );
};
