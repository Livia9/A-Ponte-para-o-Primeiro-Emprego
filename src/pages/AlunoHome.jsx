import { useNavigate } from 'react-router-dom';
import { coursesData } from '../components/data/courses';
import '../styles/AlunoHome.css';
import logo from '../assets/logo.png'


function AlunoHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleViewCourse = (courseId) => {
    navigate(`/aluno/curso/${courseId}`);
  };

  const inProgressCourses = coursesData.filter(c => c.status === 'em_andamento');
  const availableCourses = coursesData.filter(c => c.status === 'nao_iniciado');
  const completedCourses = coursesData.filter(c => c.status === 'concluido');

  const userData = {
    name: "Ana Silva",
    email: "ana.silva@email.com",
    completedCourses: completedCourses.length,
    inProgressCourses: inProgressCourses.length,
    totalSkills: 8,
    portfolioProjects: 2
  };

  return (
    <div className="aluno-container">
      <header className="header">
        <div className="header-content">
          <div className="logo-header">
             <img src={logo} className="logo-icon-small" alt="Logo Conecta Talento"/>
            <span className="logo-text-header">
              <span className="text-blue">Conecta</span>
              <span className="text-green"> Talento</span>
            </span>
          </div>
          
          <div className="user-section">
            <div className="user-info">
              <p className="user-name">{userData.name}</p>
              <p className="user-email">{userData.email}</p>
            </div>
            <button onClick={handleLogout} className="btn-logout">Sair</button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="welcome-section">
          <h1 className="welcome-title">Olá, Ana! 👋</h1>
          <p className="welcome-subtitle">Continue sua jornada de desenvolvimento profissional</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card blue-border">
            <div className="stat-content">
              <p className="stat-label">Cursos em Andamento</p>
              <p className="stat-value">{userData.inProgressCourses}</p>
            </div>
          </div>

          <div className="stat-card green-border">
            <div className="stat-content">
              <p className="stat-label">Cursos Concluídos</p>
              <p className="stat-value">{userData.completedCourses}</p>
            </div>
          </div>

          <div className="stat-card blue-border">
            <div className="stat-content">
              <p className="stat-label">Habilidades</p>
              <p className="stat-value">{userData.totalSkills}</p>
            </div>
          </div>

          <div className="stat-card green-border">
            <div className="stat-content">
              <p className="stat-label">Projetos no Portfólio</p>
              <p className="stat-value">{userData.portfolioProjects}</p>
            </div>
          </div>
        </div>

        {inProgressCourses.length > 0 && (
          <section className="courses-section">
            <h2 className="section-title">Cursos em Andamento</h2>
            <div className="courses-grid">
              {inProgressCourses.map(course => (
                <div key={course.id} className="course-card">
                  <div className="course-header">
                    <h3 className="course-title">{course.title}</h3>
                    <span className="badge blue-badge">{course.progress}%</span>
                  </div>
                  <p className="course-description">{course.description}</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <div className="course-info">
                    <span>{course.modules} módulos</span>
                    <span>{course.duration}</span>
                  </div>
                  <button onClick={() => handleViewCourse(course.id)} className="btn-course">
                    Continuar Curso →
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="courses-section">
          <h2 className="section-title">Cursos Disponíveis</h2>
          <div className="courses-grid-3">
            {availableCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-header">
                  <h3 className="course-title">{course.title}</h3>
                  <span className="badge gray-badge">{course.difficulty}</span>
                </div>
                <p className="course-description">{course.description}</p>
                <div className="sustainability-box">
                  <p className="sustainability-title">🎯 Desafio de Sustentabilidade</p>
                  <p className="sustainability-text">{course.sustainability}</p>
                </div>
                <div className="course-info">
                  <span>{course.modules} módulos</span>
                  <span>{course.duration}</span>
                </div>
                <button onClick={() => handleViewCourse(course.id)} className="btn-course-green">
                  Ver Detalhes
                </button>
              </div>
            ))}
          </div>
        </section>

        {completedCourses.length > 0 && (
          <section className="courses-section">
            <h2 className="section-title">Cursos Concluídos</h2>
            <div className="courses-grid-3">
              {completedCourses.map(course => (
                <div key={course.id} className="course-card completed-card">
                  <div className="course-header">
                    <h3 className="course-title">{course.title}</h3>
                    <span className="completed-check">✓</span>
                  </div>
                  <div className="skills-tags">
                    {course.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <button onClick={() => handleViewCourse(course.id)} className="btn-course">
                    Ver Certificado
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default AlunoHome;