import React from "react";
import "./countdown.css";
import { useNavigate } from "react-router-dom";
const Countdown = () => {
  const countdownDate = Date.now() + 3 * 24 * 60 * 60 * 1000;
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = React.useState(countdownDate - Date.now());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(countdownDate - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000))
    .toString()
    .padStart(2, "0");
  const hours = Math.floor(
    (timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  )
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000))
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000)
    .toString()
    .padStart(2, "0");
  const handClick = () => {
    navigate("/login");
  };

  return (
    <div className="py-4">
      <div className="flex flex-col gap-4 ">
        <h2 className="text-xl text-blue-500 uppercase font-bold">PROMOTION</h2>
        <h1 className="text-4xl uppercase font-medium">Hurry up! 40% OFF</h1>
        <p className="text-2xl font-normal">
          Thousands of high tech are waiting for you
        </p>
      </div>
      <p className="mb-2 mt-8 text-xl font-normal">Offer expires in:</p>
      <div className="flex ml-auto items-start gap-8">
        <div className="countdown-box">
          <h1 className="countdown-number">{days}</h1>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-box">
          <h1 className="countdown-number">{hours}</h1>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-box">
          <h1 className="countdown-number">{minutes}</h1>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-box">
          <h1 className="countdown-number">{seconds}</h1>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
      <button
        onClick={handClick}
        className=" mt-5 px-16 py-3  bg-black text-2xl text-white rounded-lg"
      >
        Shop now
      </button>
    </div>
  );
};

export default Countdown;
