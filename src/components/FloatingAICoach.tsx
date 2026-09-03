import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaBolt,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { QUICK_COACH_PROMPTS } from "../data/aiCoachData";
import "./FloatingAICoach.css";

const FloatingAICoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<
    { sender: "user" | "coach"; text: string; time: string }[]
  >([
    {
      sender: "coach",
      text: "⚡ **Hi Athlete!** I'm your GIGA AI Coach. Need quick advice on drills, workout plans, cricket form, or running cadence?",
      time: "Just now",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (customPrompt?: string) => {
    const query = customPrompt || inputMessage;
    if (!query.trim()) return;

    const userTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: query, time: userTime },
    ]);

    if (!customPrompt) setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      const qLower = query.toLowerCase();

      const matched = QUICK_COACH_PROMPTS.find(
        (qp) =>
          qLower.includes(qp.topic.toLowerCase()) ||
          qp.topic.toLowerCase().split(" ").some((w) => qLower.includes(w))
      );

      if (matched) {
        reply = matched.reply;
      } else if (qLower.includes("cricket")) {
        reply =
          "🏏 **Cricket Pro Tip:** Focus on locking your front knee at bowling release to convert horizontal momentum into catapult speed. For batting, lead with your head towards the pitch of the ball!";
      } else if (qLower.includes("football") || qLower.includes("soccer")) {
        reply =
          "⚽ **Football Pro Tip:** Keep your plant foot 6 inches beside the ball with locked ankle on instep strikes. For agility, perform 15-second multi-directional box-to-box sprints!";
      } else if (qLower.includes("gym") || qLower.includes("muscle") || qLower.includes("workout")) {
        reply =
          "💪 **Strength Pro Tip:** Focus on compound progressive overload (Dumbbell RDLs, Incline Press, Goblet Squats) and 1.8g-2.2g protein per kg of bodyweight daily!";
      } else if (qLower.includes("run") || qLower.includes("running") || qLower.includes("stamina")) {
        reply =
          "👟 **Running Pro Tip:** Maintain 175-185 SPM cadence with light midfoot landing beneath your hips to eliminate knee impact and shin splints!";
      } else {
        reply =
          "⚡ **Coach Insight:** Consistent recovery, proper hydration (3.5L/day), and structured drill reps are the keys to breakthrough athletic performance. Visit our full AI Coach Studio for personalized plans!";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "coach",
          text: reply,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="floating-ai-coach-root">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          type="button"
          className="floating-coach-launcher"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Sports Coach"
        >
          <div className="launcher-pulse"></div>
          <FaRobot className="launcher-icon" />
          <span className="launcher-label">AI Coach</span>
          <span className="launcher-badge">LIVE</span>
        </button>
      )}

      {/* Floating Popup Window */}
      {isOpen && (
        <div className="floating-coach-window">
          {/* Header */}
          <div className="floating-window-header">
            <div className="floating-header-left">
              <div className="floating-coach-avatar">
                <FaBolt />
              </div>
              <div>
                <h4>GIGA AI Coach</h4>
                <span className="floating-status">
                  <span className="live-dot-green"></span> 24/7 Athlete Assistant
                </span>
              </div>
            </div>

            <div className="floating-header-actions">
              <Link
                to="/ai-coach"
                className="btn-open-full-hub"
                title="Open Full AI Coach Studio"
                onClick={() => setIsOpen(false)}
              >
                <FaExternalLinkAlt />
              </Link>
              <button
                type="button"
                className="btn-close-floating"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="floating-quick-chips">
            <button
              type="button"
              className="f-chip"
              onClick={() => handleSend("How to increase cricket bowling pace?")}
            >
              🏏 Bowling Pace
            </button>
            <button
              type="button"
              className="f-chip"
              onClick={() => handleSend("Football free kick curve technique")}
            >
              ⚽ Free Kick Curve
            </button>
            <button
              type="button"
              className="f-chip"
              onClick={() => handleSend("What to eat 3 hours before match?")}
            >
              🥗 Pre-Match Meal
            </button>
            <button
              type="button"
              className="f-chip"
              onClick={() => handleSend("How to prevent shin splints when running?")}
            >
              👟 Running Cadence
            </button>
          </div>

          {/* Messages Body */}
          <div className="floating-messages-body">
            {messages.map((m, idx) => (
              <div className={`f-msg-bubble ${m.sender}`} key={idx}>
                <div className="f-msg-content">
                  {m.text.split("\n").map((line, lIdx) => (
                    <p key={lIdx}>{line}</p>
                  ))}
                </div>
                <span className="f-msg-time">{m.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="f-msg-bubble coach f-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          {/* Input Box */}
          <form
            className="floating-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              placeholder="Ask AI Coach a question..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="f-input"
            />
            <button
              type="submit"
              className="f-send-btn"
              disabled={!inputMessage.trim() || isTyping}
            >
              <FaPaperPlane />
            </button>
          </form>

          {/* Footer CTA to Full Studio */}
          <div className="floating-window-footer">
            <Link
              to="/ai-coach"
              className="floating-full-studio-link"
              onClick={() => setIsOpen(false)}
            >
              <span>Explore Full AI Coach Studio (Workouts, Nutrition & Drills)</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingAICoach;
