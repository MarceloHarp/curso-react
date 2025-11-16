import './App.css';
import { useState } from 'react';

function Header() {
  return (
    <header>
      <h1>Juego de Adivinanza</h1>
    </header>
  );
}

function Juego({ maximo }) {
  // TODO: Crear estados con useState para:
  // - numeroJugador (el número que ingresa el jugador)
  // - numeroMaquina (el número aleatorio generado)
  // - resultado (el mensaje de resultado)
  // - esCorrecto (booleano para indicar si adivinó o no)

  // TODO: Crear una función para manejar el cambio del input (actualizar numeroJugador)
  // Pista: usa e.target.value y recuerda convertirlo a número.

  // TODO: Crear una función para verificar el número
  // - Si el número del jugador es igual al número aleatorio => mostrar mensaje de acierto
  // - Si no => mostrar mensaje de error
  // - Siempre generar un nuevo número aleatorio con Math.floor(Math.random() * maximo) + 1

  const [numeroJugador, setNumeroJugador] = useState('');
  const [numeroMaquina] = useState(() => Math.floor(Math.random() * maximo) + 1);
  const [resultado, setResultado] = useState('');
  const [mostrarReintento, setMostrarReintento] = useState(false);

  const ResultadoAdivinanza = () => {
    const intento = parseInt(numeroJugador, 10);
    if (intento === numeroMaquina) {
      setResultado('¡Correcto! Adivinaste el número ');
    } else {
      setResultado('Como dijo José Luis Félix Chilavert... Tú no has ganado nada!.');
    }
    setMostrarReintento(true);
  };
  const reiniciarJuego = () => {
    setNumeroJugador('');
    setResultado('');
    setMostrarReintento(false);
  };



  return (
    <div>
      <form>
        {/* TODO: Input controlado para ingresar el número */}
        <input
          type="number"
          min="1"
          max={maximo}
          placeholder="Ingresa un número del 1 al 10"
          value={numeroJugador}
          onChange={(e) => setNumeroJugador(Number(e.target.value))}
        />
        <button type="button" onClick={ResultadoAdivinanza} >Probar mi suerte</button>
      </form>
       {resultado && (
        <div className={`resultado ${resultado.includes('Correcto') ? 'acierto' : 'error'}`}>
        </div>
      )}
       {resultado && !resultado.includes('Correcto') && (
        <img
          src="/chila.jpg"
          alt="Fallaste"
          style={{ width: '200px', marginTop: '10px' }}
        />
      )}

      {/* TODO: Mostrar el resultado con una clase dinámica si adivinó */}
      <div className="resultado" >
        <strong>{resultado}</strong>
      </div>
      {mostrarReintento && (
        <button type="button" onClick={reiniciarJuego}>Volver a intentarlo</button>)}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Juego maximo={10} />
      <footer>¡Intenta adivinar el número entre 1 y 10!</footer>
    </div>

  );
}

export default App;

