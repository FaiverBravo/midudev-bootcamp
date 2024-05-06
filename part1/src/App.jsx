import Saludo from "./Saludo.jsx"
const Descripcion = () =>{
  return (<p>este es un mensaje para aportar de una decripción</p>)
}


function App  ()  {
  const mensajeApp = "Control" //Variable de mensaje
  const mensaje = "Hola" //Variable de mensaje
  const a = 2
  const b = 4

  return (            
      <div>
        <h1>{mensajeApp} <br />Aplicación para deportistas del Huila </h1>
        <strong>{mensaje + " Estamos trabajando en ello"} </strong> 
        <div><p>El resultado es: {a+b}</p>   
        <Saludo />
        <Descripcion/> 
        </div>
        <div className="App">
            <Saludo color= 'red' message='Estamos trabajando '/>
            <Saludo color= 'green'  message='En un curso '/>
            <Saludo color= 'purple'  message='De React'/>

        </div>
       
        
      </div>
      )
}

export default App
