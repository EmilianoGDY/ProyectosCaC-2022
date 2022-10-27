
import './App.css';
import Testimonio from './componentes/Testimonio';
import { alumnos } from './utils/alumnos';

function App() {
  
  let contenido = alumnos.map((alumno)=>{
    return(   
    <Testimonio
    nombre={alumno.nombre}
    pais={alumno.pais}
    imagen={alumno.imagen}
    cargo={alumno.cargo}
    empresa={alumno.empresa}
    testimonio={alumno.testimonio}
    />)
  })

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
       
        {contenido}


      </div>
    </div>
  );

}

export default App;
