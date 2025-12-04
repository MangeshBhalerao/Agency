'use client';

// Import necessary dependencies for state management, animations, and icons
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

// Projects section - Displays filterable portfolio
export default function Projects() {
  // State to track currently active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Array of filter categories
  const filters = ['All', 'Web Development', 'UX/UI Design', 'E-Commerce', 'SaaS'];

  // Projects data array with details for each project
  const projects = [
    {
      id: 1,
      title: 'TechCorp Dashboard',
      description: 'A modern analytics dashboard with real-time data visualization and advanced reporting features.',
      category: 'SaaS',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      live: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'LuxeShop',
      description: 'Premium e-commerce platform with seamless checkout and inventory management.',
      category: 'E-Commerce',
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      live: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'DesignStudio Portfolio',
      description: 'Minimalist portfolio showcasing creative work with smooth animations.',
      category: 'UX/UI Design',
      tech: ['React', 'Framer Motion', 'Tailwind'],
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      live: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'HealthTrack App',
      description: 'Health monitoring platform with AI-powered insights and personalized recommendations.',
      category: 'SaaS',
      tech: ['Vue.js', 'Python', 'TensorFlow'],
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      live: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'CryptoTrade Platform',
      description: 'Cryptocurrency trading platform with real-time market data and secure transactions.',
      category: 'Web Development',
      tech: ['React', 'Web3.js', 'Solidity'],
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      live: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'FoodHub Delivery',
      description: 'Food delivery app with live tracking and seamless ordering experience.',
      category: 'E-Commerce',
      tech: ['React Native', 'Firebase', 'Maps API'],
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      live: '#',
      github: '#',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    // Projects section with filterable portfolio grid
    <section
      id="projects"
      style={{
        minHeight: '100vh',
        position: 'relative',
        // Black to dark gray gradient background
        background: 'linear-gradient(to bottom, #000000 0%, #1a1a1a 100%)',
        padding: '6rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.25rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50px',
              color: '#ffffff',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Our Work
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: '#fff',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
            }}
          >
            Featured Projects
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.8',
            }}
          >
            Explore our portfolio of innovative digital solutions that have helped
            businesses transform and thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '0.75rem 1.5rem',
                background:
                  activeFilter === filter
                    ? '#ffffff'
                    : 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border:
                  activeFilter === filter
                    ? 'none'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50px',
                color: activeFilter === filter ? '#000000' : '#fff',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Project Image */}
                <div
                  style={{
                    height: '200px',
                    background: project.image,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '3rem',
                      fontWeight: '800',
                      color: 'rgba(255, 255, 255, 0.9)',
                      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {project.title.split(' ')[0]}
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#fff',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '1rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '0.35rem 0.75rem',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '6px',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                    }}
                  >
                    <a
                      href={project.live}
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        background: '#ffffff',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        textDecoration: 'none',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      style={{
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '10px',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
