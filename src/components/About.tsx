'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'Java / Spring WebFlux', level: 95 },
  { name: 'React / Node.js', level: 90 },
  { name: 'Python / ML & AI', level: 90 },
  { name: 'GraphQL', level: 85 },
  { name: 'Kafka', level: 85 },
  { name: 'PostgreSQL / MySQL', level: 85 },
  { name: 'Kubernetes / Docker', level: 80 },
];

const technologies = [
  'Java', 'Spring WebFlux', 'React', 'Node.js', 'GraphQL',
  'Python', 'TensorFlow', 'PyTorch', 'BERT', 'NLP',
  'Kafka', 'Kubernetes', 'PostgreSQL', 'MySQL', 'Docker',
  'TypeScript', 'REST APIs', 'Microservices', 'Git', 'Linux',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-black via-muted to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              About <span className="text-nvidia-green">Me</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-nvidia-green mx-auto"
            />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a Software Development Engineer with 3+ years at Goldman Sachs, where I gained end-to-end
                exposure to full-stack engineering. I&apos;ve built secure, scalable microservices handling 500+
                concurrent operations, React frontends that reduced onboarding time by 75%, and Kafka-based
                pipelines processing millions of records.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my MS in Computer Science at Stony Brook University, I combine enterprise
                software engineering with academic research in AI/ML. My background from IIT Kharagpur includes
                deep learning projects in NLP and computer vision using TensorFlow, PyTorch, and BERT.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/likhithashree01-beep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nvidia-green hover:text-nvidia-green-light transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/likhitha-shree-bethi-a48927156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nvidia-green hover:text-nvidia-green-light transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:likhithashree01@gmail.com"
                  className="text-nvidia-green hover:text-nvidia-green-light transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Skills Bars */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-nvidia-green mb-6">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-nvidia-green">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-nvidia-green to-nvidia-green-light"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1 + index * 0.05, duration: 0.4 }}
                  className="px-6 py-3 bg-muted border border-border rounded-lg hover:border-nvidia-green hover:bg-nvidia-green/10 transition-all duration-300 cursor-default"
                >
                  <span className="text-gray-300 font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
