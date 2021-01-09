import Main from './pages/main/main';

let height = window.innerHeight;
let width = window.innerWidth;

function App() {
  return (
    <div style={{width:width, height: height }}>
      <Main />
    </div>
  );
}

export default App;
