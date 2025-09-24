import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { ParallaxSection } from "./ParallaxSection";
import Orb from './Orb';

export const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Orb Background */}
      <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
        <Orb 
          hue={270} 
          hoverIntensity={0.3} 
          rotateOnHover={true} 
          forceHoverState={false}
        />
      </div>

      <ParallaxSection className="container max-w-4xl mx-auto text-center z-10" speed={0.3}>
        <div className="space-y-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi, I'm{" "}
            </motion.span>
            <motion.span 
              className="text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {" "}
              HAMZA
            </motion.span>
            <motion.span 
              className="text-gradient ml-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {" "}
              MBARKI
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </motion.p>

          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.a 
              href="#projects" 
              className="cosmic-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </ParallaxSection>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </motion.section>
  );
};
