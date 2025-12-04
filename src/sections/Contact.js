'use client';

// Import necessary dependencies for state management, animations, and icons
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

// Contact section - Contact form and information
export default function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Contact information data
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@agency.com',
      link: 'mailto:hello@agency.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, link: '#', label: 'GitHub' },
    { icon: Linkedin, link: '#', label: 'LinkedIn' },
    { icon: Twitter, link: '#', label: 'Twitter' },
  ];

  return (
    // Contact section with form and contact information
    <section
      id="contact"
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
            Get In Touch
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
            Let's Build Your Future Together
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
            Ready to start your next project? We're here to help bring your vision to life.
            Drop us a message and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              gridColumn: 'span 2',
            }}
            className="contact-form-column"
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '2.5rem',
              }}
            >
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#ffffff';
                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#ffffff';
                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label
                    htmlFor="subject"
                    style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#ffffff';
                      e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#ffffff';
                      e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '1rem 2rem',
                    background: '#ffffff',
                    color: '#000000',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 15px 40px rgba(255, 255, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
                  }}
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      background: '#ffffff',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <Icon size={24} style={{ color: '#000000' }} />
                  </div>
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {info.title}
                  </h4>
                  <a
                    href={info.link}
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#fff',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#fff';
                    }}
                  >
                    {info.value}
                  </a>
                </div>
              );
            })}

            {/* Social Links */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '1.5rem',
              }}
            >
              <h4
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '1rem',
                }}
              >
                Follow Us
              </h4>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                }}
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      aria-label={social.label}
                      style={{
                        width: '45px',
                        height: '45px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255, 255, 255, 0.7)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.color = '#000000';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.95rem',
            }}
          >
            © {new Date().getFullYear()} AGENCY. All rights reserved. Built with passion and innovation.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-form-column {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
