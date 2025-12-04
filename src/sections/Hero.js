'use client';

// Import motion library for animations and icons
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

// Hero section - Main landing page component
export default function Hero() {
  // Function to scroll to contact section
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to projects section
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Main hero section container with full viewport height
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        // Black to dark gray gradient background
        background: 'linear-gradient(to bottom, #000000 0%, #1a1a1a 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {/* First animated gradient blob - top right */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        {/* Second animated gradient blob - bottom left */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.4,
        }}
      />

      {/* Main content container with higher z-index */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem 1.5rem',
          textAlign: 'center',
        }}
      >
        {/* Badge with icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            marginBottom: '2rem',
          }}
        >
          <Sparkles size={16} style={{ color: '#ffffff' }} />
          <span
            style={{
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '500',
            }}
          >
            Innovative Digital Solutions
          </span>
        </motion.div>

        {/* Main Heading with animated gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            fontFamily: 'Horizon, var(--font-montserrat), sans-serif',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            background: 'linear-gradient(90deg, #ffffff 0%, #888888 50%, #ffffff 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shine 3s linear infinite',
          }}
        >
          HORIZON
        </motion.h1>

        {/* Subtitle with emphasis */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '1rem',
            fontWeight: '300',
            letterSpacing: '2px',
          }}
        >
          Digital Excellence Redefined
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: 'rgba(255, 255, 255, 0.5)',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: '1.8',
          }}
        >
          We are a cutting-edge development agency specializing in creating
          extraordinary digital experiences that push the boundaries of innovation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={scrollToContact}
            style={{
              padding: '1.25rem 2.5rem',
              background: '#ffffff',
              color: '#000000',
              border: '2px solid #ffffff',
              borderRadius: '0',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.6)';
              e.target.style.background = 'transparent';
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
              e.target.style.background = '#ffffff';
              e.target.style.color = '#000000';
            }}
          >
            Get Started
            <ArrowRight size={20} />
          </button>

          <button
            onClick={scrollToProjects}
            style={{
              padding: '1.25rem 2.5rem',
              background: 'transparent',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '0',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.borderColor = '#ffffff';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            View Our Work
          </button>
        </motion.div>

      </div>

      {/* Floating Elements - Behind content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            width: '80px',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            transform: 'rotate(45deg)',
          }}
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          style={{
            position: 'absolute',
            top: '60%',
            right: '8%',
            width: '60px',
            height: '60px',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
          }}
        />
      </div>
    </section>
  );
}

{/* Add keyframe animation styles */}
<style jsx global>{`
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    }
    50% {
      box-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
    }
  }
`}</style>
