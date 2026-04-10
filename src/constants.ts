// --- Constants ---
export const CANVAS_WIDTH = 600;
export const CANVAS_HEIGHT = 800;
export const PLAYER_WIDTH = 50;
export const PLAYER_HEIGHT = 50;
export const PLAYER_SPEED = 3.5;
export const SLINGSHOT_THRESHOLD = 250;
export const GRAZE_DISTANCE = 40;
export const MAX_OVERDRIVE = 100;
export const BULLET_SPEED = 8;
export const ENEMY_DIVE_SPEED = 3.0;
export const ENEMY_BULLET_SPEED = 3.5;
export const ENEMY_ROWS = 5;
export const ENEMY_COLS = 8;
export const ENEMY_SPACING = 55;
export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || ('ontouchstart' in window);
export const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
export const isIOSStandalone = isIOS && (window.navigator as any).standalone === true;

// --- Performance Constants ---
export const MAX_PARTICLES = isMobile ? 150 : 500;
export const MAX_TRAILS = isMobile ? 20 : 60;
export const MAX_BULLETS = isMobile ? 100 : 300;
export const MAX_ENEMY_BULLETS = isMobile ? 150 : 400;
export const ENABLE_SHADOWS = !isMobile;
