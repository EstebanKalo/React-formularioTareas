import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import "bootstrap/dist/css/bootstrap.min.css";
import FormTareas from './components/FormTareas';

function App() {
  return (
    <>
    <Titulo></Titulo>
    <Subtitulo comision= "16i" estado={true}/>
    <FormTareas/>
    </>
 );
}

export default App;
