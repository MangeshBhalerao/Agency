'use client';

// Import motion library for animations and icons
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, LineChart, Shield, Headphones } from 'lucide-react';

// Services section - Showcases what the agency offers
export default function Services() {
  // Services data array with details for each service
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with the latest technologies for optimal performance and scalability.',
      features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'API Development'],
    },
    {
      icon: Palette,
      title: 'UX/UI Design',
      description: 'Beautiful, intuitive interfaces that create memorable user experiences and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    },
    {
      icon: Rocket,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies that align with your business goals and maximize ROI.',
      features: ['Market Analysis', 'Growth Planning', 'Brand Positioning', 'Conversion Optimization'],
    },
    {
      icon: LineChart,
      title: 'Performance Optimization',
      description: 'Speed and efficiency improvements that enhance user experience and search rankings.',
      features: ['Speed Optimization', 'SEO Enhancement', 'Core Web Vitals', 'Analytics Setup'],
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Robust security measures and ongoing support to keep your digital assets safe and updated.',
      features: ['Security Audits', 'Regular Updates', 'Backup Solutions', 'Monitoring'],
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your business runs smoothly without interruption.',
      features: ['Live Chat', 'Emergency Response', 'Technical Consulting', 'Training'],
    },
  ];

  return (
    // Services section showcasing what we offer
    <section
      id="services"
      style={{
        minHeight: '100vh',
        position: 'relative',
        // Dark gray to black gradient background
        background: 'linear-gradient(to bottom, #1a1a1a 0%, #000000 100%)',
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
            Our Services
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
            What We Do Best
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
            Comprehensive digital services designed to elevate your business and
            deliver exceptional results in the modern digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
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
                  borderRadius: '24px',
                  padding: '2.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Background Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                  className="service-gradient"
                />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      background: '#ffffff',
                      borderRadius: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <Icon size={32} style={{ color: '#000000' }} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      color: '#fff',
                      marginBottom: '1rem',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '1rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      lineHeight: '1.7',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '0.95rem',
                          color: 'rgba(255, 255, 255, 0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            background: '#ffffff',
                            borderRadius: '50%',
                            flexShrink: 0,
                          }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            marginTop: '6rem',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            What Our Clients Say
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                quote: "Working with this agency transformed our digital presence. Their attention to detail and innovative approach exceeded all expectations.",
                author: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
              },
              {
                quote: "The team delivered a stunning website that not only looks amazing but performs exceptionally well. Highly recommended!",
                author: "Michael Chen",
                role: "Founder, DesignHub",
              },
              {
                quote: "Professional, creative, and results-driven. They turned our vision into reality and helped us achieve our business goals.",
                author: "Emily Davis",
                role: "Marketing Director, GrowthCo",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2rem',
                }}
              >
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.8',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic',
                  }}
                >
                  "{testimonial.quote}"
                </p>
                <div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#fff',
                    }}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        div:hover .service-gradient {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
