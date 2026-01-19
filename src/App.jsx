import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AlunoHome from './pages/AlunoHome';
import EmpresaHome from './pages/EmpresaHome';
import CourseDetails from './pages/CourseDetails';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/aluno" element={<Login userType="aluno" />} />
        <Route path="/login/empresa" element={<Login userType="empresa" />} />
        <Route path="/aluno/home" element={<AlunoHome />} />
        <Route path="/aluno/portfolio" element={<Portfolio />} />
        <Route path="/aluno/portfolio/:id" element={<Portfolio />} />
        <Route path="/aluno/curso/:id" element={<CourseDetails />} />
        <Route path="/empresa/home" element={<EmpresaHome />} />
      </Routes>
    </Router>
  );
}

export default App;