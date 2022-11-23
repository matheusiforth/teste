import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

export function App() {

  const [dadosDigitados, setDadosDigitados] = useState('')
  console.log(dadosDigitados)

  function Limpa(ev) {
    ev.preventDefault();
    setDadosDigitados('');
  }


  return (
    <div >
      <h1>teste</h1>

      <div style={{ width: '80vw', height: '80vh' }}>

        <input
          type="text"
          value={dadosDigitados}
          onChange={(e) => setDadosDigitados(e.target.value)} />

        <Button onClick={Limpa} type='reset'>limpa</Button>

      </div>
    </div>
  )
}
