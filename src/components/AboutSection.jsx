import { Briefcase, Code, User } from "lucide-react";
import { AnimatedCard } from "./AnimatedCard";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedCard direction="left" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
              </h3>

              <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
              </p>

              <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <motion.a 
                  href="#contact" 
                  className="cosmic-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                {" "}
                Get In Touch
                </motion.a>

     
              </div>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 gap-6">
            <AnimatedCard direction="right" delay={0.4}>
              <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
              </div>
            </AnimatedCard>
            <AnimatedCard direction="right" delay={0.6}>
              <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
              </div>
            </AnimatedCard>
            <AnimatedCard direction="right" delay={0.8}>
              <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};
