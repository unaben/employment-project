
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
      </header>
      <main className=''>
        <header className='main-header'></header>
        <section className='main-container'>
          <div className='three-column-grid-container'>
            <div className='child-container'></div>
            <div className='child-container'></div>
            <div className='child-container'></div>
          </div>
          <section className='table-container'>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Player Name</th>
                  <th>Games Played</th>
                  <th>Total Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
