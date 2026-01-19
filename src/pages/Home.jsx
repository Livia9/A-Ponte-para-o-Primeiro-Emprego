import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Briefcase, Target, Award, TrendingUp, ArrowRight } from 'lucide-react';
import logofull from '../assets/logofull.jpg';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <img src={logofull} alt="Conecta Talento" className="logo-full" />
          <div className="header-buttons">
            <button onClick={() => navigate('/login/aluno')} className="btn-header-outline">
              Entrar
            </button>
            <button onClick={() => navigate('/login/aluno')} className="btn-header-primary">
              Começar Grátis
            </button>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Desenvolva as habilidades que o mercado procura
          </h1>
          <p className="hero-subtitle">
            Aprenda soft skills essenciais através de desafios práticos de sustentabilidade 
            e construa um portfólio verificado para o seu primeiro emprego
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/login/aluno')} className="btn-hero-primary">
              <Users size={20} />
              Sou Aluno
              <ArrowRight size={20} />
            </button>
            <button onClick={() => navigate('/login/empresa')} className="btn-hero-secondary">
              <Briefcase size={20} />
              Sou Empresa
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title-home">Por que escolher o Conecta Talento?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <BookOpen className="feature-icon blue" size={48} />
            <h3 className="feature-title">Cursos Práticos</h3>
            <p className="feature-description">
              Aprenda fazendo. Desenvolva soft skills através de desafios reais de sustentabilidade
            </p>
          </div>
          <div className="feature-card">
            <Award className="feature-icon green" size={48} />
            <h3 className="feature-title">Portfólio Verificado</h3>
            <p className="feature-description">
              Construa um portfólio com evidências práticas das suas habilidades
            </p>
          </div>
          <div className="feature-card">
            <Briefcase className="feature-icon blue" size={48} />
            <h3 className="feature-title">Conexão com Empresas</h3>
            <p className="feature-description">
              Seja descoberto por recrutadores procurando profissionais como você
            </p>
          </div>
          <div className="feature-card">
            <Target className="feature-icon green" size={48} />
            <h3 className="feature-title">Desafios Sustentáveis</h3>
            <p className="feature-description">
              Aplique seus conhecimentos em projetos de impacto social e ambiental
            </p>
          </div>
          <div className="feature-card">
            <TrendingUp className="feature-icon blue" size={48} />
            <h3 className="feature-title">Desenvolvimento Real</h3>
            <p className="feature-description">
              Habilidades validadas pelo mercado para o primeiro emprego
            </p>
          </div>
          <div className="feature-card">
            <Users className="feature-icon green" size={48} />
            <h3 className="feature-title">100% Gratuito</h3>
            <p className="feature-description">
              Acesso completo a todos os cursos e recursos sem custos
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid-home">
          <div className="stat-home">
            <div className="stat-number-home blue">6+</div>
            <div className="stat-label-home">Cursos Disponíveis</div>
          </div>
          <div className="stat-home">
            <div className="stat-number-home green">100%</div>
            <div className="stat-label-home">Prático</div>
          </div>
          <div className="stat-home">
            <div className="stat-number-home blue">0</div>
            <div className="stat-label-home">Custo</div>
          </div>
          <div className="stat-home">
            <div className="stat-number-home green">ODS 4</div>
            <div className="stat-label-home">Alinhado</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Pronto para começar sua jornada?</h2>
          <p className="cta-subtitle">
            Desenvolva as habilidades que faltam no seu currículo e conquiste seu primeiro emprego
          </p>
          <button onClick={() => navigate('/login/aluno')} className="btn-cta">
            Criar Conta Grátis
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img src={logofull} alt="Conecta Talento" className="footer-logo" />
            <p className="footer-text">A Ponte para o Primeiro Emprego</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Para Alunos</h4>
            <a href="#" className="footer-link">Cursos</a>
            <a href="#" className="footer-link">Como funciona</a>
            <a href="#" className="footer-link">Portfólio</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Para Empresas</h4>
            <a href="#" className="footer-link">Encontrar Talentos</a>
            <a href="#" className="footer-link">Parcerias</a>
            <a href="#" className="footer-link">Vagas</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Sobre</h4>
            <a href="#" className="footer-link">ODS 4</a>
            <a href="#" className="footer-link">Sustentabilidade</a>
            <a href="#" className="footer-link">Contato</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Conecta Talento - Preparando jovens para o futuro do trabalho</p>
          <p className="footer-ods">ODS 4 - Educação de Qualidade • Meta 4.4 - Competências para o emprego</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;