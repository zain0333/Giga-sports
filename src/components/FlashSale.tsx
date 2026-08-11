import { useEffect, useState } from "react";

function FlashSale() {
  // Flash sale ends after 24 hours
  const getEndTime = () => {
    const savedEndTime = localStorage.getItem("flashSaleEndTime");

    if (savedEndTime) {
      return Number(savedEndTime);
    }

    const newEndTime = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem("flashSaleEndTime", newEndTime.toString());

    return newEndTime;
  };

  const [endTime] = useState(getEndTime());

  const calculateTimeLeft = () => {
    const difference = endTime - Date.now();

    if (difference <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const saleFinished =
    timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <section className="flash-sale">
      <div className="flash-sale-content">
        <span className="sale-icon">🔥</span>

        <div>
          <h2>FLASH SALE!</h2>
          <p>Get up to 30% OFF on selected sports products</p>
        </div>

        {!saleFinished ? (
          <div className="countdown">
            <div>
              <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
              <small>Hours</small>
            </div>

            <span>:</span>

            <div>
              <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
              <small>Minutes</small>
            </div>

            <span>:</span>

            <div>
              <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
              <small>Seconds</small>
            </div>
          </div>
        ) : (
          <h3>SALE ENDED</h3>
        )}
      </div>
    </section>
  );
}

export default FlashSale;
