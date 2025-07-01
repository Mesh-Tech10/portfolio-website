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
    },
    {
      title: "E-commerce Testing Suite",
      description: "Complete automated testing solution for online shopping platforms with performance monitoring and security testing.",
      tech: ["JavaScript", "Cypress", "Jest", "Node.js"],
      category: "QA Testing"
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#1f2937' }} suppressHydrationWarning={true}>
      
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.1)', 
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 'bold', color: '#6366f1' }}>
            My Portfolio
          </h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#home" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500', transition: 'color 0.3s' }}>Home</a>
            <a href="#about" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>About</a>
            <a href="#experience" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Experience</a>
            <a href="#education" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Education</a>
            <a href="#skills" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Skills</a>
            <a href="#projects" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Projects</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#1f2937',
        textAlign: 'center',
        padding: '0 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Technical Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.4'%3E%3Ccircle cx='5' cy='5' r='2'/%3E%3Ccircle cx='30' cy='5' r='2'/%3E%3Ccircle cx='55' cy='5' r='2'/%3E%3Ccircle cx='5' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='55' cy='30' r='2'/%3E%3Ccircle cx='5' cy='55' r='2'/%3E%3Ccircle cx='30' cy='55' r='2'/%3E%3Ccircle cx='55' cy='55' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 1
        }}></div>

        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}>
          {/* Profile section with tech elements */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', 
              margin: '0 auto 2rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'white',
              boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
              position: 'relative'
            }}>
              YN
              {/* Tech indicator badges */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                backgroundColor: '#10b981',
                color: 'white',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
              }}>
                &lt;/&gt;
              </div>
            </div>
          </div>
          
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>
            Hi, I&apos;m <span style={{ color: '#ffd93d' }}>Your Name</span>
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

      {/* Experience Section - NEW */}
      <section id="experience" style={{ padding: '5rem 2rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 1rem 0', color: '#1f2937' }}>Work Experience</h2>
            <div style={{ width: '100px', height: '4px', backgroundColor: '#6366f1', margin: '0 auto' }}></div>
          </div>
          
          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: '#6366f1',
              transform: 'translateX(-50%)'
            }}></div>
            
            {/* Experience items */}
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ 
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                marginLeft: 'auto',
                marginRight: '50%',
                width: '45%',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  right: '-20px',
                  top: '30px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#6366f1',
                  borderRadius: '50%',
                  border: '4px solid white'
                }}></div>
                
                <div style={{ color: '#6366f1', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  2022 - Present
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>
                  Senior QA Engineer
                </h3>
                <div style={{ color: '#6366f1', marginBottom: '1rem', fontWeight: '500' }}>
                  Tech Solutions Inc.
                </div>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  • Led automation testing for financial applications serving 1M+ users<br/>
                  • Implemented CI/CD pipelines reducing deployment time by 60%<br/>
                  • Mentored 3 junior QA engineers and established testing best practices<br/>
                  • Developed AI-powered test case generation tool improving coverage by 40%
                </p>
              </div>
            </div>
            
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ 
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                marginRight: 'auto',
                marginLeft: '50%',
                width: '45%',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '-20px',
                  top: '30px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  border: '4px solid white'
                }}></div>
                
                <div style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  2020 - 2022
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>
                  ML Engineer
                </h3>
                <div style={{ color: '#10b981', marginBottom: '1rem', fontWeight: '500' }}>
                  Data Innovations LLC
                </div>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  • Built predictive models improving business decisions by 35%<br/>
                  • Developed NLP solutions for document processing automation<br/>
                  • Collaborated with cross-functional teams on AI product features<br/>
                  • Published 2 research papers on machine learning applications
                </p>
              </div>
            </div>
            
            <div>
              <div style={{ 
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                marginLeft: 'auto',
                marginRight: '50%',
                width: '45%',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  right: '-20px',
                  top: '30px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#f59e0b',
                  borderRadius: '50%',
                  border: '4px solid white'
                }}></div>
                
                <div style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  2018 - 2020
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>
                  Junior Software Tester
                </h3>
                <div style={{ color: '#f59e0b', marginBottom: '1rem', fontWeight: '500' }}>
                  StartUp Solutions
                </div>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  • Performed manual and automated testing for web applications<br/>
                  • Created comprehensive test documentation and reports<br/>
                  • Identified and tracked 500+ bugs improving product quality<br/>
                  • Learned automation tools and scripting languages
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - NEW */}
      <section id="education" style={{ padding: '5rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 1rem 0', color: '#1f2937' }}>Education & Certifications</h2>
            <div style={{ width: '100px', height: '4px', backgroundColor: '#6366f1', margin: '0 auto' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {/* Education */}
            <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.5rem', marginRight: '1rem' }}>🎓</div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                    Master of Science
                  </h3>
                  <p style={{ color: '#6366f1', fontWeight: '500', margin: '0.25rem 0' }}>
                    Computer Science & AI
                  </p>
                </div>
              </div>
              <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
                <strong>University of Technology</strong> • 2016-2018
              </p>
              <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                GPA: 3.8/4.0 • Focus: Machine Learning, Data Science, Software Engineering
              </p>
            </div>
            
            {/* Certifications */}
            <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', marginRight: '1rem' }}>📜</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                  Certifications
                </h3>
              </div>
              
              <div style={{ space: '1rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontWeight: 'bold', color: '#1f2937' }}>AWS Certified Machine Learning</div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Amazon Web Services • 2023</div>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontWeight: 'bold', color: '#1f2937' }}>TensorFlow Developer Certificate</div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Google • 2023</div>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontWeight: 'bold', color: '#1f2937' }}>ISTQB Certified Tester</div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>ISTQB • 2022</div>
                </div>
                
                <div>
                  <div style={{ fontWeight: 'bold', color: '#1f2937' }}>Scrum Master Certified</div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Scrum Alliance • 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>50+</div>
                  <div style={{ fontWeight: '500' }}>Projects Completed</div>
                </div>
                <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>5+</div>
                  <div style={{ fontWeight: '500' }}>Years Experience</div>
                </div>
              </div>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem' }}>What I Do</h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div style={{ fontSize: '2rem', marginRight: '1rem' }}>🤖</div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>AI/ML Development</h4>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>Building intelligent systems using TensorFlow, PyTorch, and scikit-learn</p>
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div style={{ fontSize: '2rem', marginRight: '1rem' }}>⚗️</div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>QA Automation</h4>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>Creating comprehensive testing frameworks with Selenium and Pytest</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '2rem', marginRight: '1rem' }}>📈</div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Data Analysis</h4>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>Extracting insights from complex datasets using Python and R</p>
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

      {/* Featured Projects Section - REDESIGNED */}
      <section id="projects" style={{ padding: '5rem 2rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: '0 0 1rem 0', color: '#1f2937' }}>Featured Projects</h2>
            <p style={{ color: '#6b7280', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Explore some of my recent work in AI/ML and QA automation
            </p>
            <div style={{ width: '100px', height: '4px', background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', margin: '0 auto' }}></div>
          </div>
          
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {projects.map((project, index) => (
              <div key={index} style={{ 
                background: 'white', 
                borderRadius: '20px', 
                padding: '2rem',
                position: 'relative',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                {/* Floating tech indicator */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  width: '60px',
                  height: '60px',
                  background: project.category === "AI/ML" 
                    ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                    : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                }}>
                  {project.category === "AI/ML" ? "🧠" : "🔬"}
                </div>

                {/* Project number */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '2rem',
                  backgroundColor: '#fbbf24',
                  color: '#1f2937',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)'
                }}>
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Category badge */}
                <div style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
                  <span style={{ 
                    background: project.category === "AI/ML"
                      ? 'rgba(99, 102, 241, 0.1)'
                      : 'rgba(16, 185, 129, 0.1)',
                    color: project.category === "AI/ML" ? '#6366f1' : '#10b981',
                    padding: '0.5rem 1rem', 
                    borderRadius: '25px', 
                    fontSize: '0.85rem', 
                    fontWeight: '600',
                    border: `1px solid ${project.category === "AI/ML" ? '#6366f1' : '#10b981'}`
                  }}>
                    {project.category}
                  </span>
                </div>
                
                <h3 style={{ 
                  fontSize: '1.6rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem',
                  color: '#1f2937',
                  lineHeight: '1.3'
                }}>
                  {project.title}
                </h3>
                
                <p style={{ 
                  color: '#6b7280', 
                  marginBottom: '2rem', 
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {project.description}
                </p>
                
                {/* Tech stack with icons */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <h4 style={{ color: '#374151', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem' }}>
                    Tech Stack
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                    {project.tech.map((tech, idx) => (
                      <div
                        key={idx}
                        style={{ 
                          backgroundColor: '#f8fafc', 
                          color: '#374151', 
                          padding: '0.75rem 1rem', 
                          borderRadius: '10px', 
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          textAlign: 'center',
                          border: '1px solid #e5e7eb',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button 
                    style={{ 
                      flex: 1, 
                      background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                      color: 'white', 
                      border: '1px solid #9ca3af', 
                      padding: '0.875rem 1rem', 
                      borderRadius: '12px', 
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }} 
                    suppressHydrationWarning={true}
                  >
                    <span>📁</span> Code
                  </button>
                  <button 
                    style={{ 
                      flex: 1, 
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      color: 'white', 
                      border: 'none', 
                      padding: '0.875rem 1rem', 
                      borderRadius: '12px', 
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                    suppressHydrationWarning={true}
                  >
                    <span>🚀</span> Demo
                  </button>
                </div>

                {/* Subtle background pattern */}
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  width: '120px',
                  height: '120px',
                  opacity: 0.05,
                  background: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Cpath d='M20 20c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16z'/%3E%3C/g%3E%3C/svg%3E")`,
                  pointerEvents: 'none'
                }}></div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Want to see more of my work?
            </p>
            <button 
              type="button"
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                color: '#1f2937',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
                transition: 'all 0.3s ease'
            }}
            suppressHydrationWarning={true}
            onClick={() => {
                // Add your navigation logic here
                console.log('View all projects clicked');
              }}
            >
              View All Projects →
            </button>
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
                    marginRight: '1rem',
                    fontSize: '1.5rem'
                  }}>
                    📧
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Email</h4>
                    <p style={{ color: '#666' }}>your.email@example.com</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ 
                    marginRight: '1rem',
                    fontSize: '1.5rem'
                  }}>
                    📍
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Location</h4>
                    <p style={{ color: '#666' }}>Your City, Country</p>
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