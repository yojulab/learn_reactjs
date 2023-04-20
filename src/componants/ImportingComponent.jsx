import '../App.css'
import Gallery from './Gallery';

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

function App() {
  const today = new Date();

  return (
    <div className="App">
      <h2>To Do List for {formatDate(today)}</h2>
      <h2>Hedy Lamarr's Todos</h2>
      <Gallery />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  )
}

export default App
