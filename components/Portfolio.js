"use client"

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Main Portfolio Component
const Portfolio = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const roles = ['AI/ML Engineer', 'QA Automation Expert', 'Data Scientist', 'Full Stack Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_eu8o7dg';     
    const templateID = 'template_g7ca6kv';    
    const publicKey = 'c_IwTjULID6R4j3ws';   
    
    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('✅ SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        console.log('❌ FAILED...', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "Java", level: 82 },
        { name: "SQL", level: 90 }
      ]
    },
    {
      category: "AI/ML & Data Science",
      skills: [
        { name: "TensorFlow", level: 92 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 95 },
        { name: "Pandas", level: 98 }
      ]
    },
    {
      category: "QA & Testing",
      skills: [
        { name: "Selenium", level: 93 },
        { name: "Pytest", level: 90 },
        { name: "API Testing", level: 87 },
        { name: "Test Automation", level: 92 }
      ]
    }
  ];

  const projects = [
    {
      title: "AI Job Verification System",
      description: "Machine learning system to detect fraudulent job postings with 95% accuracy using advanced NLP techniques.",
      tech: ["Python", "TensorFlow", "NLP", "Flask"],
      category: "AI/ML"
    },
    {
      title: "Banking QA Framework",
      description: "Comprehensive automated testing framework for financial applications with complete CI/CD integration.",
      tech: ["Python", "Selenium", "Pytest", "Docker"],
      category: "QA Testing"
    },
    {
      title: "Solar Prediction Model",
      description: "Advanced ML model for predicting solar radiation with 91% accuracy using meteorological data.",
      tech: ["Python", "TensorFlow", "Keras", "Pandas"],
      category: "AI/ML"
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }} suppressHydrationWarning={true}>
      
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        backgroundColor: 'white', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 'bold', color: '#2563eb' }}>
            My Portfolio
          </h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#home" style={{ textDecoration: 'none', color: '#666', fontWeight: '500' }}>Home</a>
            <a href="#about" style={{ textDecoration: 'none', color: '#666', fontWeight: '500' }}>About</a>
            <a href="#skills" style={{ textDecoration: 'none', color: '#666', fontWeight: '500' }}>Skills</a>
            <a href="#projects" style={{ textDecoration: 'none', color: '#666', fontWeight: '500' }}>Projects</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#666', fontWeight: '500' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 2rem'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ 
            width: '150px', 
            height: '150px', 
            borderRadius: '50%', 
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)', 
            margin: '0 auto 2rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '3rem',
            fontWeight: 'bold'
          }}>
            Patel 
          </div>
          
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>
            Hi, I&apos;m <span style={{ color: '#ffd93d' }}>Meshwa Patel</span>
          </h1>
          
          <h2 style={{ fontSize: '2rem', margin: '0 0 2rem 0', fontWeight: '300' }}>
            {roles[currentRole]}
          </h2>
          
          <p style={{ fontSize: '1.2rem', margin: '0 0 3rem 0', lineHeight: '1.8' }}>
            Passionate about leveraging AI and machine learning to solve complex problems. 
            Specialized in building robust testing frameworks and predictive models that drive innovation.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ 
              backgroundColor: '#ffd93d', 
              color: '#333', 
              padding: '1rem 2rem', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}>
              View My Work
            </a>
            <a href="#contact" style={{ 
              border: '2px solid white', 
              color: 'white', 
              padding: '1rem 2rem', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}>
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '5rem 2rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>About Me</h2>
            <div style={{ width: '100px', height: '4px', backgroundColor: '#2563eb', margin: '0 auto' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Professional Journey
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                With over 5 years of experience in AI/ML and quality assurance, I&apos;ve helped companies 
                build reliable, intelligent systems that solve real-world problems.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                My expertise spans machine learning model development, automated testing frameworks, 
                and data-driven solutions that make a real impact.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>5+</div>
                  <div style={{ fontWeight: '500' }}>Projects Completed</div>
                </div>
                <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>5+</div>
                  <div style={{ fontWeight: '500' }}>Years Experience</div>
                </div>
              </div>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem' }}>What I have been Doing</h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div style={{ fontSize: '2rem', marginRight: '1rem' }}>🤖</div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>AI/ML Development</h4>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>Built intelligent systems using TensorFlow, PyTorch, and scikit-learn</p>
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div style={{ fontSize: '2rem', marginRight: '1rem' }}>🧪</div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>QA Automation</h4>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>Created comprehensive testing frameworks with Selenium and Pytest</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '2rem', marginRight: '1rem' }}>📊</div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Data Analysis</h4>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>Extracted insights from complex datasets using Python and R</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '5rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>Skills & Expertise</h2>
            <div style={{ width: '100px', height: '4px', backgroundColor: '#2563eb', margin: '0 auto' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {skillsData.map((category, index) => (
              <div key={index} style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '2rem', 
                borderRadius: '15px', 
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)' 
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>
                  {category.category}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: '500' }}>{skill.name}</span>
                        <span style={{ fontWeight: 'bold', color: '#2563eb' }}>{skill.level}%</span>
                      </div>
                      <div style={{ 
                        width: '100%', 
                        height: '8px', 
                        backgroundColor: '#e5e7eb', 
                        borderRadius: '10px', 
                        overflow: 'hidden' 
                      }}>
                        <div style={{ 
                          width: `${skill.level}%`, 
                          height: '100%', 
                          background: 'linear-gradient(90deg, #2563eb, #3b82f6)', 
                          borderRadius: '10px' 
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '5rem 2rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>Featured Projects</h2>
            <div style={{ width: '100px', height: '4px', backgroundColor: '#2563eb', margin: '0 auto' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {projects.map((project, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white', 
                borderRadius: '15px', 
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ 
                  height: '200px', 
                  background: index % 2 === 0 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                    : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '4rem'
                }}>
                  {project.category === "AI/ML" ? "🤖" : "🧪"}
                </div>
                
                <div style={{ padding: '2rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{ 
                      backgroundColor: '#2563eb', 
                      color: 'white', 
                      padding: '0.5rem 1rem', 
                      borderRadius: '20px', 
                      fontSize: '0.9rem', 
                      fontWeight: '500' 
                    }}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    {project.title}
                  </h3>
                  
                  <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          style={{ 
                            backgroundColor: '#f3f4f6', 
                            color: '#374151', 
                            padding: '0.25rem 0.75rem', 
                            borderRadius: '15px', 
                            fontSize: '0.85rem',
                            fontWeight: '500'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button 
                      style={{ 
                        flex: 1, 
                        backgroundColor: '#374151', 
                        color: 'white', 
                        border: 'none', 
                        padding: '0.75rem', 
                        borderRadius: '8px', 
                        fontWeight: '500',
                        cursor: 'pointer'
                      }} 
                      suppressHydrationWarning={true}
                    >
                      GitHub
                    </button>
                    <button 
                      style={{ 
                        flex: 1, 
                        backgroundColor: '#2563eb', 
                        color: 'white', 
                        border: 'none', 
                        padding: '0.75rem', 
                        borderRadius: '8px', 
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                      suppressHydrationWarning={true}
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '5rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>Get In Touch</h2>
            <div style={{ width: '100px', height: '4px', backgroundColor: '#2563eb', margin: '0 auto' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            {/* Contact Info */}
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                Let&apos;s Work Together
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '3rem', lineHeight: '1.8' }}>
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I&apos;ll get back to you!
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ 
                    backgroundColor: '#2563eb', 
                    padding: '1rem', 
                    borderRadius: '10px', 
                    marginRight: '1rem',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    📧
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Email</h4>
                    <p style={{ color: '#666' }}>meshwapatel10@gmail.com</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ 
                    backgroundColor: '#2563eb', 
                    padding: '1rem', 
                    borderRadius: '10px', 
                    marginRight: '1rem',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    📍
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Location</h4>
                    <p style={{ color: '#666' }}>Ontario, Canada</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '2rem', 
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }} suppressHydrationWarning={true}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '2px solid #e5e7eb', 
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                      placeholder="Your full name"
                      suppressHydrationWarning={true}
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '2px solid #e5e7eb', 
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                      placeholder="your.email@example.com"
                      suppressHydrationWarning={true}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '2px solid #e5e7eb', 
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                    placeholder="What&apos;s this about?"
                    suppressHydrationWarning={true}
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '2px solid #e5e7eb', 
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    placeholder="Tell me about your project or just say hello!"
                    suppressHydrationWarning={true}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    background: isSubmitting 
                      ? 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)' 
                      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                    color: 'white', 
                    border: 'none', 
                    padding: '1rem', 
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  suppressHydrationWarning={true}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid #ffffff',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {submitStatus && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    backgroundColor: submitStatus === 'success' ? '#d1fae5' : '#fee2e2',
                    color: submitStatus === 'success' ? '#065f46' : '#991b1b',
                    border: `2px solid ${submitStatus === 'success' ? '#10b981' : '#ef4444'}`
                  }}>
                    {submitStatus === 'success' ? (
                      <>✅ Message sent successfully! I&apos;ll get back to you soon.</>
                    ) : (
                      <>❌ Failed to send message. Please check your EmailJS setup or try again.</>
                    )}
                  </div>
                )}

                <style jsx>{`
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                `}</style>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;