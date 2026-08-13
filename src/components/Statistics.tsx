import { useEffect, useState } from "react";
import { FaBoxOpen, FaUsers, FaTrophy, FaTruck } from "react-icons/fa";

type StatisticProps = {
  icon: React.ReactNode;
  number: number;
  suffix: string;
  title: string;
};

function Statistic({ icon, number, suffix, title }: StatisticProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;

    const duration = 1800;
    const steps = 60;
    const increment = number / steps;
    const intervalTime = duration / steps;

    const counter = setInterval(() => {
      current += increment;

      if (current >= number) {
        current = number;
        clearInterval(counter);
      }

      setCount(Math.floor(current));
    }, intervalTime);

    return () => clearInterval(counter);
  }, [isVisible, number]);

  return (
    <div className="statistics-item">
      <div className="statistics-icon">{icon}</div>

      <div className="statistics-number">
        {count}
        {suffix}
      </div>

      <div className="statistics-title">{title}</div>
    </div>
  );
}

function Statistics() {
  return (
    <section className="statistics-section">
      <div className="container">
        {/* Heading */}
        <div className="statistics-heading">
          <span className="statistics-small-title">GIGA SPORTS</span>

          <h2>Why Customers Choose Us</h2>

          <p>
            Trusted by sports lovers for quality products and reliable service.
          </p>
        </div>

        {/* Statistics */}
        <div className="row g-4">
          {/* Products */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Statistic
              icon={<FaBoxOpen />}
              number={500}
              suffix="+"
              title="Sports Products"
            />
          </div>

          {/* Customers */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Statistic
              icon={<FaUsers />}
              number={1200}
              suffix="+"
              title="Happy Customers"
            />
          </div>

          {/* Categories */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Statistic
              icon={<FaTrophy />}
              number={50}
              suffix="+"
              title="Sports Categories"
            />
          </div>

          {/* Delivery */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Statistic
              icon={<FaTruck />}
              number={99}
              suffix="%"
              title="Fast Delivery"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
