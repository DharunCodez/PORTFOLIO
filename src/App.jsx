import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
} from 'react-icons/si';
import {
  FaBrain,
  FaDatabase,
  FaLock,
  FaUserShield,
  FaJava,
  FaCode,
  FaGithub,
  FaMagic,
  FaCss3,
} from 'react-icons/fa';

const profile = {
  name: 'Dharunkumar M',
  title: 'Aspiring Software Engineer & Full Stack Developer',
  summary:
    'Aspiring Software Engineer and Full Stack Developer with a strong foundation in programming fundamentals and modern web technologies. Passionate about solving real-world problems, writing clean code, and contributing to agile software teams.',
  location: 'READY TO RELOCATE FOR THE RIGHT OPPORTUNITY',
  availability: 'AVAILABLE FOR INTERNSHIPS AND FULL-TIME ROLES',
  availability2: 'INTERESTED IN ON-SITE OPPORTUNITIES',
  email: 'dharun.aug@gmail.com',
  phone: '+91-9042572552',
  github: 'github.com/DharunCodez',
  linkedin: 'linkedin.com/in/dharunkumar-m/',
};

const education = [
  {
    school: 'Bannari Amman Institute of Technology',
    degree: 'B.Tech in Computer Science',
    period: '2023 — 2027',
    extra: 'CGPA: 7.81',
  },
  {
    school: 'Little Flower Matric HSS',
    degree: 'CS Maths',
    period: '2022 — 2023',
    extra: 'Percentage: 86.1%',
  },
];

const projects = [
  {
    title: 'Job Portal Application',
    description:
      'Engineered a robust platform for students and recruiters with job posting, application tracking, secure JWT authentication, RBAC, and responsive Tailwind UI.',
  },
  {
    title: 'Skill Analytics Platform',
    description:
      'Developed a multi-role skill tracking and analytics system with dashboards, MongoDB-backed data models, REST APIs, and deployment on Vercel.',
  },
];

const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'C', icon: <FaCode /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'DSA', icon: <FaBrain /> },
  { name: 'React.js', icon: <SiReact /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <FaCss3 /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Git/GitHub', icon: <FaGithub /> },
];

const traits = ['Teamwork', 'Time Management', 'Leadership', 'Effective Communication', 'Critical Thinking'];
const resumeUrl = '/DHARUNKUMAR_7376232CB115_RESUME.pdf';
const certifications = [
  {
    title: 'TCS Career Edge - Young Professional',
    issuer: 'TCS iON',
    file: '/TCS%20CAREER%20EDGE.pdf',
  },
];

function App() {
  const openResume = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-shell">
      <header className="hero">
        <nav className="nav container">
          <a href="#home" className="brand">{profile.name}</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content container" id="home">
          <div>
            <p className="eyebrow">Professional Portfolio</p>
            <h1>{profile.title}</h1>
            <p className="lead">{profile.summary}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Let’s Connect</a>
              <button type="button" className="btn btn-secondary" onClick={openResume}>View Resume</button>
            </div>
          </div>
          <div className="hero-card">
            <div className="avatar">{profile.name.split(' ').map((word) => word[0]).join('').slice(0, 2)}</div>
            <h2>OPEN TO OPPORTUNITIES</h2>
            <p className="hero-card-location">{profile.location}</p>
            <div className="hero-card-points">
              <p className="hero-card-point">• {profile.availability}</p>
              <p className="hero-card-point">• {profile.availability2}</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section container">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Reliable, curious, and focused on impact.</h2>
          </div>
          <div className="about-grid">
            <p>
              I am an aspiring software engineer with a focus on modern web development and clean, scalable application design.
              My work is grounded in strong programming fundamentals, practical problem-solving, and a passion for building useful digital products.
            </p>
            <p>
              I enjoy working with the MERN stack, building secure systems with authentication and authorization, and creating responsive interfaces that deliver a great user experience.
            </p>
          </div>
        </section>

        <section className="section container">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Academic background.</h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="card" key={item.school}>
                <h3>{item.school}</h3>
                <p className="meta">{item.degree} · {item.period}</p>
                <p>{item.extra}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Projects</p>
              <h2>Selected work.</h2>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="card" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="section-heading">
            <p className="eyebrow">Tech Stack</p>
            <h2>Core technologies I work with.</h2>
          </div>
          <div className="tech-grid">
            {skills.map((skill) => (
              <div className="tech-item" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Certifications</p>
              <h2>Recognitions and learning milestones.</h2>
            </div>
            <div className="cert-grid">
              {certifications.map((cert) => (
                <article className="card cert-card" key={cert.title}>
                  <div className="cert-badge">🏅</div>
                  <h3>{cert.title}</h3>
                  <p className="meta">{cert.issuer}</p>
                  <a href={cert.file} target="_blank" rel="noreferrer" className="btn btn-secondary cert-btn">View Certificate</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Personal Traits</p>
              <h2>What I bring to a team.</h2>
            </div>
            <div className="skills">
              {traits.map((trait) => (
                <div className="trait-item" key={trait}>• {trait}</div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container footer-content">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something meaningful.</h2>
            <p className="contact-list">
              <span>{profile.email}</span>
              <span>{profile.phone}</span>
              <span>{profile.location}</span>
            </p>
            <p className="contact-list">
              <span><a href={`https://${profile.github}`} target="_blank" rel="noreferrer">{profile.github}</a></span>
              <span><a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">{profile.linkedin}</a></span>
            </p>
          </div>
          <div className="footer-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">Email Me</a>
            <button type="button" className="btn btn-secondary" onClick={openResume}>View Resume</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
