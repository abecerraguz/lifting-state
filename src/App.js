import React from 'react';
import Wrapper from './components/Wrapper';

/*

Dependiendo de cómo elija dividir la arquitectura de su componente, puede haber notado las siguientes tres unidades lógicas: (1) un contenedor para contener tanto la entrada como la lista filtrada, (2) un componente para la entrada y (3) un componente para representar la lista filtrada. El desafío surge cuando la entrada y la lista filtrada necesitan compartir algún estado. Como son hermanos, no pueden comunicarse directamente entre sí. Además de una solución de gestión de estado global, el único medio que tenemos para propagar el estado es pasarlo a través de accesorios. Como los hermanos no pueden comunicarse directamente, lo que sí podemos hacer es "levantar" el estado; es decir, podemos alojar el estado en el componente contenedor y pasarlo a cada uno de los dos hijos: la entrada y la lista filtrada.

Se define en la APP el contenedor con las props

*/

function App() {
  return (
    <div className="App">
      <Wrapper items={['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react', 'javascript']}/>
    </div>
  );
}
export default App;