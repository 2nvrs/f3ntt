import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed w-full z-50 px-6 py-4 backdrop-blur-md bg-secondary/80 border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gradient">Portfolio</a>
          <div className="space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 text-gradient">
            Creative Developer
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Crafting beautiful digital experiences with modern web technologies
          </p>
        </motion.div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="text-4xl font-bold mb-8 text-gradient">About Me</h2>
            <p className="text-lg text-white/80 mb-8">
              I'm a passionate web developer focused on creating intuitive and dynamic user experiences.
              With expertise in modern web technologies, I bring ideas to life through clean code and
              creative solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["React", "TypeScript", "Node.js", "Tailwind CSS"].map((skill) => (
                <div key={skill} className="glass-card p-4 text-center hover:scale-105 transition-transform">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-gradient">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:scale-[1.02] transition-transform"
              >
                <div className="aspect-video bg-black/50 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                <p className="text-white/80">A brief description of the project and the technologies used.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-gradient">Get In Touch</h2>
            <p className="text-lg text-white/80 mb-8">
              Interested in working together? Let's connect!
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block bg-white text-black px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Say Hello
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;