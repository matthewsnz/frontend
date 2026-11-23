
import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h2>BitBazar</h2>

        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Registro</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
