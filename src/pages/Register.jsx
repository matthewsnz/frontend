
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Crear una cuenta</h1>
        <p className="auth-description">
          Registrate para descubrir nuestros juegos de mesa
        </p>

        <form>
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Introduce tu nombre"
            required
          />

          <label>Correo electronico</label>
          <input
            type="email"
            placeholder="Introduce tu correo"
            required
          />

          <label>Contrasena</label>
          <input
            type="password"
            placeholder="Crea una contrasena"
            required
          />

          <button type="submit">Crear cuenta</button>
        </form>

        <p className="auth-link">
          ¿Ya tienes una cuenta?
          <Link to="/login"> Inicia sesion</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
