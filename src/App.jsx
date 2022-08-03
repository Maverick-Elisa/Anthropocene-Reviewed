import './App.css';
import logo from './logo.png';
import cover from './cover.png';
import events from './events.png';
import hawking from './hawking.png';
import calendar from './calendar.png';
import thumbnail from './thumbnail.png';

function App() {
  return (
    <div>
      <header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ height: '40px', width: '27px' }} src={logo} />
          <span
            style={{
              fontFamily: 'Oswald',
              marginLeft: '1rem'
            }}
          >
            Anthropocene
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <nav>Home</nav>
          <nav style={{ marginLeft: '1rem' }}>Corners</nav>
          <nav style={{ marginLeft: '1rem' }}>About Us</nav>
        </div>
      </header>
      <main style={{ width: '100%' }}>
        <section
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            backgroundImage: `url(${cover})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        >
          <h1
            style={{
              lineHeight: 1.4,
              fontSize: '60pt',
              fontWeight: 'normal',
              fontFamily: 'Oswald',
              textAlign: 'center',
              borderBottom: '0.7rem solid rgba(255,82,82,1)'
            }}
          >
            Anthropocene
          </h1>
        </section>
        <section
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            backgroundImage: `url(${events})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            padding: '2rem'
          }}
        >
          <div style={{ width: 'CALC(50% - 1rem)' }}>
            <div>
              <span style={{ fontFamily: 'Oswald', fontSize: '2rem', textDecoration: 'underline' }}>This month's scientist</span>
            </div>
            <div style={{ padding: '1rem' }}>
              <span style={{ fontFamily: 'Droid Sans', textDecoration: 'underline' }}>Steven Hawking</span>
            </div>
            <div style={{ width: '100%' }}>
              <img style={{ width: '100%' }} src={hawking} />
            </div>
          </div>
          <div style={{ width: 'CALC(50% - 1rem)', marginLeft: '2rem' }}>
            <div>
              <span style={{ fontFamily: 'Oswald', fontSize: '2rem' }}>Other Stuff</span>
            </div>
            <div style={{ width: '100%' }}>
              Something something something bla bla bla bla bla
            </div>
            <div style={{ width: '100%', marginTop: '1rem' }}>
              <span>Screenshot of a calendar</span>
              <img style={{ width: '100%' }} src={calendar} />
            </div>
          </div>
        </section>
        <section
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem'
          }}
        >
          <div style={{ width: '33%', border: '1px solid rgba(0,0,0,0.1)' }}>
            <a style={{ width: '100%', textDecoration: 'none' }} href="https://www.sciencealert.com/a-new-shortest-unit-of-time-has-just-been-measured-it-s-a-zeptosecond" target="_blank">

              <img style={{ width: '100%' }} src={thumbnail} />
              <div style={{ width: '100%', padding: '0.5rem' }}>
                <span style={{ color: 'rgba(243,79,76,1)' }}>Scientists Measure The Shortest Length of Time Ever: Zeptoseconds</span>
                <div style={{ marginTop: '0.5rem' }}>
                  <span style={{ color: 'rgba(33,33,33,1)' }}>
                    Scientists have measured the shortest unit of time ever: the time it takes a light particle to cross a hydrogen molecule.
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div style={{ width: '33%', border: '1px solid rgba(0,0,0,0.1)', marginLeft: '1rem' }}>
            <a style={{ width: '100%', textDecoration: 'none' }} href="https://www.sciencealert.com/a-new-shortest-unit-of-time-has-just-been-measured-it-s-a-zeptosecond" target="_blank">

              <img style={{ width: '100%' }} src={thumbnail} />
              <div style={{ width: '100%', padding: '0.5rem' }}>
                <span style={{ color: 'rgba(243,79,76,1)' }}>Scientists Measure The Shortest Length of Time Ever: Zeptoseconds</span>
                <div style={{ marginTop: '0.5rem' }}>
                  <span style={{ color: 'rgba(33,33,33,1)' }}>
                    Scientists have measured the shortest unit of time ever: the time it takes a light particle to cross a hydrogen molecule.
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
