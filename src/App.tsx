import { useEffect, useState } from 'react';
import Main from './pages/main/main';

//maybe set id direct into body
// let height = window.innerHeight;
// let width = window.innerWidth;
interface keyChange { 
  value: number,
  counter: number
}


function App(): JSX.Element {

  let [key, setKey]= useState<keyChange>({value:0,counter:0});

    useEffect(() => {
      function handleKeyDown(e: { keyCode: any; }) {
          setKey({value:e.keyCode, counter:1});
      }
      document.addEventListener('keydown', handleKeyDown);
      return function cleanup() {
        document.removeEventListener('keydown', handleKeyDown);
      }
    }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Main value={key.value}/>
    </div>
  );
}

export default App;
