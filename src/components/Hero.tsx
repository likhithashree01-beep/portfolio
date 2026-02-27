'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(118,185,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(118,185,0,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nvidia-green/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-nvidia-green-light to-white bg-clip-text text-transparent">
              Likhitha Shree Bethi
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"
          >
            Full Stack Software Engineer | AI/ML Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            <span className="px-4 py-2 bg-nvidia-green/15 border border-nvidia-green/40 text-nvidia-green font-semibold rounded-full text-sm md:text-base">
              Goldman Sachs &middot; 3+ Years
            </span>
            <span className="px-4 py-2 bg-nvidia-green/15 border border-nvidia-green/40 text-nvidia-green font-semibold rounded-full text-sm md:text-base">
              IIT Kharagpur Alumna
            </span>
            <span className="px-4 py-2 bg-nvidia-green/15 border border-nvidia-green/40 text-nvidia-green font-semibold rounded-full text-sm md:text-base">
              MS CS @ Stony Brook
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Built scalable microservices and React frontends at Goldman Sachs. Passionate about AI/ML and high-performance distributed systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-nvidia-green text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(118,185,0,0.5)]"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-nvidia-green-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-nvidia-green text-nvidia-green font-semibold rounded-lg transition-all duration-300 hover:bg-nvidia-green hover:text-black hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-nvidia-green/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-nvidia-green rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
