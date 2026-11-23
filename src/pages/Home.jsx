
import { Link } from 'react-router-dom';

function Home() {
  const productos = [
    { id: 1, nombre: "Catan", precio: 35, categoria: "Estrategia", emoji: "🏝️" },
    { id: 2, nombre: "Dixit", precio: 30, categoria: "Creatividad", emoji: "🎨" },
    { id: 3, nombre: "Carcassonne", precio: 28, categoria: "Estrategia", emoji: "🏰" },
    { id: 4, nombre: "Virus", precio: 15, categoria: "Cartas", emoji: "🦠" }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">TU TIENDA DE JUEGOS DE MESA</span>

          <h1>Los mejores momentos empiezan jugando</h1>

          <p>
            Descubre nuevos juegos, comparte experiencias
            y disfruta de grandes partidas con los tuyos.
          </p>

          <Link to="/register" className="hero-button">
            Crear una cuenta
          </Link>
        </div>

        <div className="hero-image">
          🎲
        </div>
      </section>

      <section className="catalogo">
        <div className="catalogo-titulo">
          <div>
            <h2>Nuestros juegos</h2>
            <p>Encuentra tu proximo juego favorito.</p>
          </div>
        </div>

        <div className="productos">
          {productos.map((producto) => (
            <div className="producto" key={producto.id}>
              <div className="producto-imagen">
                {producto.emoji}
              </div>

              <span className="producto-categoria">
                {producto.categoria}
              </span>

              <h3>{producto.nombre}</h3>

              <div className="producto-pie">
                <strong>{producto.precio} €</strong>
                <button>Ver producto</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-info">
        <h2>¿Por que elegir BitBazar?</h2>
        <p>
          Queremos que encuentres juegos para todos los gustos,
          desde partidas familiares hasta grandes desafios de estrategia.
        </p>
      </section>
    </div>
  );
}

export default Home;
