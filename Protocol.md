# NEON DEFENDER — Protocol

_Last updated: 2026-04-02_

---

## Overview

A classic arcade-style space shooter inspired by Galaxian and Galaga. This protocol governs agent and codebase interactions for the project.

---

## Core Principles

- Maintain clarity and minimalism in all code and documentation.
- All agent actions must be explicit and traceable.
- No feature or dependency is added without clear justification and user approval.

---

## Data Model

Game state, player stats, and enemy waves are managed in memory using TypeScript objects. Persistent storage is not required for core gameplay.

---

## Workflow

- All changes must be reviewed for redundancy and cross-file consistency.
- Follow the project Roadmap and do not implement features beyond the current phase without explicit instruction.
- Use English for all code, comments, and documentation.
