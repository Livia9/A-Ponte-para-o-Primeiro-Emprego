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

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Histórias de Sucesso</h2>
          <p className="section-subtitle">Jovens que transformaram aprendizado em oportunidades</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card testimonial-blue">
              <div className="testimonial-author">
                <div className="author-avatar">M</div>
                <div>
                  <div className="author-name">Maria Silva</div>
                  <div className="author-role">Contratada como Designer Jr.</div>
                </div>
              </div>
              <p className="testimonial-text">
                "O desafio de criar uma campanha ambiental me ensinou mais sobre comunicação do que qualquer aula teórica. Mostrei meu portfólio na entrevista e fui contratada!"
              </p>
              <div className="testimonial-badge">
                <CheckCircle2 size={16} />
                Empregada em 2 semanas
              </div>
            </div>

            <div className="testimonial-card testimonial-green">
              <div className="testimonial-author">
                <div className="author-avatar author-green">J</div>
                <div>
                  <div className="author-name">João Santos</div>
                  <div className="author-role">Dev em startup sustentável</div>
                </div>
              </div>
              <p className="testimonial-text">
                "Aprendi a trabalhar em equipe desenvolvendo um sistema de coleta seletiva. A empresa adorou ver que eu entendo de ESG além de programação."
              </p>
              <div className="testimonial-badge">
                <CheckCircle2 size={16} />
                Primeiro emprego tech
              </div>
            </div>

            <div className="testimonial-card testimonial-green">
              <div className="testimonial-author">
                <div className="author-avatar author-purple">A</div>
                <div>
                  <div className="author-name">Ana Costa</div>
                  <div className="author-role">Analista ESG Jr.</div>
                </div>
              </div>
              <p className="testimonial-text">
                "Os vídeos-desafios me prepararam para as entrevistas. Chegava confiante sabendo que tinha projetos reais para mostrar. Fez toda a diferença!"
              </p>
              <div className="testimonial-badge">
                <CheckCircle2 size={16} />
                Salário acima da média
              </div>
            </div>
          </div>
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