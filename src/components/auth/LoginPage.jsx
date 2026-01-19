const LoginPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de login
    onLogin('student');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
              <BookOpen className="text-white" size={28} />
            </div>
            <h1 className="text-3xl font-bold">
              <span className="text-blue-600">Conecta</span>
              <span className="text-green-600"> Talento</span>
            </h1>
          </div>
          <p className="text-gray-600">A Ponte para o Primeiro Emprego</p>
        </div>

        {/* Card de Login */}
        <Card hover={false} className="shadow-2xl">
          <div className="mb-6">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 font-medium transition-colors ${
                  isLogin 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Entrar
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 font-medium transition-colors ${
                  !isLogin 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Cadastrar
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <Input
                label="Nome Completo"
                type="text"
                placeholder="Digite seu nome"
                icon={Users}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}

            <Input
              label="E-mail"
              type="email"
              placeholder="seu@email.com"
              icon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Senha"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {isLogin && (
              <div className="flex justify-end mb-4">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                  Esqueceu sua senha?
                </a>
              </div>
            )}

            <Button type="submit" fullWidth className="mb-4">
              {isLogin ? 'Entrar' : 'Criar Conta'}
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? 'Ainda não tem conta? ' : 'Já tem uma conta? '}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  {isLogin ? 'Cadastre-se' : 'Faça login'}
                </button>
              </p>
            </div>
          </form>
        </Card>

        {/* Informações */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">4+</div>
            <div className="text-sm text-gray-600">Cursos</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">100%</div>
            <div className="text-sm text-gray-600">Prático</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">Grátis</div>
            <div className="text-sm text-gray-600">Sempre</div>
          </div>
        </div>
      </div>
    </div>
  );
};
