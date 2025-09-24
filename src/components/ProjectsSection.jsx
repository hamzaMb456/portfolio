import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { AnimatedCard } from "./AnimatedCard";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "food delivery application",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["figma"],
    demoUrl: "https://www.figma.com/proto/NRZEPa5WQNvmintUlq4aza/Untitled?node-id=126-504&p=f&t=iZJDug7SGV4rZ960-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=126%3A504",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "firebase", "react.js","figma"],
    demoUrl: "https://www.figma.com/proto/MEta2aFBIfgBaDY75J3Eoa/mysaiph?node-id=36-1368&p=f&t=RLmoS3hkfvUb0Sko-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    githubUrl: "https://github.com/hamzAmbarki2/mysaiph",
  },
  {
    id: 3,
    title: "Academic project management Platform",
    description:
      "Full-featured Academic project management platform with user authentication and advanced features for both students and teachers  .",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "mongodb"],
    demoUrl: "#",
    githubUrl: "https://github.com/hamzAmbarki2/forkina",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </motion.h2>

        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <AnimatedCard
              key={key}
              delay={key * 0.2}
              direction="up"
            >
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                </div>

                <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                     key={tag}
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/hamzAmbarki2/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check My Github <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
