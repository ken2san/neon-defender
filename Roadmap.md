# NEON DEFENDER — Development Roadmap

_Last updated: 2026-04-02_

> Note: Core gameplay (player, enemies, bosses, upgrades, relics, audio, mobile) is already implemented.
> This roadmap covers technical hardening, design review, and release.

---

## Phase 1 — Technical Foundation ✅ In Progress

### Goal

Establish a maintainable codebase before any further feature work.

### Scope

- Extract constants, types, and components from App.tsx monolith
- Fix Tailwind v4 class name migrations
- Enforce TypeScript strictness (zero type errors)
- Finalize .gitignore, .vscode settings, and project structure docs

---

## Phase 2 — Game Design Review

### Goal

Audit the current game for feel, balance, and scope — decide what stays, what changes, what gets cut.

### Scope

- Gameplay balance: enemy difficulty curves, boss phases, power-up frequency
- UX review: HUD clarity, touch controls, game state transitions
- Feature audit: identify redundant or broken mechanics
- Produce a concise design spec before any new code is written

---

## Phase 3 — Architecture

### Goal

Break App.tsx into logical, maintainable modules aligned with the finalized design.

### Scope

- Game loop / render pipeline → `src/game/`
- Input handling → `src/hooks/useInput.ts`
- Enemy AI / spawning → `src/game/enemies.ts`
- UI components → `src/components/`
- State management consolidation

---

## Phase 4 — Polish

### Goal

Raise the quality bar on performance, mobile UX, and audio.

### Scope

- Canvas rendering performance profiling
- Mobile touch control refinement
- Sound design review (BGM, SFX balance)
- Visual effects tuning (particles, trails)

---

## Phase 5 — Release

### Goal

Ship a stable, deployable build to Firebase Hosting.

### Scope

- Production build optimization (Vite)
- Firebase Hosting deployment
- Final gameplay pass and bug fixes

---

## Current Status

Active phase: **Phase 1**
