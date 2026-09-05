import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaArrowRight,
  FaCompass,
  FaFire,
  FaBolt,
  FaShieldAlt,
  FaTrophy,
} from "react-icons/fa";
import "./CinematicHeroVideo.css";

interface VideoScene {
  id: string;
  name: string;
  icon: string;
  videoUrl: string;
  poster: string;
  tagline: string;
  accentColor: string;
}

const SCENES: VideoScene[] = [
  {
    id: "cricket",
    name: "Cricket Masterclass",
    icon: "🏏",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cricket-batsman-hitting-a-ball-in-a-stadium-41121-large.mp4",
    poster: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1920&q=80",
    tagline: "Ultra Slow-Motion Power Drives & Boundary Hits",
    accentColor: "#f59e0b",
  },
  {
    id: "football",
    name: "Football Strike",
    icon: "⚽",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-football-player-striking-the-ball-in-slow-motion-42582-large.mp4",
    poster: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1920&q=80",
    tagline: "Slow-Motion Top Corner Curving Strikes & Match Action",
    accentColor: "#38bdf8",
  },
  {
    id: "running",
    name: "Sprint & Running",
    icon: "👟",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-running-athlete-in-the-dark-41718-large.mp4",
    poster: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1920&q=80",
    tagline: "High-Speed Stride Dynamics & Sole Cushion Compression",
    accentColor: "#10b981",
  },
  {
    id: "gym",
    name: "Gym & Power",
    icon: "🏋️",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-muscular-man-exercising-with-a-barbell-in-a-gym-42701-large.mp4",
    poster: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1920&q=80",
    tagline: "Heavy-Duty Olympic Lifting & Biomechanical Power",
    accentColor: "#ec4899",
  },
];

const CinematicHeroVideo: React.FC = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const currentScene = SCENES[activeSceneIndex];

  // Reload video smoothly on scene change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
        setIsPlaying(false);
      });
    }
  }, [activeSceneIndex]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="cinematic-hero-wrapper" aria-label="Cinematic Sports Action Hero">
      {/* =========================================================
          BACKGROUND VIDEO PLAYER
          ========================================================= */}
      <div className="cinematic-video-container">
        <video
          ref={videoRef}
          className="cinematic-video-element"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster={currentScene.poster}
          key={currentScene.id}
        >
          <source src={currentScene.videoUrl} type="video/mp4" />
          {/* Fallback to poster background image if video fails to load */}
        </video>

        {/* Ambient Dark & Gradient Overlays for perfect text readability */}
        <div className="cinematic-gradient-overlay" />
        <div className="cinematic-radial-vignette" />
        <div className="cinematic-scanlines" />
      </div>

      {/* =========================================================
          HERO CONTENT OVERLAY (Smooth animated text & CTAs)
          ========================================================= */}
      <div className="container cinematic-content-container">
        <div className="row">
          <div className="col-xl-8 col-lg-10">
            <div className="cinematic-text-card fade-in-up" key={currentScene.id}>
              {/* Stadium Live Pill */}
              <div className="cinematic-badge">
                <span className="live-rec-dot" />
                <FaFire className="badge-fire-icon" />
                <span>4K CINEMATIC ARENA • {currentScene.name.toUpperCase()}</span>
              </div>

              {/* Main Headline */}
              <h1 className="cinematic-headline">
                UNLEASH YOUR <span className="headline-gradient">ATHLETIC POTENTIAL</span>
              </h1>

              {/* Tagline & Subtitle */}
              <p className="cinematic-subtext">
                Tournament-grade sports gear engineered for champions. Experience match-quality cricket bats, FIFA certified footballs, and high-performance footwear captured in ultra slow-motion action.
              </p>

              {/* Scene Note Highlight */}
              <div className="cinematic-scene-note">
                <FaBolt className="note-bolt" />
                <span>Current View: <strong>{currentScene.tagline}</strong></span>
              </div>

              {/* Requested Action Buttons */}
              <div className="cinematic-cta-group">
                <Link to="/products" className="btn-cinematic-primary" id="hero-shop-now-btn">
                  <span>Shop Now</span>
                  <FaArrowRight className="cta-arrow" />
                </Link>

                <Link to="/showcase-360" className="btn-cinematic-secondary" id="hero-explore-sports-btn">
                  <FaCompass className="cta-compass" />
                  <span>Explore Sports</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="cinematic-trust-ribbon">
                <div className="c-trust-item">
                  <FaShieldAlt className="t-icon" />
                  <span>100% Genuine Match Quality</span>
                </div>
                <div className="c-trust-item">
                  <FaTrophy className="t-icon" />
                  <span>500 GIGA Points Reward</span>
                </div>
                <div className="c-trust-item">
                  <FaBolt className="t-icon" />
                  <span>24-Hour Express Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          CINEMATIC CONTROLS & SCENE SELECTOR
          ========================================================= */}
      <div className="cinematic-dock-bar">
        <div className="container d-flex align-items-center justify-content-between flex-wrap gap-3">
          {/* Scene Switcher Tabs */}
          <div className="scene-tabs-wrap">
            <span className="scene-switch-lbl">Slow-Mo Scenes:</span>
            {SCENES.map((scene, idx) => (
              <button
                type="button"
                key={scene.id}
                className={`scene-pill-btn ${activeSceneIndex === idx ? "active" : ""}`}
                onClick={() => setActiveSceneIndex(idx)}
              >
                <span className="scene-icon">{scene.icon}</span>
                <span className="scene-name">{scene.name}</span>
              </button>
            ))}
          </div>

          {/* Video Playback Controls */}
          <div className="video-playback-controls">
            <button
              type="button"
              className="vid-ctrl-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
              title={isPlaying ? "Pause Background Video" : "Play Background Video"}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button
              type="button"
              className="vid-ctrl-btn"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
              title={isMuted ? "Unmute Ambient Audio" : "Mute Audio"}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicHeroVideo;
