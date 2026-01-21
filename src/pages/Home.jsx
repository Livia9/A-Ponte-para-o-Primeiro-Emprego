import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Briefcase, Target, Award, TrendingUp, ArrowRight, Leaf, PlayCircle, FileCheck, Video, Building2, Zap, BadgeCheck, CheckCircle2, UserCheck } from 'lucide-react';
import logofull from '../assets/logofull_nullRes.png';
import '../styles/Home.css';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('jovens');

  
  const verificationMethods = [
    { Icon: Video, title: "Vídeo-desafios", desc: "Grave suas apresentações e demonstrações práticas" },
    { Icon: FileCheck, title: "Projetos Reais", desc: "Desenvolva planos e estratégias aplicáveis" },
    { Icon: PlayCircle, title: "Simulações", desc: "Participe de entrevistas e dinâmicas simuladas" },
    { Icon: Award, title: "Portfolio Verificado", desc: "Construa evidências concretas das suas habilidades" }
  ];

  const studentProfiles = [
    {
      name: "Maria Silva",
      role: "Aspirante a Designer",
      skills: ["Comunicação", "Criatividade", "ESG"],
      completedChallenges: 8,
      highlight: "Criou campanha de reciclagem com 85% de engajamento",
      available: true
    },
    {
      name: "João Santos",
      role: "Futuro Desenvolvedor",
      skills: ["Trabalho em Equipe", "Resolução de Problemas", "Sustentabilidade"],
      completedChallenges: 12,
      highlight: "Desenvolveu sistema de coleta inteligente",
      available: true
    },
    {
      name: "Ana Costa",
      role: "Analista em Formação",
      skills: ["Comunicação", "Liderança", "ESG"],
      completedChallenges: 10,
      highlight: "Liderou projeto de redução de desperdício",
      available: false
    }
  ];
const stats = [
  { icon: BadgeCheck, value: "100%", label: "Cursos Práticos" },
  { icon: Zap, value: "Zero", label: "Teoria Entediante" },
  { icon: Users, value: "5k+", label: "Jovens Certificados" },
  { icon: Building2, value: "200+", label: "Empresas Parceiras" }
];
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
            <div className="hero-badge">
              <Leaf size={16} />
              ODS 4 - Meta 4.4 | Sustentabilidade + Empregabilidade
            </div>
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

        <section className="verification">
        <div className="container">
          <div className="verification-content">
            <div className="verification-header">
              <h2>Currículo Verificado, Não Certificado</h2>
              <p>Esqueça PDFs genéricos. Aqui você comprova suas habilidades com evidências concretas que os recrutadores podem ver e validar.</p>
            </div>

            <div className="verification-grid">
              {verificationMethods.map((method, idx) => (
                <div key={idx} className="verification-card">
                  <div className="verification-icon">
                    <method.Icon size={32} />
                  </div>
                  <h3>{method.title}</h3>
                  <p>{method.desc}</p>
                </div>
              ))}
            </div>
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
       <section id="talentos" className="talent-bank">
        <div className="container">
          <div className="talent-header">
            <h2>Banco de Talentos Verificados</h2>
            <p>Conecte-se diretamente com jovens preparados e conscientes</p>
            
            <div className="tabs">
              <button
                onClick={() => setActiveTab('jovens')}
                className={`tab ${activeTab === 'jovens' ? 'active' : ''}`}
              >
                <Users size={20} />
                Para Jovens
              </button>
              <button
                onClick={() => setActiveTab('empresas')}
                className={`tab ${activeTab === 'empresas' ? 'active' : ''}`}
              >
                <Briefcase size={20} />
                Para Empresas
              </button>
            </div>
          </div>

          {activeTab === 'jovens' ? (
            <div className="talent-jovens">
              <div className="jovens-content">
                <div className="jovens-text">
                  <h3>Seu Portfólio Abre Portas</h3>
                  <div className="benefits">
                    <div className="benefit">
                      <div className="benefit-icon benefit-blue">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4>Visibilidade Automática</h4>
                        <p>Ao concluir desafios, seu perfil fica disponível para recrutadores</p>
                      </div>
                    </div>
                    <div className="benefit">
                      <div className="benefit-icon benefit-green">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4>Conexão Direta</h4>
                        <p>Empresas podem ver seus projetos e entrar em contato</p>
                      </div>
                    </div>
                    <div className="benefit">
                      <div className="benefit-icon benefit-purple">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4>Diferencial ESG</h4>
                        <p>Destaque-se mostrando consciência ambiental e social</p>
                      </div>
                    </div>
                  </div>
                  <button className="btn-portfolio">Criar Meu Portfólio</button>
                </div>
                <div className="profile-preview">
                  <div className="profile-header">
                    <h4>Seu Perfil</h4>
                    <span className="verified-badge">
                      <UserCheck size={16} />
                      Verificado
                    </span>
                  </div>
                  <div className="profile-progress">
                    <div className="progress-label">Desafios Concluídos</div>
                    <div className="progress-bar-container">
                      <div className="progress-bar" style={{width: '75%'}}></div>
                    </div>
                    <span className="progress-value">9/12</span>
                  </div>
                  <div className="profile-skills">
                    <div className="skills-label">Soft Skills Verificadas</div>
                    <div className="skills-tags">
                      <span className="skill-tag skill-blue">Comunicação</span>
                      <span className="skill-tag skill-green">Trabalho em Equipe</span>
                      <span className="skill-tag skill-purple">ESG</span>
                    </div>
                  </div>
                  <div className="profile-highlight">
                    <div className="highlight-label">Destaque</div>
                    <div className="highlight-box">
                      🏆 Campanha de reciclagem com 92% de engajamento
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="talent-empresas">
              <div className="empresas-header">
                <h3>Acesse Talentos Diferenciados</h3>
                <p>Encontre jovens com soft skills comprovadas e consciência ESG, prontos para contribuir com sua empresa</p>
              </div>

              <div className="profiles-grid">
                {studentProfiles.map((profile, idx) => (
                  <div key={idx} className="student-card">
                    <div className="student-header">
                      <div>
                        <h4>{profile.name}</h4>
                        <p>{profile.role}</p>
                      </div>
                      {profile.available && (
                        <span className="available-badge">Disponível</span>
                      )}
                    </div>
                    
                    <div className="student-skills">
                      {profile.skills.map((skill, i) => (
                        <span key={i} className="student-skill">{skill}</span>
                      ))}
                    </div>
                    
                    <div className="student-highlight">
                      <strong>✨ Destaque:</strong> {profile.highlight}
                    </div>
                    
                    <div className="student-challenges">
                      {profile.completedChallenges} desafios verificados
                    </div>
                    
                    <button className="btn-view-profile">Ver Portfólio Completo</button>
                  </div>
                ))}
              </div>

              <div className="empresas-cta">
                <h4>Pronto para encontrar talentos?</h4>
                <p>Crie uma conta empresarial e tenha acesso ao banco completo de talentos verificados</p>
                <button className="btn-empresas">Cadastrar Minha Empresa</button>
              </div>
            </div>
          )}
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