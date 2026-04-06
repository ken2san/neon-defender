import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

interface TutorialSlide {
  title: string;
  body: string;
  hint?: string;
  icon: string;
}

const SLIDES_PC: TutorialSlide[] = [
  {
    icon: '🖱️',
    title: 'MOVE',
    body: 'Move your mouse to pilot the ship. The ship follows with inertia — lead your target.',
    hint: 'Auto-fire is always active.',
  },
  {
    icon: '⚡',
    title: 'SLINGSHOT',
    body: 'Hold Ctrl while dragging to charge a slingshot. The longer you pull, the farther and harder you snap.',
    hint: 'Tier 1–4: pull distance determines the jump range.',
  },
  {
    icon: '🛡️',
    title: 'ENERGY WALL',
    body: 'While charging the slingshot, your shield forms an arc. Enemy bullets absorbed by the arc charge your Overdrive gauge.',
    hint: 'Hold and absorb as many bullets as you can before releasing.',
  },
  {
    icon: '🌀',
    title: 'OVERDRIVE',
    body: 'When the OD gauge is full, the next bullet absorbed auto-triggers OVERDRIVE — rapid fire, speed boost, and bigger explosions for 6 seconds.',
    hint: 'The FRENZY relic extends Overdrive to 9 seconds.',
  },
];

const SLIDES_MOBILE: TutorialSlide[] = [
  {
    icon: '👆',
    title: 'MOVE',
    body: 'Drag anywhere on screen to move your ship. Auto-fire is always active.',
    hint: 'The ship follows your finger with inertia.',
  },
  {
    icon: '⚡',
    title: 'SLINGSHOT',
    body: 'Double-tap then drag to charge a slingshot. Pull further for a bigger snap.',
    hint: 'Tier 1–4: pull distance determines the jump range.',
  },
  {
    icon: '🛡️',
    title: 'ENERGY WALL',
    body: 'While charging, your shield arc absorbs enemy bullets and charges the Overdrive gauge.',
    hint: 'Two-finger tap triggers Overdrive manually when gauge is full.',
  },
  {
    icon: '🌀',
    title: 'OVERDRIVE',
    body: 'OD gauge full → next absorbed bullet auto-triggers OVERDRIVE: rapid fire, speed boost, bigger explosions.',
    hint: 'The FRENZY relic extends Overdrive to 9 seconds.',
  },
];

interface Props {
  isTouchDevice: boolean;
  onClose: () => void;
}

export default function TutorialOverlay({ isTouchDevice, onClose }: Props) {
  const [page, setPage] = useState(0);
  const slides = isTouchDevice ? SLIDES_MOBILE : SLIDES_PC;
  const slide = slides[page];
  const isLast = page === slides.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-200 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-sm mx-6 bg-[#080c10] border border-[#00ffcc]/30 shadow-[0_0_60px_rgba(0,255,204,0.12)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00ffcc]" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00ffcc]" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00ffcc]" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00ffcc]" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>

        {/* Header label */}
        <div className="px-8 pt-7 pb-0">
          <span className="text-[7px] uppercase tracking-[0.8em] font-black text-[#00ffcc]/50">
            HOW_TO_PLAY — {page + 1}/{slides.length}
          </span>
        </div>

        {/* Slide content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2 }}
            className="px-8 pt-6 pb-4"
          >
            <div className="text-4xl mb-4">{slide.icon}</div>
            <h2 className="text-xl font-black tracking-[0.25em] text-white mb-3">
              {slide.title}
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {slide.body}
            </p>
            {slide.hint && (
              <p className="text-[11px] text-[#00ffcc]/60 font-mono border-l-2 border-[#00ffcc]/30 pl-3">
                {slide.hint}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 pb-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === page
                  ? 'bg-[#00ffcc] shadow-[0_0_6px_#00ffcc]'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between px-8 pb-7 pt-3 border-t border-white/5">
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex items-center gap-1 text-[10px] uppercase tracking-[0.4em] font-black text-gray-600 hover:text-white transition-colors disabled:opacity-20 disabled:pointer-events-none"
          >
            <ChevronLeft size={12} /> Prev
          </button>

          {isLast ? (
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-2 border border-[#00ffcc] text-[#00ffcc] text-[10px] uppercase tracking-[0.5em] font-black hover:bg-[#00ffcc] hover:text-black transition-all duration-300"
            >
              Engage
            </button>
          ) : (
            <button
              onClick={() => setPage(p => Math.min(slides.length - 1, p + 1))}
              className="flex items-center gap-1 text-[10px] uppercase tracking-[0.4em] font-black text-[#00ffcc] hover:text-white transition-colors"
            >
              Next <ChevronRight size={12} />
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
