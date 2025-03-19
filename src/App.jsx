import { useState } from 'react'

import Tervehdys from './Hello'
import OpiskelijaTiedot from './Opiskeliatiedot'



function App() {

  const opiskelija = { 
    nimi: "Matti Meikäläinen", 
    ika: 16, 
    kurssi: "Reactin perusteet" 
  };
  return (
    <div>
      <Tervehdys name="Matias"/>
      <OpiskelijaTiedot tiedot={opiskelija}/>
    
   
    </div>
  );
}

export default App
