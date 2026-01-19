
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/CourseDetails.css';
import { coursesData } from '../components/data/courses';

function CourseDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="course-details-container">
        <div className="error-message">
          <h2>Curso não encontrado</h2>
          <button onClick={() => navigate('/aluno/home')} className="btn-back">
            Voltar para Home
          </button>
        </div>
      </div>
    );
  }

  const handleStartCourse = () => {
    alert('Curso iniciado! Em breve você terá acesso ao conteúdo.');
    navigate('/aluno/home');
  };

  const handleContinueCourse = () => {
    alert('Continuando curso...');
  };

  return (
    <div className="course-details-container">
      <header className="header">
        <div className="header-content">
          <div className="logo-header">
            <div className="logo-icon-small">CT</div>
            <span className="logo-text-header">
              <span className="text-blue">Conecta</span>
              <span className="text-green"> Talento</span>
            </span>
          </div>
          
          <button onClick={() => navigate('/aluno/home')} className="btn-back-header">
            ← Voltar
          </button>
        </div>
      </header>

      <main className="course-details-main">
        <div className="course-hero">
          <div className="course-hero-content">
            <div className="breadcrumb">
              <span onClick={() => navigate('/aluno/home')} className="breadcrumb-link">Home</span>
              <span className="breadcrumb-separator">/</span>
              <span>Cursos</span>
              <span className="breadcrumb-separator">/</span>
              <span>{course.title}</span>
            </div>

            <h1 className="course-hero-title">{course.title}</h1>
            <p className="course-hero-description">{course.description}</p>

            <div className="course-meta">
              <div className="meta-item">
                <span className="meta-label">Dificuldade:</span>
                <span className={`badge ${course.difficulty === 'Iniciante' ? 'green-badge' : course.difficulty === 'Intermediário' ? 'blue-badge' : 'purple-badge'}`}>
                  {course.difficulty}
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">⏱️</span>
                <span>{course.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📚</span>
                <span>{course.modules} módulos</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">👥</span>
                <span>{course.students} alunos</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">⭐</span>
                <span>{course.rating}/5.0</span>
              </div>
            </div>

            {course.status === 'nao_iniciado' && (
              <button onClick={handleStartCourse} className="btn-start-course">
                Iniciar Curso
              </button>
            )}
            {course.status === 'em_andamento' && (
              <button onClick={handleContinueCourse} className="btn-continue-course">
                Continuar Curso ({course.progress}% completo)
              </button>
            )}
            {course.status === 'concluido' && (
              <div className="completed-badge">
                ✓ Curso Concluído
              </div>
            )}
          </div>
        </div>

        <div className="course-content">
          <section className="course-section">
            <h2 className="section-title-details">Sobre o Curso</h2>
            <p className="section-text">{course.longDescription}</p>
            <div className="instructor-info">
              <span className="meta-icon">👨‍🏫</span>
              <span>Instrutor: {course.instructor}</span>
            </div>
          </section>

          <section className="course-section">
            <h2 className="section-title-details">🎯 Desafio de Sustentabilidade</h2>
            <div className="sustainability-highlight">
              <p>{course.sustainability}</p>
            </div>
          </section>

          <section className="course-section">
            <h2 className="section-title-details">Habilidades que você vai desenvolver</h2>
            <div className="skills-grid">
              {course.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <span className="skill-check">✓</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="course-section">
            <h2 className="section-title-details">Conteúdo do Curso</h2>
            <div className="modules-list">
              {course.modulesDetails.map((module, idx) => (
                <div key={module.id} className="module-item">
                  <div className="module-header">
                    <div className="module-number">{idx + 1}</div>
                    <div className="module-info">
                      <h3 className="module-title">{module.title}</h3>
                      <div className="module-meta">
                        <span>{module.lessons} aulas</span>
                        <span className="separator">•</span>
                        <span>{module.duration}</span>
                      </div>
                    </div>
                    {module.completed && (
                      <div className="module-completed">✓</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default CourseDetails;