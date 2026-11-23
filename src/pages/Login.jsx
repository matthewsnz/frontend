function Login() {
  return (
    <div>
      <h1>Iniciar sesion</h1>

      <form>
        <input type="email" placeholder="Correo electronico" />
        <input type="password" placeholder="Contrasena" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;