import { studentsData } from '../components/data/students';
import { useUser } from '../context/UserProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Users, Briefcase, ArrowLeft, Calendar, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import '../styles/Login.css';

class Student {
  constructor(data) {
    this.id = studentsData.length;
    this.name = data.name || '';
    this.age = data.age || null;
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.location = data.location || '';
    this.photo = data.photo || '../assets/students/default.jpg';
    
    this.education = data.education || '';
    this.availability = data.availability || 'A definir';
    this.bio = data.bio || '';
    
    this.completedCourses = data.completedCourses || 0;
    this.inProgressCourses = data.inProgressCourses || 0;
    this.totalSkills = data.totalSkills || 0;
    this.skills = data.skills || [];
    this.portfolio = data.portfolio || [];
    this.certificates = data.certificates || [];
  }
}

function Login({ userType = 'aluno' }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [availability, setAvailability] = useState('');
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useUser();
  
  
  function handleSubmit(e){
    e.preventDefault();
    if (userType === 'aluno') {
      if (!isLogin) {
        // Cadastro de novo aluno
        const newAluno = new Student({
          name: nome,
          senha: senha,
          age: age,
          phone: phone,
          location: location,
          availability: availability,
          email: email
        });
        
        studentsData.push(newAluno);
        
        // Login automático após cadastro
        login(newAluno, 'aluno');
        navigate('/aluno/home');
      } else {
        // Login de aluno existente
        const alunoEncontrado = studentsData.find(
          aluno => aluno.email === email
        );
        
        if (alunoEncontrado) {
          login(alunoEncontrado, 'aluno');
          navigate('/aluno/home');
        } else {
          alert('Usuário não encontrado!');
        }
      }
    } else {
      navigate('/empresa/home');
    }
  };

  return (
    <div className="login-container">
      <button onClick={() => navigate('/')} className="btn-back-home">
        <ArrowLeft size={20} />
        Voltar
      </button>

      <div className="login-box">
        <div className="logo-section">
          <img src={logo} alt="Conecta Talento" className="logo-icon-img" />
          <h1 className="logo-text">
            <span className="text-blue">Conecta</span>
            <span className="text-green"> Talento</span>
          </h1>
          <p className="subtitle">
            {userType === 'aluno' ? (
              <span className="user-type-badge">
                <Users size={16} />
                Área do Aluno
              </span>
            ) : (
              <span className="user-type-badge empresa">
                <Briefcase size={16} />
                Área da Empresa
              </span>
            )}
          </p>
        </div>

        <div className="tabs">
          <button 
            className={`tab ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Entrar
          </button>
          <button 
            className={`tab ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Cadastrar
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && userType === 'aluno' && (
            <div className="form-group">
              <label>Nome Completo</label>
              <div className="input-with-icon">
                <Users size={20} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="Digite seu nome" 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required 
                />
              </div>
              <label>data de nascimento</label>
              <div className = "input-with-icon">
              	<Calendar size = {20} className="input-icon"/>
              	<input type = "date" placeholder= "digite sua data de nascimento" className = "input-age"/>
              </div>
              <label>numero para contato</label>
              <div className = "input-with-icon">
              	<Phone size = {20} className="input-icon"/>
              	<input type = "number" placeholder= "digite seu número de celular" className = "input-contact"/>
              </div>
            </div>
          )}

          {!isLogin && userType === 'empresa' && (
            <div className="form-group">
              <label>Nome da Empresa</label>
              <div className="input-with-icon">
                <Briefcase size={20} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="Digite o nome da empresa" 
                  value={nomeEmpresa}
                  onChange={(e) => setNomeEmpresa(e.target.value)}
                  required 
                />
              </div>
              <label>segmento</label>
              <div className="input-with-icon">
                <Briefcase size={20} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="declare seu seguimento" 
                  value={nomeEmpresa}
                  onChange={(e) => setNomeEmpresa(e.target.value)}
                  required 
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label>E-mail</label>
            <div className="input-with-icon">
              <Mail size={20} className="input-icon" />
              <input 
                type="email" 
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Senha</label>
            <div className="input-with-icon">
              <Lock size={20} className="input-icon" />
              <input 
                type="password" 
                placeholder="sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required 
              />
            </div>
          </div>

          {isLogin && (
            <div className="forgot-password">
              <a href="#">Esqueceu sua senha?</a>
            </div>
          )}

          <button type="submit" className="btn-primary">
            {isLogin ? 'Entrar' : 'Criar Conta'}
          </button>

          <p className="toggle-text">
            {isLogin ? 'Ainda não tem conta? ' : 'Já tem uma conta? '}
            <button 
              type="button" 
              onClick={() => setIsLogin(!isLogin)}
              className="toggle-link"
            >
              {isLogin ? 'Cadastre-se' : 'Faça login'}
            </button>
          </p>

          <div className="switch-user-type">
            <p>
              {userType === 'aluno' ? 'É uma empresa? ' : 'É um aluno? '}
              <button
                type="button"
                onClick={() => navigate(userType === 'aluno' ? '/login/empresa' : '/login/aluno')}
                className="switch-link"
              >
                Clique aqui
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;