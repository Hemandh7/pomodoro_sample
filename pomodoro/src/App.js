import './App.css';
import TodoApp from './components/TodoApp';
import Navbar from './pages/Navbar';
import PomodoroTimer from "./pages/PomodoroTimer";
import Carousel from './components/Carousel';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Study Tracker Homepage</h1>

      <PomodoroTimer/>
     <TodoApp/>
     <Carousel/>
     <Footer/>
    </div>
  );
}

export default App;
