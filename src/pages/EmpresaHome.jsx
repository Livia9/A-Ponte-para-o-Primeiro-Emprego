import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Briefcase, Award, Calendar, Mail, Phone, FileText, User } from 'lucide-react';
import { studentsData } from '../components/data/students';
import logo from '../assets/logo.png';
import logofull from '../assets/logofull.png';
import '../styles/EmpresaHome.css';
import Header from '../components/Header';

function EmpresaHome() {
  const navigate = useNavigate();

  const handleViewPortfolio = (studentId) => {
    navigate(`/aluno/portfolio/${studentId}`);
  };

  return (
    <div className="empresa-container">
  <Header 
        userName="Empresa Recrutadora" 
        userType="empresa"
        showUserInfo={false}
      />
      <div className="empresa-hero">
        <div className="empresa-hero-content">
          <h1 className="empresa-hero-title">Bem-vindo à Área de Recrutamento</h1>
          <p className="empresa-hero-subtitle">
            Encontre talentos com habilidades verificadas e portfólios práticos
          </p>
        </div>
      </div>

      <main className="empresa-main">
        <div className="empresa-info-grid">
          <div className="empresa-info-card">
            <Briefcase className="empresa-info-icon blue" size={40} />
            <h3>Candidatos Qualificados</h3>
            <p>Jovens com soft skills desenvolvidas através de projetos práticos</p>
          </div>
          <div className="empresa-info-card">
            <Award className="empresa-info-icon green" size={40} />
            <h3>Habilidades Verificadas</h3>
            <p>Portfólios com evidências concretas de competências</p>
          </div>
          <div className="empresa-info-card">
            <FileText className="empresa-info-icon blue" size={40} />
            <h3>Consciência ESG</h3>
            <p>Profissionais com visão de sustentabilidade</p>
          </div>
        </div>

        <div className="empresa-talents-section">
          <div className="empresa-section-header">
            <h2 className="empresa-section-title">
              <User size={32} />
              Talentos Disponíveis
            </h2>
            <p className="empresa-section-subtitle">
              {studentsData.length} candidatos prontos para o mercado
            </p>
          </div>
          
          <div className="empresa-talents-list">
            {studentsData.map(student => (
              <div key={student.id} className="empresa-talent-card">
                <div className="empresa-talent-top">
                  <div className="empresa-talent-photo-wrapper">
                    {student.photo ? (
                      <img src={student.photo} alt={student.name} className="empresa-talent-photo" />
                    ) : (
                      <div className="empresa-talent-avatar">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  
                  <div className="empresa-talent-info">
                    <h3 className="empresa-talent-name">{student.name}</h3>
                    <div className="empresa-talent-meta">
                      <span className="empresa-meta-item">
                        <Calendar size={16} />
                        {student.age} anos
                      </span>
                      <span className="empresa-meta-item">
                        <MapPin size={16} />
                        {student.location}
                      </span>
                    </div>
                    <p className="empresa-talent-bio">{student.bio}</p>
                  </div>
                </div>

                <div className="empresa-talent-stats-row">
                  <div className="empresa-stat-box">
                    <Award size={24} className="empresa-stat-icon" />
                    <div>
                      <div className="empresa-stat-value">{student.completedCourses}</div>
                      <div className="empresa-stat-label">Cursos</div>
                    </div>
                  </div>
                  <div className="empresa-stat-box">
                    <Briefcase size={24} className="empresa-stat-icon" />
                    <div>
                      <div className="empresa-stat-value">{student.portfolio.length}</div>
                      <div className="empresa-stat-label">Projetos</div>
                    </div>
                  </div>
                  <div className="empresa-stat-box">
                    <FileText size={24} className="empresa-stat-icon" />
                    <div>
                      <div className="empresa-stat-value">{student.skills.length}</div>
                      <div className="empresa-stat-label">Skills</div>
                    </div>
                  </div>
                </div>

                <div className="empresa-talent-section">
                  <h4 className="empresa-subsection-title">Principais Habilidades</h4>
                  <div className="empresa-skills-flex">
                    {student.skills.slice(0, 6).map((skill, idx) => (
                      <span key={idx} className="empresa-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="empresa-talent-section">
                  <h4 className="empresa-subsection-title">Portfólio em Destaque</h4>
                  {student.portfolio.slice(0, 2).map((project, idx) => (
                    <div key={idx} className="empresa-project-item">
                      <div className="empresa-project-header">
                        <FileText size={18} />
                        <h5>{project.title}</h5>
                      </div>
                      <p className="empresa-project-desc">{project.description}</p>
                      <div className="empresa-project-footer">
                        <span className="empresa-project-tag">{project.course}</span>
                        <span className="empresa-project-impact">{project.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="empresa-talent-contact">
                  <div className="empresa-contact-item">
                    <Mail size={18} />
                    <span>{student.email}</span>
                  </div>
                  <div className="empresa-contact-item">
                    <Phone size={18} />
                    <span>{student.phone}</span>
                  </div>
                  <div className="empresa-contact-item">
                    <Briefcase size={18} />
                    <span>Disponível: {student.availability}</span>
                  </div>
                </div>

                <div className="empresa-talent-actions">
                  <button 
                    onClick={() => handleViewPortfolio(student.id)} 
                    className="empresa-btn-primary"
                  >
                    Ver Portfólio Completo
                  </button>
                  <button className="empresa-btn-secondary">
                    Entrar em Contato
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="empresa-footer">
        <div className="empresa-footer-content">
          <div className="empresa-footer-col">
            <img src={logofull} alt="Conecta Talento" className="empresa-footer-logo" />
            <p className="empresa-footer-text">A Ponte para o Primeiro Emprego</p>
          </div>
          <div className="empresa-footer-col">
            <h4>Para Empresas</h4>
            <a href="#">Encontrar Talentos</a>
            <a href="#">Parcerias</a>
            <a href="#">Vagas</a>
          </div>
          <div className="empresa-footer-col">
            <h4>Sobre</h4>
            <a href="#">ODS 4</a>
            <a href="#">Sustentabilidade</a>
            <a href="#">Contato</a>
          </div>
        </div>
        <div className="empresa-footer-bottom">
          <p>&copy; 2026 Conecta Talento - Preparando jovens para o futuro do trabalho</p>
          <p className="empresa-footer-ods">ODS 4 - Educação de Qualidade • Meta 4.4</p>
        </div>
      </footer>
    </div>
  );
}

export default EmpresaHome;