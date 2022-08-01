import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div>
      <header>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img style={{ height: '40px', width: '27px' }} src={logo} />
          <span
            style={{
              fontFamily: 'Oswald',
              marginLeft: '1rem' }}
          >
            Anthropocene
          </span>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <nav>Home</nav>
          <nav style={{marginLeft: '1rem'}}>Corners</nav>
          <nav style={{marginLeft: '1rem'}}>About Us</nav>
        </div>
      </header>
      <main>
        this is main
      </main>
    </div>
  );
}

export default App;
