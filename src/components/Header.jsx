import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';
import logo from '../assets/logo.png';
import './Header.css';

function Header({ userName, userEmail, userType = 'aluno', showUserInfo = true }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (userType === 'aluno') {
      navigate('/aluno/home');
    } else if (userType === 'empresa') {
      navigate('/empresa/home');
    } else {
      navigate('/');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header className="main-header">
      <div className="main-header-content">
        <div className="main-header-logo" onClick={handleLogoClick}>
          <img src={logo} alt="Conecta Talento" className="main-header-logo-img" />
          <span className="main-header-logo-text">
            <span className="text-blue">Conecta</span>
            <span className="text-green"> Talento</span>
          </span>
        </div>
        
        <div className="main-header-right">
          {showUserInfo && userName && (
            <div className="main-header-user">
              <div className="main-header-user-avatar">
                <User size={20} />
              </div>
              <div className="main-header-user-info">
                <p className="main-header-user-name">{userName}</p>
                {userEmail && <p className="main-header-user-email">{userEmail}</p>}
              </div>
            </div>
          )}
          
          <button onClick={handleLogout} className="main-header-logout-btn">
            <LogOut size={18} />
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;