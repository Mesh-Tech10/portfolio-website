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

  const roles = ['AI/ML Engineer', 'QA Automation Expert', 'Data Scientist', 'Cybersecurity Analyst'];

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

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', 
      lineHeight: '1.6', 
      color: '#2d3748',
      backgroundColor: '#ffffff'
    }}>
      
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#2d3748' }}>
            MP
          </div>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                style={{ 
                  textDecoration: 'none', 
                  color: '#4a5568', 
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease',
                  position: 'relative'
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '0 2rem',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            <div style={{ 
              fontSize: '1rem', 
              fontWeight: '600', 
              color: '#667eea', 
              marginBottom: '1rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Hello, I am
            </div>
            
            <h1 style={{ 
              fontSize: '4.5rem', 
              fontWeight: '800', 
              margin: '0 0 1rem 0',
              color: '#2d3748',
              lineHeight: '1.1'
            }}>
              Meshwa Patel
            </h1>
            
            <h2 style={{ 
              fontSize: '2rem', 
              margin: '0 0 2rem 0', 
              fontWeight: '400',
              color: '#667eea'
            }}>
              {roles[currentRole]}
            </h2>
            
            <p style={{ 
              fontSize: '1.2rem', 
              margin: '0 0 3rem 0', 
              lineHeight: '1.7',
              color: '#4a5568',
              maxWidth: '500px'
            }}>
              Passionate about leveraging AI and machine learning to solve complex problems. 
              Specialized in building robust testing frameworks and predictive models.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                type="button"
                style={{ 
                  backgroundColor: '#667eea', 
                  color: 'white', 
                  padding: '1rem 2rem', 
                  borderRadius: '8px', 
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                suppressHydrationWarning={true}
              >
                View Projects
              </button>
              <button 
                type="button"
                style={{ 
                  border: '2px solid #667eea', 
                  color: '#667eea', 
                  backgroundColor: 'transparent',
                  padding: '1rem 2rem', 
                  borderRadius: '8px', 
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'

                }}
                suppressHydrationWarning={true}
              >
                Download CV
              </button>
            </div>
          </div>
          
          {/* Right Content */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{ 
              width: '400px', 
              height: '400px', 
              borderRadius: '20px', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '6rem',
              color: 'white',
              fontWeight: 'bold',
              boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)'
            }}>
              MP
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '6rem 2rem', backgroundColor: '#f7fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '800', 
              margin: '0 0 1rem 0',
              color: '#2d3748'
            }}>
              About Me
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Passionate technologist with knowledge in AI/ML, quality assurance, cloud engineering, cybersecurity and data analyst.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                color: '#2d3748'
              }}>
                Professional Journey
              </h3>
              <p style={{ 
                fontSize: '1.1rem', 
                marginBottom: '1.5rem', 
                lineHeight: '1.8',
                color: '#4a5568'
              }}>
                I hold a Master degree in Computer Science and have built a diverse professional background across technical support, customer service, and software projects. 
                My Current experience includes hands-on IT support and troubleshooting, and
                completing certifications in cloud, cybersecurity, and data analytics. 
               </p>
              <p style={{ 
                fontSize: '1.1rem', 
                marginBottom: '2rem', 
                lineHeight: '1.8',
                color: '#4a5568'
              }}>
                I have also worked on academic and personal tech projects involving machine learning, testing, and web development. 
                Currently, I am focused into the IT field—particularly cybersecurity and cloud—while actively pursuing industry certifications and building practical skills through projects and continuous learning.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                backgroundColor: 'white', 
                borderRadius: '12px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)' 
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '800', 
                  color: '#667eea', 
                  marginBottom: '0.5rem' 
                }}>
                  5+
                </div>
                <div style={{ fontWeight: '600', color: '#4a5568' }}>Projects Completed</div>
              </div>
              <div style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                backgroundColor: 'white', 
                borderRadius: '12px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)' 
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '800', 
                  color: '#667eea', 
                  marginBottom: '0.5rem' 
                }}>
                  5+
                </div>
                <div style={{ fontWeight: '600', color: '#4a5568' }}>Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{ padding: '6rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '800', 
              margin: '0 0 1rem 0',
              color: '#2d3748'
            }}>
              Education
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              My academic background and qualifications
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {/* Master's Degree */}
            <div style={{ 
              backgroundColor: '#f8fafc', 
              padding: '2rem', 
              borderRadius: '12px', 
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem',
                    color: '#2d3748'
                  }}>
                    Master of Science in Computer Science
                  </h3>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600', 
                    color: '#667eea',
                    marginBottom: '1rem'
                  }}>
                    Laurentian University, Greater Sudbury
                  </p>
                  <p style={{ 
                    color: '#4a5568', 
                    fontSize: '0.95rem'
                  }}>
                    Ontario, CA
                  </p>
                </div>
                <span style={{ 
                  backgroundColor: '#667eea', 
                  color: 'white', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '20px', 
                  fontSize: '0.8rem', 
                  fontWeight: '600'
                }}>
                  2019 - 2022
                </span>
              </div>
              <ul style={{ 
                color: '#4a5568', 
                lineHeight: '1.7',
                paddingLeft: '1.5rem',
                margin: 0
              }}>
               {/* <li>Specialized in Artificial Intelligence and Machine Learning</li>
                <li>Coursework: Advanced Machine Learning, Deep Learning, Natural Language Processing, Data Mining</li>
                <li></li>
                <li></li>*/}
              </ul>
            </div>

            {/* Bachelor's Degree */}
            <div style={{ 
              backgroundColor: '#f8fafc', 
              padding: '2rem', 
              borderRadius: '12px', 
              /*boxShadow: '0 4px 20px rgba(0,0,0,0.08)', */
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ marginBottom: '1rem' 
                /* display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',*/
              }}> 
                <div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem',
                    color: '#2d3748'
                  }}>
                    Bachelor of Information and Technology Engineering
                  </h3>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600', 
                    color: '#10b981',
                    marginBottom: '1rem'
                  }}>
                    Gujarat Technology University, Ahmedabad
                  </p>
                  <p style={{ 
                    color: '#4a5568', 
                    fontSize: '0.95rem'
                  }}>
                    Gujarat, India
                  </p>
                </div>
                <span style={{ 
                  backgroundColor: '#10b981', 
                  color: 'white', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '20px', 
                  fontSize: '0.8rem', 
                  fontWeight: '600'
                }}>
                  2014 - 2018
                </span>
              </div>
              <ul style={{ 
                color: '#4a5568', 
                lineHeight: '1.7',
                paddingLeft: '1.5rem',
                margin: 0
              }}>
              {/*  <li>Information and technology</li>
                <li></li>
                <li></li>
                <li></li>*/}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ padding: '6rem 2rem', backgroundColor: '#f7fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '800', 
              margin: '0 0 1rem 0',
              color: '#2d3748'
            }}>
              Professional Experience
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              My journey through various roles and companies
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Current Position */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2.5rem', 
              borderRadius: '12px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem',
                    color: '#2d3748'
                  }}>
                    Technical service representative
                  </h3>
                  <p style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: '600', 
                    color: '#667eea',
                    marginBottom: '0.5rem'
                  }}>
                    D.E.Systems
                  </p>
                  <p style={{ 
                    color: '#4a5568', 
                    fontSize: '0.95rem'
                  }}>
                    Mississauga, ON, CA
                  </p>
                </div>
                <span style={{ 
                  backgroundColor: '#667eea', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem', 
                  fontWeight: '600'
                }}>
                  2024 - Present
                </span>
              </div>
              <ul style={{ 
                color: '#4a5568', 
                lineHeight: '1.7',
                paddingLeft: '1.5rem',
                margin: 0
              }}>
                <li>Diagnosed and resolved software, hardware, and networking issues within an average of 15–30 minutes per case.</li>
                <li>Automated repetitive support tasks with Python scripting, PowerShell, and Bash, reducing ticket resolution time by 30%.</li>
                <li>Delivered training sessions, improving user proficiency and reducing repeat support requests by 30%.</li>
                <li>Provided Tier-1 & Tier-2 technical support to 100+ clients, resolving 90% of issues on the first attempt.</li>
              </ul>
            </div>

             {/* Second Position */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2.5rem', 
              borderRadius: '12px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem',
                    color: '#2d3748'
                  }}>
                    Instructional Support Assistant 
                  </h3>
                  <p style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: '600', 
                    color: '#10b981',
                    marginBottom: '0.5rem'
                  }}>
                    Laurentian University
                  </p>
                  <p style={{ 
                    color: '#4a5568', 
                    fontSize: '0.95rem'
                  }}>
                    Greater Sudbury, ON, Canada
                  </p>
                </div>
                <span style={{ 
                  backgroundColor: '#10b981', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem', 
                  fontWeight: '600'
                }}>
                  2019 - 2021
                </span>
              </div>
              <ul style={{ 
                color: '#4a5568', 
                lineHeight: '1.7',
                paddingLeft: '1.5rem',
                margin: 0
              }}>
                <li>Maintained class and student records by documenting attendance and completing assignments for over 200 students.</li>
                <li>Evaluated and graded over 100 assignments and exams in adherence to university standards.</li>
                <li>Proctored over 10 examinations, ensuring academic integrity and preventing student cheating.</li>
                <li>Conducted collaborative research in computer science with a team of 3 graduates and faculty members, resulting in 2 published papers.</li>
                <li>Taught mathematics and college-level mathematics courses to more than 50 students, enhancing their academic performance and understanding of the subject.</li>
                </ul>
            </div>

            {/* third Position */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2.5rem', 
              borderRadius: '12px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem',
                    color: '#2d3748'
                  }}>
                    Customer Service & Support Roles
                  </h3>
                  {/*<p style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: '600', 
                    color: '#10b981',
                    marginBottom: '0.5rem'
                  }}>
                    Companies
                  </p>*/}
                  <p style={{ 
                    color: '#4a5568', 
                    fontSize: '0.95rem'
                  }}>
                    Ontario, Canada
                  </p>
                </div>
                <span style={{ 
                  backgroundColor: '#10b981', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem', 
                  fontWeight: '600'
                }}>
                  2019 - 2024
                </span>
              </div>
              <ul style={{ 
                color: '#4a5568', 
                lineHeight: '1.7',
                paddingLeft: '1.5rem',
                margin: 0
              }}>
                <li>Roles included Store Assistant, Collection Agent, and Customer Service Specialist at BGO, Tim Hortons, Real Canadian Superstore, and Subway.</li>
                <li>Built strong communication, conflict resolution, and customer management skills in fast-paced environments.</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section id="internship" style={{ padding: '6rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '800', 
              margin: '0 0 1rem 0',
              color: '#2d3748'
            }}>
              Intership
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Completed hands-on internship experience applying technical skills in real-world scenarios.
            </p>
          </div>     

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* First Internship */}
            <div style={{ 
              backgroundColor: '#f7fafc', 
              padding: '2.5rem', 
              borderRadius: '12px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem',
                    color: '#2d3748'
                  }}>
                    Web Developer Intern
                  </h3>
                  <p style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: '600', 
                    color: '#8b5cf6',
                    marginBottom: '0.5rem'
                  }}>
                    Web Developer Intern
                  </p>
                  <p style={{ 
                    color: '#4a5568', 
                    fontSize: '0.95rem'
                  }}>
                    Anand, Gujarat, India
                  </p>
                </div>
                <span style={{ 
                  backgroundColor: '#8b5cf6', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem', 
                  fontWeight: '600'
                }}>
                  2018 - 2019
                </span>
              </div>
              <ul style={{ 
                color: '#4a5568', 
                lineHeight: '1.7',
                paddingLeft: '1.5rem',
                margin: 0
              }}>
                <li>Developed and optimized full-stack web applications using HTML, PHP, JavaScript, CSS, and jQuery.</li>
                <li>Integrated RESTful APIs with backend services using Postman and PHP.</li>
                <li>Managed and optimized MySQL databases for high-performance queries.</li>
                <li>Utilized Git and Jenkins for version control and basic CI/CD pipeline automation.</li>
              </ul>
            </div>

            {/* Second Internship */}
            <div style={{ 
              backgroundColor: '#f7fafc', 
              padding: '2.5rem', 
              borderRadius: '12px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem',
                    color: '#2d3748'
                  }}>
                    Junior Software Developer Intern
                  </h3>
                  <p style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: '600', 
                    color: '#f59e0b',
                    marginBottom: '0.5rem'
                  }}>
                   Tech Elecon, Technological Simplified
                  </p>
                  <p style={{ 
                    color: '#4a5568', 
                    fontSize: '0.95rem'
                  }}>
                    Anand, Gujarat, India
                  </p>
                </div>
                <span style={{ 
                  backgroundColor: '#f59e0b', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem', 
                  fontWeight: '600'
                }}>
                  2017 - 2018
                </span>
              </div>
              <ul style={{ 
                color: '#4a5568', 
                lineHeight: '1.7',
                paddingLeft: '1.5rem',
                margin: 0
              }}>
                <li>Developed multi-platform applications using Java, Python, and C++, ensuring modular and reusable code.</li>
                <li>Built and deployed RESTful APIs using Flask and PHP, integrating backend services efficiently.</li>
                <li>Conducted unit testing and API testing with JUnit and Selenium to ensure application stability.</li>
                <li>Optimized application performance and security using SQL database indexing, caching, and role-based authentication.</li>
                <li>Utilized Git and SVN for version control, collaborating on team-based software projects.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>       

      {/* New Skills Section */}
      <section id="skills" style={{ padding: '6rem 2rem', backgroundColor: '#f7fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '800', 
              margin: '0 0 1rem 0',
              color: '#2d3748'
            }}>
              Skills & Expertise
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Technologies and tools I work with daily
            </p>
          </div>
          
          {/* Skills Cloud Layout */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1rem', 
            justifyContent: 'center',
            marginBottom: '4rem'
          }}>
            {[
              { name: 'Python', level: 'Expert', color: '#3776ab' },
              { name: 'JavaScript', level: 'Advanced', color: '#f7df1e' },
              { name: 'TensorFlow', level: 'Expert', color: '#ff6f00' },
              { name: 'React', level: 'Advanced', color: '#61dafb' },
              { name: 'Node.js', level: 'Intermediate', color: '#339933' },
              { name: 'Docker', level: 'Advanced', color: '#2496ed' },
              { name: 'AWS', level: 'Intermediate', color: '#ff9900' },
              { name: 'MongoDB', level: 'Intermediate', color: '#47a248' },
              { name: 'PostgreSQL', level: 'Advanced', color: '#336791' },
              { name: 'Selenium', level: 'Expert', color: '#43b02a' },
              { name: 'Keras', level: 'Advanced', color: '#d00000' },
              { name: 'Scikit-learn', level: 'Expert', color: '#f7931e' },
              { name: 'Git', level: 'Expert', color: '#f05032' },
              { name: 'Jenkins', level: 'Intermediate', color: '#d33833' },
              { name: 'Pandas', level: 'Expert', color: '#150458' },
              { name: 'NumPy', level: 'Advanced', color: '#013243' }
            ].map((skill, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: 'white',
                  border: `2px solid ${skill.color}`,
                  borderRadius: '25px',
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: '140px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = skill.color;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#2d3748';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  color: 'inherit'
                }}>
                  {skill.name}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: 'inherit',
                  opacity: 0.8
               }}>
                 {skill.level}
               </div>
             </div>
           ))}
         </div>

         {/* Certifications Section */}
         <div style={{ marginTop: '5rem' }}>
           <h3 style={{ 
             fontSize: '2.5rem', 
             fontWeight: '700', 
             textAlign: 'center',
             marginBottom: '3rem',
             color: '#2d3748'
           }}>
             Certifications
           </h3>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
             {[
               {
                 name: 'AWS Cloud Practitioner Essentials - AWS',
                 issuer: 'Amazon Web Services',
                 date: '2024',
                 color: '#ff9900',
                 description: 'AWS cloud infrastructure, services, billing, and security, helping me understand how cloud solutions are built and managed.'
               },
               {
                 name: 'AWS Essential Training for Developers',
                 issuer: 'LinkedIn',
                 date: '2024',
                 color: '#4285f4',
                 description: 'Focused and training on hands-on tools like EC2, S3, and Lambda, and how developers can use AWS to build and deploy applications effectively.'
               },
               {
                 name: 'Career Essentials in Generative AI',
                 issuer: 'Microsoft & LinkedIn',
                 date: '2024',
                 color: '#326ce5',
                 description: 'Covered the fundamentals of AI and generative AI, including ethical use, tools like Microsoft Copilot, and trained how to apply AI in real-world tasks.'
               },
               {
                 name: 'Google Data Analytics Professional Certificate',
                 issuer: 'Coursera',
                 date: '2023',
                 color: '#ff6f00',
                 description: 'Gained practical experience with data analysis tools like SQL, Excel, and Tableau while learning how to clean, organize, and present data-driven insights.'
               },
               {
                 name: 'Software Testing and Automation, University of Minnesota ',
                 issuer: 'Coursera)',
                 date: '2023',
                 color: '#0078d4',
                 description: 'Learned manual and automated testing strategies, including test planning, debugging, and using tools like Selenium to improve software quality.'
               },
               {
                 name: 'Networking Fundamentals',
                 issuer: 'LinkedIn',
                 date: '2025',
                 color: '#dc3545',
                 description: 'Demonstrates core networking concepts like IP addressing, DNS, firewalls, and protocols, helping me build a strong foundation in IT networking.'
               },
               {
                 name: 'Excel and ChatGPT: Data Analysis Power Tip',
                 issuer: 'LinkedIn',
                 date: '2025',
                 color: '#dc3545',
                 description: 'Learned how to pair Excel functions with ChatGPT to simplify data analysis, automation, and reporting tasks efficiently.'
               },
               {
                 name: 'Ongoing - Certified Cybersecurity By ISC2',
                 issuer: 'ISC2 organization',
                 date: '2025',
                 color: '#dc3545',
                 description: 'Currently building a strong foundation in cybersecurity concepts including risk management, network security, incident response, and access control, as part of ISC2’s entry-level certification program.'
               }
             ].map((cert, index) => (
               <div 
                 key={index}
                 style={{
                   backgroundColor: 'white',
                   border: '1px solid #e2e8f0',
                   borderRadius: '12px',
                    padding: '2rem',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                 }}
               >
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                   <div>
                     <h4 style={{
                       fontSize: '1.8rem',
                       fontWeight: '700',
                       marginBottom: '0.5rem',
                       color: '#2d3748'
                     }}>
                       {cert.name}
                     </h4>
                     <p style={{
                       fontSize: '1.2rem',
                       fontWeight: '600',
                       color: cert.color,
                       marginBottom: '0.5rem'
                     }}>
                       {cert.issuer}
                     </p>
                   </div>
                   <span style={{
                     backgroundColor: cert.color,
                     color: 'white',
                     padding: '0.5rem 1rem',
                     borderRadius: '20px',
                     fontSize: '0.9rem',
                     fontWeight: '600'
                   }}>
                     {cert.date}
                   </span>
                 </div>
                 <p style={{
                   color: '#4a5568',
                   lineHeight: '1.7',
                   fontSize: '0.95rem'
                 }}>
                   {cert.description}
                 </p>
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>

     {/* Projects Section */}
     <section id="projects" style={{ padding: '6rem 2rem', backgroundColor: '#f7fafc' }}>
       <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
         <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
           <h2 style={{ 
             fontSize: '3rem', 
             fontWeight: '800', 
             margin: '0 0 1rem 0',
             color: '#2d3748'
           }}>
             Featured Projects
           </h2>
           <p style={{ 
             fontSize: '1.2rem', 
             color: '#4a5568',
             maxWidth: '600px',
             margin: '0 auto'
           }}>
             Some of my recent work in AI/ML and QA automation
           </p>
         </div>
         
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
           {[
             {
               title: "AI Job Verification System",
               description: "Machine learning system to detect fraudulent job postings with 95% accuracy using advanced NLP techniques.",
               tech: ["Python", "TensorFlow", "NLP", "Flask"],
               category: "AI/ML",
               image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
             },
             {
               title: "Banking QA Framework",
               description: "Comprehensive automated testing framework for financial applications with complete CI/CD integration.",
               tech: ["Python", "Selenium", "Pytest", "Docker"],
               category: "QA Testing",
               image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
             },
             {
               title: "Solar Prediction Model",
               description: "Advanced ML model for predicting solar radiation with 91% accuracy using meteorological data.",
               tech: ["Python", "TensorFlow", "Keras", "Pandas"],
               category: "AI/ML",
               image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
             },
             {
               title: "Twitter sentiment analysis",
               description: "Real-time sentiment analysis system that processes Twitter data to understand public opinion, brand perception, and social trends through advanced NLP and machine learning.",
               tech: ["JavaScript", "Cypress", "Jest", "Node.js"],
               category: "QA Testing",
               image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
             }
           ].map((project, index) => (
             <div 
               key={index} 
               style={{ 
                 backgroundColor: 'white', 
                 borderRadius: '12px', 
                 overflow: 'hidden',
                 boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                 cursor: 'pointer',
                 border: '1px solid #e2e8f0'
               }}
             >
               <div style={{ 
                 height: '200px', 
                 backgroundImage: `url(${project.image})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 position: 'relative'
               }}>
                 <div style={{
                   position: 'absolute',
                   top: '1rem',
                   right: '1rem',
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   padding: '0.5rem 1rem',
                   borderRadius: '20px',
                   fontSize: '0.8rem',
                   fontWeight: '600',
                   color: '#2d3748'
                 }}>
                   {project.category}
                 </div>
               </div>
               
               <div style={{ padding: '2rem' }}>
                 <h3 style={{ 
                   fontSize: '1.4rem', 
                   fontWeight: '700', 
                   marginBottom: '1rem',
                   color: '#2d3748'
                 }}>
                   {project.title}
                 </h3>
                 
                 <p style={{ 
                   color: '#4a5568', 
                   marginBottom: '1.5rem', 
                   lineHeight: '1.6',
                   fontSize: '0.95rem'
                 }}>
                   {project.description}
                 </p>
                 
                 <div style={{ marginBottom: '2rem' }}>
                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                     {project.tech.map((tech, idx) => (
                       <span
                         key={idx}
                         style={{ 
                           backgroundColor: '#f1f5f9', 
                           color: '#475569', 
                           padding: '0.3rem 0.8rem', 
                           borderRadius: '15px', 
                           fontSize: '0.8rem',
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
                     type="button"
                     style={{ 
                       flex: 1, 
                       backgroundColor: 'transparent', 
                       color: '#667eea', 
                       border: '2px solid #667eea', 
                       padding: '0.8rem', 
                       borderRadius: '8px', 
                       fontWeight: '600',
                       cursor: 'pointer',
                       transition: 'all 0.3s ease'
                     }}
                     suppressHydrationWarning={true}
                   >
                     View Code
                   </button>
                   <button 
                     type="button"
                     style={{ 
                       flex: 1, 
                       backgroundColor: '#667eea', 
                       color: 'white', 
                       border: 'none', 
                       padding: '0.8rem', 
                       borderRadius: '8px', 
                       fontWeight: '600',
                       cursor: 'pointer',
                       transition: 'all 0.3s ease'
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
     <section id="contact" style={{ padding: '6rem 2rem', backgroundColor: '#f8fafc' }}>
       <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
         <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
           <h2 style={{ 
             fontSize: '3rem', 
             fontWeight: '800', 
             margin: '0 0 1rem 0',
             color: '#2d3748'
           }}>
             Let&apos;s Work Together
           </h2>
           <p style={{ 
             fontSize: '1.2rem', 
             color: '#4a5568',
             maxWidth: '600px',
             margin: '0 auto'
           }}>
             Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
           </p>
         </div>
         
         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'stretch' }}>
           {/* Contact Info */}
           <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
             <div>
               <h3 style={{ 
                 fontSize: '2rem', 
                 fontWeight: '700', 
                 marginBottom: '1rem',
                 color: '#2d3748'
               }}>
                 Get in Touch
               </h3>
               
               <p style={{ 
                 fontSize: '1.1rem', 
                 color: '#4a5568',
                 lineHeight: '1.7',
                 marginBottom: '0.5rem'
               }}>
                 I am always interested in new opportunities and exciting projects. 
                 Whether you have a question or just want to say hi, I will get back to you!
               </p>
               
               {/* Contact Methods */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem' }}>
                 {[
                   { label: 'Email', value: 'meshwapatel10@gmail.com' },
                   { label: 'Phone', value: '+1 (705) 920-1031' },
                   { label: 'Location', value: 'Mississauga, ON, CA' },
                   { label: 'LinkedIn', value: 'linkedin.com/in/meshwaa' }
                 ].map((contact, index) => (
                   <div key={index} style={{ 
                     backgroundColor: 'white',
                     padding: '1rem',
                     borderRadius: '8px',
                     border: '1px solid #e2e8f0',
                     flex: '1'
                   }}>
                     <div style={{ 
                       fontSize: '0.9rem', 
                       fontWeight: '600', 
                       color: '#4a5568',
                       marginBottom: '0.1rem'
                     }}>
                       {contact.label}
                     </div>
                     <div style={{ 
                       fontSize: '1.1rem', 
                       color: '#2d3748',
                       fontWeight: '600'
                     }}>
                       {contact.value}
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Social Links */}
             <div>
               <h4 style={{ 
                 fontSize: '1.2rem', 
                 fontWeight: '600', 
                 marginBottom: '1rem',
                 color: '#2d3748'
               }}>
                 Follow Me
               </h4>
               <div style={{ display: 'flex', gap: '1rem' }}>
                 {[
                   { name: 'Instagram', icon: '📷', bg: '#E4405F' },
                   { name: 'Facebook', icon: '📘', bg: '#1877F2' },
                   { name: 'LinkedIn', icon: '💼', bg: '#0A66C2' },
                   { name: 'GitHub', icon: '🐙', bg: '#181717' }
                 ].map((social, index) => (
                   <div 
                     key={index}
                     style={{
                       width: '45px',
                       height: '45px',
                       borderRadius: '50%',
                       backgroundColor: social.bg,
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       fontSize: '1.2rem',
                       cursor: 'pointer',
                       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                       transition: 'all 0.3s ease'
                     }}
                     title={social.name}
                   >
                     {social.icon}
                   </div>
                 ))}
               </div>
             </div>
           </div>
           
           {/* Contact Form */}
           <div style={{ 
             backgroundColor: 'white', 
             padding: '3rem', 
             borderRadius: '12px',
             boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
             border: '1px solid #e2e8f0',
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'space-between'
           }}>
             <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                 <div>
                   <label style={{ 
                     display: 'block', 
                     fontWeight: '600', 
                     marginBottom: '0.5rem',
                     color: '#2d3748',
                     fontSize: '0.9rem'
                   }}>
                     First Name
                   </label>
                   <input
                     type="text"
                     name="from_name"
                     value={formData.from_name}
                     onChange={handleChange}
                     required
                     style={{ 
                       width: '100%', 
                       padding: '0.75rem 1rem', 
                       border: '2px solid #e2e8f0', 
                       borderRadius: '8px',
                       fontSize: '1rem',
                       outline: 'none',
                       transition: 'all 0.3s ease',
                       backgroundColor: '#f8fafc'
                     }}
                     placeholder="first name"
                     suppressHydrationWarning={true}
                   />
                 </div>
                 
                 <div>
                   <label style={{ 
                     display: 'block', 
                     fontWeight: '600', 
                     marginBottom: '0.5rem',
                     color: '#2d3748',
                     fontSize: '0.9rem'
                   }}>
                     Email Address
                   </label>
                   <input
                     type="email"
                     name="from_email"
                     value={formData.from_email}
                     onChange={handleChange}
                     required
                     style={{ 
                       width: '100%', 
                       padding: '0.75rem 1rem', 
                       border: '2px solid #e2e8f0', 
                       borderRadius: '8px',
                       fontSize: '1rem',
                       outline: 'none',
                       transition: 'all 0.3s ease',
                       backgroundColor: '#f8fafc'
                     }}
                     placeholder="youremail@example.com"
                     suppressHydrationWarning={true}
                   />
                 </div>
               </div>

               <div style={{ marginBottom: '1.5rem' }}>
                 <label style={{ 
                   display: 'block', 
                   fontWeight: '600', 
                   marginBottom: '0.5rem',
                   color: '#2d3748',
                   fontSize: '0.9rem'
                 }}>
                   Subject
                 </label>
                 <input
                   type="text"
                   name="subject"
                   value={formData.subject}
                   onChange={handleChange}
                   required
                   style={{ 
                     width: '100%', 
                     padding: '0.75rem 1rem', 
                     border: '2px solid #e2e8f0', 
                     borderRadius: '8px',
                     fontSize: '1rem',
                     outline: 'none',
                     transition: 'all 0.3s ease',
                     backgroundColor: '#f8fafc'
                   }}
                   placeholder="Let's work together"
                   suppressHydrationWarning={true}
                 />
               </div>

               <div style={{ marginBottom: '2rem', flex: 1 }}>
                 <label style={{ 
                   display: 'block', 
                   fontWeight: '600', 
                   marginBottom: '0.5rem',
                   color: '#2d3748',
                   fontSize: '0.9rem'
                 }}>
                   Message
                 </label>
                 <textarea
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   required
                   rows={6}
                   style={{ 
                     width: '100%', 
                     height: '120px',
                     padding: '0.75rem 1rem', 
                     border: '2px solid #e2e8f0', 
                     borderRadius: '8px',
                     fontSize: '1rem',
                     outline: 'none',
                     resize: 'vertical',
                     transition: 'all 0.3s ease',
                     backgroundColor: '#f8fafc',
                     fontFamily: 'inherit'
                   }}
                   placeholder="Tell me about your project..."
                   suppressHydrationWarning={true}
                 />
               </div>

               <button
                 type="submit"
                 disabled={isSubmitting}
                 style={{ 
                   width: '100%', 
                   backgroundColor: isSubmitting ? '#a0aec0' : '#667eea',
                   color: 'white', 
                   border: 'none', 
                   padding: '1rem 2rem', 
                   borderRadius: '8px',
                   fontSize: '1.1rem',
                   fontWeight: '600',
                   cursor: isSubmitting ? 'not-allowed' : 'pointer',
                   transition: 'all 0.3s ease',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   gap: '0.5rem',
                   marginTop: 'auto'
                 }}
                 suppressHydrationWarning={true}
               >
                 {isSubmitting ? 'Sending Message...' : 'Send Message'}
               </button>

               {submitStatus && (
                 <div style={{
                   marginTop: '1.5rem',
                   padding: '1rem',
                   borderRadius: '8px',
                   textAlign: 'center',
                   fontWeight: '600',
                   backgroundColor: submitStatus === 'success' ? '#f0fff4' : '#fed7d7',
                   color: submitStatus === 'success' ? '#22543d' : '#742a2a',
                   border: `2px solid ${submitStatus === 'success' ? '#9ae6b4' : '#feb2b2'}`
                 }}>
                   {submitStatus === 'success' ? 
                     '🎉 Message sent successfully! I\'ll get back to you soon.' : 
                     '❌ Failed to send message. Please try again.'
                   }
                 </div>
               )}
             </form>
           </div>
         </div>
       </div>
     </section>
   </div>
 );
};

export default Portfolio;