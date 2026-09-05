/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface AchievementPayload {
  title?: string;
  points: number;
  subtitle?: string;
  badge?: string;
}

interface AchievementContextType {
  totalPoints: number;
  currentAchievement: AchievementPayload | null;
  isOpen: boolean;
  triggerAchievement: (payload?: Partial<AchievementPayload>) => void;
  closeAchievement: () => void;
}

const STORAGE_KEY = "giga_user_points";

const AchievementContext = createContext<AchievementContextType | undefined>(undefined);

export const AchievementProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalPoints, setTotalPoints] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? parseInt(saved, 10) : 100; // default starting reward points
    } catch {
      return 100;
    }
  });

  const [currentAchievement, setCurrentAchievement] = useState<AchievementPayload | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, totalPoints.toString());
    } catch {
      // ignore storage errors
    }
  }, [totalPoints]);

  const triggerAchievement = useCallback((payload?: Partial<AchievementPayload>) => {
    const earnedPoints = payload?.points ?? 500;
    const achievementData: AchievementPayload = {
      title: payload?.title || "🎉 Achievement Unlocked!",
      points: earnedPoints,
      subtitle: payload?.subtitle || `🏆 You earned ${earnedPoints} GIGA Points!`,
      badge: payload?.badge || "CHAMPION REWARD",
    };

    setTotalPoints((prev) => prev + earnedPoints);
    setCurrentAchievement(achievementData);
    setIsOpen(true);
  }, []);

  const closeAchievement = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <AchievementContext.Provider
      value={{
        totalPoints,
        currentAchievement,
        isOpen,
        triggerAchievement,
        closeAchievement,
      }}
    >
      {children}
    </AchievementContext.Provider>
  );
};

export const useAchievement = (): AchievementContextType => {
  const context = useContext(AchievementContext);
  if (!context) {
    throw new Error("useAchievement must be used within an AchievementProvider");
  }
  return context;
};
