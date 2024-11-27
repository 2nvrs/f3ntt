import { motion } from "framer-motion";
import Cursor from "../components/Cursor";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Cursor />
      <nav className="fixed w-full z-50 px-6 py-4 backdrop-blur-md bg-secondary/80 border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gradient">f3ntt</a>
          <div className="space-x-8">
            <a href="#about" className="nav-link">about</a>
            <a href="#projects" className="nav-link">projects</a>
            <a href="#contact" className="nav-link">contact</a>
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
            f3ntt
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            i like to make stuff ig
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
              im a web dev who has experience in html, js, python, and lua
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["javascript", "html", "lua", "python"].map((skill) => (
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
                <h3 className="text-xl font-bold mb-2">cnvrs browser {project}</h3>
                <p className="text-white/80">i am one of the developers working on the development of cnvrs browser</p>
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
            <h2 className="text-4xl font-bold mb-8 text-gradient">contact f3ntt</h2>
            <p className="text-lg text-white/80 mb-8">
              dm me on discord for collabs
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="mailto:cnvrs"
                className="inline-block bg-white text-black px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                discord
              </a>
              <a
                href="dsc.gg/f3ntt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 transition-colors"
              >
                <img 
                  src="/lovable-uploads/c62b116c-b8f3-442d-8c83-3cc4d805e582.png" 
                  alt="discord"
                  className="w-8 h-6"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
