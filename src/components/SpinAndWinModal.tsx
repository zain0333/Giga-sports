import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaGift,
  FaCopy,
  FaCheck,
  FaTrophy,
  FaArrowRight,
  FaRedo,
  FaFire,
} from "react-icons/fa";
import { useAchievement } from "../context/AchievementContext";
import "./SpinAndWinModal.css";

export interface WheelSegment {
  id: number;
  label: string;
  code: string;
  discount: string;
  icon: string;
  color: string;
  textColor: string;
  points?: number;
}

const SEGMENTS: WheelSegment[] = [
  { id: 0, label: "15% OFF", code: "GIGA15", discount: "15% Discount", icon: "🎟️", color: "#f59e0b", textColor: "#03172e" },
  { id: 1, label: "FREE SHIPPING", code: "FREESHIP", discount: "Free Express Shipping", icon: "🚚", color: "#0284c7", textColor: "#ffffff" },
  { id: 2, label: "500 GIGA PTS", code: "PTS500", discount: "+500 Bonus Reward Points", icon: "🏆", color: "#10b981", textColor: "#ffffff", points: 500 },
  { id: 3, label: "20% PRO OFF", code: "PRO20", discount: "20% Off Tournament Gear", icon: "💥", color: "#ec4899", textColor: "#ffffff" },
  { id: 4, label: "MYSTERY GIFT", code: "MYSTERYGIFT", discount: "Special Athlete Gift on Order", icon: "🎁", color: "#8b5cf6", textColor: "#ffffff" },
  { id: 5, label: "10% INSTANT", code: "CHAMP10", discount: "10% Instant Discount", icon: "⚡", color: "#06b6d4", textColor: "#03172e" },
  { id: 6, label: "25% VIP OFF", code: "VIP25", discount: "25% VIP Champion Discount", icon: "👑", color: "#eab308", textColor: "#03172e" },
  { id: 7, label: "FREE BAT GRIP", code: "FREEGRIP", discount: "Free Pro Chevron Grip Included", icon: "🏏", color: "#14b8a6", textColor: "#ffffff" },
];

const CONFETTI_DOTS = Array.from({ length: 28 }).map((_, i) => ({
  id: i,
  left: `${((i * 137.5) % 92) + 4}%`,
  color: ["#f59e0b", "#38bdf8", "#10b981", "#ec4899", "#a855f7"][i % 5],
  delay: `${((i * 0.07) % 0.5).toFixed(2)}s`,
  duration: `${(1.6 + ((i * 0.12) % 1.2)).toFixed(2)}s`,
}));

const SpinAndWinModal: React.FC = () => {
  const { triggerAchievement } = useAchievement();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [currentRotation, setCurrentRotation] = useState<number>(0);
  const [wonPrize, setWonPrize] = useState<WheelSegment | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [hasSpunBefore, setHasSpunBefore] = useState<boolean>(() => {
    try {
      return localStorage.getItem("giga_spun_wheel") === "true";
    } catch {
      return false;
    }
  });

  const lastClickTimeRef = useRef<number>(0);

  // Play realistic tick sound on spin
  const playTickSound = useCallback(() => {
    try {
      const now = performance.now();
      if (now - lastClickTimeRef.current < 60) return;
      lastClickTimeRef.current = now;

      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(600 + Math.random() * 200, ctx.currentTime);

        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.045);
      }
    } catch {
      // ignore audio errors
    }
  }, []);

  // Play fanfare sound on win
  const playWinFanfare = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const notes = [440, 554.37, 659.25, 880];
        const now = ctx.currentTime;

        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);

          gain.gain.setValueAtTime(0.15, now + idx * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.4);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + idx * 0.12);
          osc.stop(now + idx * 0.12 + 0.45);
        });
      }
    } catch {
      // ignore audio errors
    }
  }, []);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setWonPrize(null);
    setCopied(false);

    // Pick winning segment (e.g. weighted random or random choice)
    const winningIndex = Math.floor(Math.random() * SEGMENTS.length);
    const winningSegment = SEGMENTS[winningIndex];

    // Segment size is 45 degrees (360 / 8)
    const segmentAngle = 360 / SEGMENTS.length;
    // We want the indicator at the top (0deg / 360deg) to land on winning segment
    const targetOffset = 360 - (winningIndex * segmentAngle + segmentAngle / 2);

    // Add 5 to 7 full rotations for excitement
    const fullSpins = 360 * (5 + Math.floor(Math.random() * 3));
    const finalAngle = currentRotation + fullSpins + targetOffset - (currentRotation % 360);

    setCurrentRotation(finalAngle);

    // Interval to play tick sounds during spin
    const startTime = Date.now();
    const duration = 4800; // ms

    const tickInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= duration) {
        clearInterval(tickInterval);
      } else {
        playTickSound();
      }
    }, 120);

    // Stop and show winner after duration
    setTimeout(() => {
      clearInterval(tickInterval);
      setIsSpinning(false);
      setWonPrize(winningSegment);
      playWinFanfare();

      try {
        localStorage.setItem("giga_spun_wheel", "true");
        localStorage.setItem("giga_active_coupon", winningSegment.code);
        setHasSpunBefore(true);
      } catch {
        // ignore storage errors
      }

      // If segment awards GIGA Points, trigger achievement!
      if (winningSegment.points) {
        triggerAchievement({
          title: "🎉 Lucky Wheel 500 PTS Unlocked!",
          points: 500,
          subtitle: "🏆 You earned 500 GIGA Points from Spin & Win!",
          badge: "LUCKY WHEEL WINNER",
        });
      }
    }, duration);
  };

  const handleCopyCode = () => {
    if (!wonPrize) return;
    try {
      navigator.clipboard.writeText(wonPrize.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
    }
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isSpinning) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isSpinning]);

  return (
    <>
      {/* =========================================================
          FLOATING TRIGGER BUTTON (Bottom Left Launcher)
          ========================================================= */}
      <button
        type="button"
        className="spin-win-launcher-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open Spin & Win Wheel"
        title="Spin & Win Sports Discount!"
      >
        <div className="launcher-pulse-ring" />
        <span className="launcher-icon">🎁</span>
        <div className="launcher-text-box">
          <strong>SPIN & WIN</strong>
          <small>Up to 25% OFF</small>
        </div>
      </button>

      {/* =========================================================
          MODAL OVERLAY
          ========================================================= */}
      {isOpen && (
        <div
          className="spin-modal-overlay"
          onClick={() => !isSpinning && setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="spin-modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              type="button"
              className="spin-close-btn"
              onClick={() => !isSpinning && setIsOpen(false)}
              disabled={isSpinning}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Confetti Explosion on Win */}
            {wonPrize && (
              <div className="win-confetti-container" aria-hidden="true">
                {CONFETTI_DOTS.map((c) => (
                  <span
                    key={c.id}
                    className="win-confetti-piece"
                    style={{
                      left: c.left,
                      backgroundColor: c.color,
                      animationDelay: c.delay,
                      animationDuration: c.duration,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Header */}
            <div className="spin-header">
              <div className="spin-pill-badge">
                <FaFire className="badge-fire" />
                <span>OFFICIAL SPORTS REWARD ARENA</span>
              </div>
              <h2>🎡 Spin & Win Exclusive Discounts!</h2>
              <p>
                Spin the GIGA wheel to win match-day discount codes, free express delivery, or bonus athlete reward points.
              </p>
            </div>

            {/* Main Wheel Area */}
            <div className="wheel-arena-wrapper">
              {/* Center Pointer Indicator */}
              <div className="wheel-top-pointer">
                <div className="pointer-arrow" />
              </div>

              {/* Rotating Wheel Container */}
              <div
                className={`roulette-wheel ${isSpinning ? "spinning" : ""}`}
                style={{
                  transform: `rotate(${currentRotation}deg)`,
                  transition: isSpinning
                    ? "transform 4.8s cubic-bezier(0.15, 0.99, 0.22, 1)"
                    : "transform 0.3s ease-out",
                }}
              >
                <svg viewBox="0 0 400 400" className="wheel-svg">
                  <defs>
                    <filter id="wheelShadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.5" />
                    </filter>
                  </defs>

                  {/* 8 Slices */}
                  {SEGMENTS.map((seg, i) => {
                    const angle = 360 / SEGMENTS.length;
                    const startAngle = i * angle - 90;
                    const endAngle = (i + 1) * angle - 90;

                    const startRad = (startAngle * Math.PI) / 180;
                    const endRad = (endAngle * Math.PI) / 180;

                    const x1 = 200 + 190 * Math.cos(startRad);
                    const y1 = 200 + 190 * Math.sin(startRad);
                    const x2 = 200 + 190 * Math.cos(endRad);
                    const y2 = 200 + 190 * Math.sin(endRad);

                    const pathData = `M 200 200 L ${x1} ${y1} A 190 190 0 0 1 ${x2} ${y2} Z`;
                    const textAngle = startAngle + angle / 2;

                    return (
                      <g key={seg.id}>
                        <path
                          d={pathData}
                          fill={seg.color}
                          stroke="#03182e"
                          strokeWidth="3"
                        />
                        {/* Segment Text & Icon */}
                        <g transform={`rotate(${textAngle + 90}, 200, 200)`}>
                          <text
                            x="200"
                            y="55"
                            fill={seg.textColor}
                            fontSize="13"
                            fontWeight="900"
                            textAnchor="middle"
                            letterSpacing="0.5"
                          >
                            {seg.icon} {seg.label}
                          </text>
                        </g>
                      </g>
                    );
                  })}

                  {/* Outer Rim Circle */}
                  <circle
                    cx="200"
                    cy="200"
                    r="194"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="8"
                  />
                  {/* Decorative Studs around rim */}
                  {Array.from({ length: 16 }).map((_, sIdx) => {
                    const sAngle = (sIdx * (360 / 16) * Math.PI) / 180;
                    const sx = 200 + 194 * Math.cos(sAngle);
                    const sy = 200 + 194 * Math.sin(sAngle);
                    return (
                      <circle
                        key={sIdx}
                        cx={sx}
                        cy={sy}
                        r="3.5"
                        fill="#ffffff"
                        stroke="#03182e"
                        strokeWidth="1"
                      />
                    );
                  })}
                </svg>

                {/* Wheel Center Hub */}
                <div className="wheel-center-hub">
                  <FaTrophy className="hub-trophy" />
                </div>
              </div>
            </div>

            {/* Spin Button or Winner Card */}
            {!wonPrize ? (
              <div className="spin-actions-row">
                <button
                  type="button"
                  className="btn-spin-now"
                  onClick={handleSpin}
                  disabled={isSpinning}
                >
                  {isSpinning ? (
                    <>
                      <FaRedo className="spin-revolve" /> SPINNING...
                    </>
                  ) : (
                    <>
                      <FaGift /> SPIN THE WHEEL!
                    </>
                  )}
                </button>
                <small className="spin-disclaimer">
                  {hasSpunBefore
                    ? "🎉 You can re-spin anytime to unlock new promo codes!"
                    : "✨ Guaranteed win on every spin!"}
                </small>
              </div>
            ) : (
              /* Winner Result Box */
              <div className="spin-winner-card">
                <span className="win-congrats-tag">🎉 CONGRATULATIONS!</span>
                <h3 className="winner-prize-title">
                  {wonPrize.icon} You Won {wonPrize.discount}!
                </h3>

                <div className="coupon-code-row">
                  <span className="coupon-code-box">{wonPrize.code}</span>
                  <button
                    type="button"
                    className={`btn-copy-code ${copied ? "copied" : ""}`}
                    onClick={handleCopyCode}
                  >
                    {copied ? (
                      <>
                        <FaCheck /> Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy /> Copy Code
                      </>
                    )}
                  </button>
                </div>

                <p className="coupon-apply-hint">
                  Use promo code <strong>{wonPrize.code}</strong> at checkout for instant savings.
                </p>

                <div className="winner-action-buttons">
                  <Link
                    to="/products"
                    className="btn-apply-shop"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Apply & Shop Now</span>
                    <FaArrowRight />
                  </Link>
                  <button
                    type="button"
                    className="btn-spin-again"
                    onClick={handleSpin}
                  >
                    <FaRedo /> Spin Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SpinAndWinModal;
