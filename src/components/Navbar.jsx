'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  // Track scroll position to change navbar appearance
  const [isScrolled, setIsScrolled] = useState(false);
  // Track mobile menu open/close state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Menu items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  // Smooth scroll to section and close mobile menu
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Main navbar container */}
      <div
        style={{
          background: isScrolled
            ? 'rgba(10, 10, 15, 0.7)'
            : 'rgba(10, 10, 15, 0.3)',
          backdropFilter: 'blur(20px)',
          borderBottom: isScrolled
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: isScrolled ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '6px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo - Always visible */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => scrollToSection('#home')}
          >
            <Image 
              src="/Logo.svg" 
              alt="Logo" 
              width={80} 
              height={50}
              style={{ objectFit: 'contain' }}
              priority
            />
          </motion.div>

          {/* Desktop Menu - Only visible on large screens */}
          <div 
            className="hidden md:flex"
            style={{ 
              gap: '32px', 
              alignItems: 'center' 
            }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px',
                  fontWeight: '500',
                  position: 'relative',
                  padding: '8px 0',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                }}
              >
                {item.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => scrollToSection('#contact')}
              style={{
                padding: '12px 24px',
                background: '#ffffff',
                color: '#000000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Hamburger Button - Only visible on small screens */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 100,
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '100px',
              borderRadius: '8px',
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(10, 10, 15, 0.9)',
              backdropFilter: 'blur(20px)',
              zIndex: 40,
              overflowY: 'auto',
            }}
          >
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '100%' }}>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '16px',
                    fontWeight: '500',
                    textAlign: 'left',
                    padding: '12px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    borderRadius: '8px',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                style={{
                  padding: '12px 24px',
                  background: '#ffffff',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '8px',
                }}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
