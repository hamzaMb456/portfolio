import { motion } from 'framer-motion';
import { Code, Palette, Zap, Globe, Cpu, Rocket } from 'lucide-react';

const floatingIcons = [
  { Icon: Code, color: 'text-blue-400', delay: 0 },
  { Icon: Palette, color: 'text-pink-400', delay: 0.5 },
  { Icon: Zap, color: 'text-yellow-400', delay: 1 },
  { Icon: Globe, color: 'text-green-400', delay: 1.5 },
  { Icon: Cpu, color: 'text-purple-400', delay: 2 },
  { Icon: Rocket, color: 'text-red-400', delay: 2.5 }
];

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {floatingIcons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-20`}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            y: [null, -20, 20, -20],
            x: [null, 10, -10, 10],
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index * 10)}%`
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}
    </div>
  );
};