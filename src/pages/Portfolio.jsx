import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Award, Briefcase, Calendar, FileText, Download } from 'lucide-react';
import logo from '../assets/logo.png';
import '../styles/Portfolio.css';
import { studentsData } from '../components/data/students';
import { useEffect } from 'react';
import { jsPDF } from "jspdf";
import logofull from '../assets/logofull.png';

function Portfolio() {
  const navigate = useNavigate();
  const { id } = useParams();

   useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
  
  const student = id 
    ? studentsData.find(s => s.id === parseInt(id)) || studentsData[0]
    : studentsData[0];

 const handleDownloadCV = () => {
  const doc = new jsPDF();
  const margin = 20;
  const pageWidth = 210;

  try {
    doc.addImage(logofull, 'PNG', margin, 15, 25, 20);
  } catch (e) {
    console.error("Erro ao carregar logo no PDF", e);
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(37, 99, 235);
  doc.text("Conecta Talento", 45, 25);
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text("CURRÍCULO VERIFICADO - ODS 4", 45, 32);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text(student.name, margin, 50);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Email: ${student.email}  |  Localização: ${student.location}`, margin, 57);

  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(0.5);
  doc.line(margin, 62, 190, 62);

  doc.setFont("helvetica", "bold");
  doc.text("SOBRE MIM", margin, 72);
  doc.setFont("helvetica", "normal");
  
  const bioDesc = doc.splitTextToSize(student.bio, 170);
  doc.text(bioDesc, margin, 78);

  const bioHeight = bioDesc.length * 5; 
  let currentY = 85 + bioHeight;

  doc.setFont("helvetica", "bold");
  doc.text("PRINCIPAIS HABILIDADES", margin, currentY);
  doc.setFont("helvetica", "normal");
  
  const skillsText = student.skills.join(" • ");
  const splitSkills = doc.splitTextToSize(skillsText, 170);
  doc.text(splitSkills, margin, currentY + 6);

  currentY += (splitSkills.length * 5) + 15;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(22, 163, 74);
  doc.text("PROJETOS EM DESTAQUE", margin, currentY);
  
  doc.setTextColor(0, 0, 0);
  currentY += 8;

  student.portfolio.forEach((project) => {
    doc.setFont("helvetica", "bold");
    doc.text(`> ${project.title}`, margin, currentY);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.text(`Impacto: ${project.impact}`, margin + 5, currentY + 5);
    
    currentY += 12;
  });
  doc.setDrawColor(220, 220, 220);
  doc.rect(10, 10, 190, 277);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text("Documento gerado eletronicamente. As competências foram validadas via desafios práticos.", pageWidth / 2, 285, { align: "center" });

  doc.save(`Curriculo_Verificado_${student.name.replace(/\s+/g, '_')}.pdf`);
};
 const handleBack = () => {navigate('/empresa/home');};

  return (
    <div className="portfolio-container">
  <header className="header">
          <div className="header-content">
            <div className="logo-header">
               <img src={logo} className="logo-icon-small" alt="Logo Conecta Talento"/>
              <span className="logo-text-header">
                <span className="text-blue">Conecta</span>
                <span className="text-green"> Talento</span>
              </span>
            </div>
              <button onClick={handleBack} className="btn-logout"> ← Voltar</button>
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