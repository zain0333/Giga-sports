import React, { useEffect } from "react";
import { FaTrophy, FaTimes, FaStar, FaBolt, FaCheckCircle } from "react-icons/fa";
import { useAchievement } from "../context/AchievementContext";
import "./AchievementModal.css";

const PARTICLES = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  particleClass: `particle-${i % 6}`,
  left: `${((i * 137.5) % 92) + 4}%`,
  animationDelay: `${((i * 0.08) % 0.6).toFixed(2)}s`,
  animationDuration: `${(1.8 + ((i * 0.15) % 1.4)).toFixed(2)}s`,
}));

const AchievementModal: React.FC = () => {
  const { currentAchievement, isOpen, closeAchievement, totalPoints } = useAchievement();

  // Play celebration chime using Web Audio API (no external asset needed)
  useEffect(() => {
    if (isOpen) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          const now = ctx.currentTime;

          // Arpeggio chime notes: C5, E5, G5, C6
          const notes = [523.25, 659.25, 783.99, 1046.5];
          notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, now + idx * 0.1);

            gain.gain.setValueAtTime(0, now + idx * 0.1);
            gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.1 + 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now + idx * 0.1);
            osc.stop(now + idx * 0.1 + 0.45);
          });
        }
      } catch {
        // Audio synthesis failover silently
      }

      // Auto close after 6 seconds
      const timer = setTimeout(() => {
        closeAchievement();
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, closeAchievement]);

  if (!isOpen || !currentAchievement) return null;

  return (
    <div className="achievement-overlay" onClick={closeAchievement} role="dialog" aria-modal="true">
      {/* Confetti particles */}
      <div className="achievement-confetti-container" aria-hidden="true">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className={`confetti-particle ${p.particleClass}`}
            style={{
              left: p.left,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
          />
        ))}
      </div>

      <div className="achievement-card" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          type="button"
          className="achievement-close-btn"
          onClick={closeAchievement}
          aria-label="Close achievement"
        >
          <FaTimes />
        </button>

        {/* Shimmer Light Flare */}
        <div className="achievement-flare" aria-hidden="true" />

        {/* Top Badge */}
        <div className="achievement-top-badge">
          <FaStar className="achieve-star-icon" />
          <span>{currentAchievement.badge || "GIGA REWARD UNLOCKED"}</span>
          <FaStar className="achieve-star-icon" />
        </div>

        {/* Animated Trophy Icon */}
        <div className="achievement-trophy-wrapper">
          <div className="trophy-pulse-ring" />
          <div className="trophy-pulse-ring delay" />
          <div className="trophy-glow-backdrop" />
          <div className="trophy-circle">
            <FaTrophy className="trophy-main-icon" />
          </div>
        </div>

        {/* Main Headings */}
        <div className="achievement-text-content">
          <h2 className="achievement-title">
            {currentAchievement.title || "🎉 Achievement Unlocked!"}
          </h2>
          <div className="achievement-points-banner">
            <span className="points-highlight">
              {currentAchievement.subtitle || `🏆 You earned ${currentAchievement.points} GIGA Points!`}
            </span>
          </div>
          <p className="achievement-desc">
            Points have been credited to your sports profile. Redeem them for exclusive discounts on your next tournament order!
          </p>
        </div>

        {/* Points Balance Counter Card */}
        <div className="achievement-balance-box">
          <div className="balance-info-left">
            <span className="bal-lbl">Current GIGA Balance</span>
            <strong className="bal-val">
              <FaBolt className="bolt-icon" /> {totalPoints.toLocaleString()} PTS
            </strong>
          </div>
          <div className="balance-badge-right">
            <FaCheckCircle className="check-icon" />
            <span>VIP Athlete Status</span>
          </div>
        </div>

        {/* Action Button */}
        <button type="button" className="achievement-cta-btn" onClick={closeAchievement}>
          🚀 Awesome! Claim & Continue
        </button>
      </div>
    </div>
  );
};

export default AchievementModal;
