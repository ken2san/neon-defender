import { memo } from 'react';
import { motion } from 'motion/react';

type StageTitleOverlayProps = {
  wave: number;
  sectorName: string;
};

const getTitleText = (wave: number) => {
  if (wave === 6 || wave === 10) {
    return 'BOSS BATTLE';
  }
  const stage = Math.min(5, Math.ceil(wave / 2));
  const sector = wave % 2 === 0 ? 2 : 1;
  return `STAGE ${stage}-${sector}`;
};

const StageTitleOverlay = memo(function StageTitleOverlay({ wave, sectorName }: StageTitleOverlayProps) {
  const titleText = getTitleText(wave);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0, scale: 1.2, rotateX: -45 }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-50"
    >
      <div className="text-center relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -top-6 left-0 h-0.5 bg-linear-to-r from-transparent via-[#00ffcc] to-transparent"
        />
        <div className="relative">
          <h2 className={`text-5xl md:text-7xl font-black tracking-[0.3em] italic drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] ${(wave === 6 || wave === 10) ? 'text-[#ff3366]' : 'text-white'}`}>
            {titleText}
          </h2>
          <p className="text-[#00ffcc] text-xs mt-2 tracking-[0.5em] font-bold uppercase">{sectorName}</p>
          <motion.h2
            animate={{ x: [-2, 2, -2], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 0.1, repeat: Infinity }}
            className="absolute inset-0 text-5xl md:text-7xl font-black tracking-[0.3em] italic text-[#00ffcc] -z-10 translate-x-1"
          >
            {titleText}
          </motion.h2>
          <motion.h2
            animate={{ x: [2, -2, 2], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 0.1, repeat: Infinity }}
            className="absolute inset-0 text-5xl md:text-7xl font-black tracking-[0.3em] italic text-[#ff3366] -z-10 -translate-x-1"
          >
            {titleText}
          </motion.h2>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -bottom-6 left-0 h-0.5 bg-linear-to-r from-transparent via-[#ff3366] to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold">System Status: Optimal</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                className="w-1 h-1 bg-[#00ffcc]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default StageTitleOverlay;
