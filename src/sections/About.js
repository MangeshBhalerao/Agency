'use client';

// Import motion library for scroll animations and icons
import { motion } from 'framer-motion';
import { Target, Zap, Users, Award } from 'lucide-react';

// About section - Showcases agency features and stats
export default function About() {
  // Feature cards data with icons, titles, and descriptions
  const features = [
    {
      icon: Target,
      title: 'Precision & Innovation',
      description: 'We combine cutting-edge technology with strategic thinking to deliver solutions that exceed expectations.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Our streamlined development process ensures rapid delivery without compromising on quality.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your vision is our mission. We collaborate closely to bring your ideas to life.',
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized for excellence in design, development, and digital innovation.',
    },
  ];

  return (
    // About section with full height and centered content
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        // Dark gray to black gradient background (inverted from hero)
        background: 'linear-gradient(to bottom, #1a1a1a 0%, #000000 100%)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
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
            marginBottom: '4rem',
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
            About Us
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
            Building Tomorrow&apos;s Digital Experiences
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
            We&apos;re not just another development agency. We&apos;re a team of passionate innovators
            who transform ambitious ideas into exceptional digital realities that drive real results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: '4rem',
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 255, 255, 0.9)';
                }}
                onMouseLeave={(e) => {
                  
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: '#ffffff',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  <Icon size={28} style={{ color: '#000000' }} />
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#fff',
                    marginBottom: '1rem',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    lineHeight: '1.7',
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
          }}
        >
          {[
            { number: '150+', label: 'Projects Completed' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Happy Clients' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontWeight: '500',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
