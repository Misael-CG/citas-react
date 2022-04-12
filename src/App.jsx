import Headers from "./componets/Headers";
import Formulario from "./componets/Formulario";
import ListadoPacientes from "./componets/ListadoPacientes";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Headers />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
