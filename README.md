<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/ec044b0c-3c79-4297-8542-29af244d9bf8

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Debug Mode

Two on-screen overlays and console input logging are all disabled by default. Enable with a single URL parameter:

| Parameter  | Effect                                                                                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `?debug=1` | Enable debug mode: show **Perf_Baseline** (FPS / frame-time) and **Input_Debug** (mouse / touch / slingshot state) overlays, and enable `[NEON]` console logging |
| `?debug=0` | Disable debug mode and clear the persisted setting                                                                                                               |

The setting persists in `localStorage` — once enabled with `?debug=1`, it stays active across reloads until explicitly cleared with `?debug=0`.
