'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'Disaster Tweet Classification',
    description: 'Engineered deep learning models using LSTM and fine-tuned BERT to categorize 10,000+ tweets. Achieved 82% accuracy with comprehensive NLP preprocessing pipeline using NLTK and TF-IDF.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'BERT', 'LSTM', 'NLP', 'NLTK'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Hyperspectral Image Classification',
    description: 'Created hybrid 2D CNN-SVM model achieving 91% accuracy across 16 classes on AVIRIS sensor data. Applied PCA for dimensionality reduction, accelerating model training by 3×.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'CNN', 'SVM', 'PCA', 'TensorFlow'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Plant Disease Detection System',
    description: 'Leveraged transfer learning with AlexNet and VGG19 architectures achieving 94% accuracy across 15 plant disease categories. Enhanced dataset of 20,579 images using data augmentation techniques.',
    image: '/api/placeholder/600/400',
    tags: ['PyTorch', 'Transfer Learning', 'CNN', 'Computer Vision'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Intraday Volatility & Risk Modeling',
    description: 'Developed a high-frequency quantitative finance risk forecasting framework using GARCH-based models with heavy-tailed distributions to improve VaR/CVaR tail-risk estimation. Conducted rigorous backtesting using exceedance analysis, QQ plots, and goodness-of-fit metrics.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'GARCH', 'Time-Series', 'Quantitative Finance', 'Risk Modeling'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Hybrid RDMA Transport for Mako',
    description: 'Built a hybrid RDMA-TCP transport for Mako Paxos replication, integrating two-sided RDMA into the RRR RPC framework with epoll-based completion handling. Achieved 3.1x throughput and 3.4x lower latency vs TCP on Alibaba Cloud eRDMA instances.',
    image: '/api/placeholder/600/400',
    tags: ['C++', 'RDMA', 'Distributed Systems', 'Paxos', 'Networking'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Raft-Based Replicated State Machine',
    description: 'Implemented a fault-tolerant Raft consensus protocol from scratch in C++, enabling leader election, log replication, and recovery across distributed nodes for a replicated key-value store. Ensured correctness under failures and network partitions.',
    image: '/api/placeholder/600/400',
    tags: ['C++', 'Raft', 'Distributed Systems', 'RPC', 'Consensus'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(118,185,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(118,185,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Featured <span className="text-nvidia-green">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-nvidia-green mx-auto"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative bg-muted border border-border rounded-2xl overflow-hidden hover:border-nvidia-green transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-64 bg-gradient-to-br from-nvidia-green/20 to-black overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-nvidia-green/20 rounded-full blur-3xl" />
                  </div>
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      opacity: hoveredIndex === index ? 0.9 : 0.7,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-8xl font-bold text-nvidia-green/30">
                      {index + 1}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-nvidia-green transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-nvidia-green/10 text-nvidia-green border border-nvidia-green/30 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  className="absolute inset-0 pointer-events-none border-2 border-nvidia-green rounded-2xl"
                  style={{
                    boxShadow: hoveredIndex === index ? '0 0 30px rgba(118, 185, 0, 0.3)' : 'none',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
