import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Award, Briefcase, Calendar, FileText, Download } from 'lucide-react';
import logo from '../assets/logo.png';
import '../styles/Portfolio.css';
import { studentsData } from '../components/data/students';

function Portfolio() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const student = id 
    ? studentsData.find(s => s.id === parseInt(id)) || studentsData[0]
    : studentsData[0];

  const handleDownloadCV = () => {
    alert('Download do currículo iniciado!');
  };

  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="header-content">
          <div className="logo-header" onClick={() => navigate('/aluno/home')}>
            <img src={logo} alt="Conecta Talento" className="logo-icon-small-img" />
            <span className="logo-text-header">
              <span className="text-blue">Conecta</span>
              <span className="text-green"> Talento</span>
            </span>
          </div>
          
          <button onClick={() => navigate('/aluno/home')} className="btn-back-header">
            <ArrowLeft size={18} />
            Voltar ao Dashboard
          </button>
        </div>
      </header>

      <main className="portfolio-main">
        <div className="portfolio-hero">
          <div className="profile-card">
            <div className="profile-image-container">
              {student.photo ? (
                <img src={student.photo} alt={student.name} className="profile-image" />
              ) : (
                <div className="profile-placeholder">
                  <span className="profile-initials">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
            </div>
            <div className="profile-info">
              <h1 className="profile-name">{student.name}</h1>
              <p className="profile-bio">{student.bio}</p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={18} />
                  <span>{student.email}</span>
                </div>
                <div className="contact-item">
                  <Phone size={18} />
                  <span>{student.phone}</span>
                </div>
                <div className="contact-item">
                  <MapPin size={18} />
                  <span>{student.location}</span>
                </div>
                <div className="contact-item">
                  <Briefcase size={18} />
                  <span>Disponibilidade: {student.availability}</span>
                </div>
              </div>

              <button onClick={handleDownloadCV} className="btn-download-cv">
                <Download size={20} />
                Baixar Currículo Completo
              </button>
            </div>
          </div>
        </div>

        <div className="portfolio-content">
          <section className="portfolio-section">
            <h2 className="section-title-portfolio">
              <FileText size={28} />
              Sobre Mim
            </h2>
            <div className="about-grid">
              <div className="about-item">
                <h3>Formação</h3>
                <p>{student.education}</p>
              </div>
              <div className="about-item">
                <h3>Cursos Concluídos</h3>
                <p className="stat-number-portfolio">{student.completedCourses}</p>
              </div>
              <div className="about-item">
                <h3>Habilidades Desenvolvidas</h3>
                <p className="stat-number-portfolio">{student.totalSkills}</p>
              </div>
              <div className="about-item">
                <h3>Projetos no Portfólio</h3>
                <p className="stat-number-portfolio">{student.portfolio.length}</p>
              </div>
            </div>
          </section>

          <section className="portfolio-section">
            <h2 className="section-title-portfolio">
              <Award size={28} />
              Habilidades e Competências
            </h2>
            <div className="skills-grid-portfolio">
              {student.skills.map((skill, idx) => (
                <div key={idx} className="skill-badge-portfolio">
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <section className="portfolio-section">
            <h2 className="section-title-portfolio">
              <Briefcase size={28} />
              Portfólio de Projetos
            </h2>
            <div className="projects-grid">
              {student.portfolio.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-header-portfolio">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-course">{project.course}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-meta">
                    <div className="project-meta-item">
                      <Calendar size={16} />
                      <span>{project.date}</span>
                    </div>
                    <div className="project-impact">
                      <strong>Impacto:</strong> {project.impact}
                    </div>
                  </div>

                  <div className="project-skills">
                    {project.skills.map((skill, idx) => (
                      <span key={idx} className="project-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {project.videoUrl && (
                    <div className="project-media">
                      <FileText size={16} />
                      <span>Vídeo de apresentação disponível</span>
                    </div>
                  )}
                  {project.imageUrl && (
                    <div className="project-media">
                      <FileText size={16} />
                      <span>Material visual disponível</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="portfolio-section">
            <h2 className="section-title-portfolio">
              <Award size={28} />
              Certificados
            </h2>
            <div className="certificates-grid">
              {student.certificates.map((cert, idx) => (
                <div key={idx} className="certificate-card">
                  <div className="certificate-icon">
                    <Award size={32} />
                  </div>
                  <div className="certificate-info">
                    <h3 className="certificate-name">{cert.courseName}</h3>
                    <p className="certificate-date">Emitido em {cert.issueDate}</p>
                  </div>
                  <button className="btn-view-certificate">
                    Ver Certificado
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="footer-portfolio">
        <div className="footer-content-portfolio">
          <p>&copy; 2026 Conecta Talento - Portfólio de {student.name}</p>
          <p className="footer-ods">ODS 4 - Educação de Qualidade • Meta 4.4</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;