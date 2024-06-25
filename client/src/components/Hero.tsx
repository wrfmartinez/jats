import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero relative h-[700px] flex flex-col items-center justify-center pt-10 lg:flex-row lg:justify-between lg:items-start lg:pl-[3.5rem] lg:pr-[3.5rem]">
      <h1 className="text-center text-5xl font-medium lg:text-start lg:text-[7rem]">
        Stay <span className="block">organized</span>and{" "}
        <span className="block">motivated</span>Get hired.
      </h1>
      <img
        className="hidden arrow absolute -top-16 origin-bottom-right -skew-x-[12deg] skew-y-[-9deg] md:block"
        src="../../public/arrow.svg"
        alt="arrow"
      />
      <div className="h-[600px] flex flex-col justify-between">
        <div
          className="flex justify-center bg-zinc-900 w-[200px] bg-opacity-50
      ring
      ring-offset-1 
      ring-transparent
      ring-offset-zinc-50/10
      rounded-md 
      p-1.5 
      mt-5"
        >
          <p>Seamless & Easy to Use</p>
        </div>
        <div className="flex gap-2">
          <Link to="/create-account">
            <button className="text-zinc-900 bg-white p-2 rounded-md">
              Get Started
            </button>
          </Link>
          <Link
            to="/create-account"
            className="flex items-center bg-zinc-800 text-white rounded-md pt-1 pl-4 pb-1 pr-4"
          >
            <span className="duration-75 ease-in hover:scale-105 hover:translate-x-px hover:-translate-y-px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
