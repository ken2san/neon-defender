export type ProgressState = {
  level: number;
  xp: number;
  xpToNextLevel: number;
};

export type ProgressUpdateResult = {
  next: ProgressState;
  didLevelUp: boolean;
};

export const XP_PER_SCRAP = 10;

export const applyXpGain = (
  state: ProgressState,
  gain: number
): ProgressUpdateResult => {
  let nextXp = state.xp + gain;
  let nextLevel = state.level;
  let nextXpToNextLevel = state.xpToNextLevel;
  let didLevelUp = false;

  // Keep existing behavior: at most one level-up per gain application.
  if (nextXp >= nextXpToNextLevel) {
    nextXp -= nextXpToNextLevel;
    nextLevel += 1;
    nextXpToNextLevel = Math.floor(nextXpToNextLevel * 1.5);
    didLevelUp = true;
  }

  return {
    next: {
      level: nextLevel,
      xp: nextXp,
      xpToNextLevel: nextXpToNextLevel,
    },
    didLevelUp,
  };
};
