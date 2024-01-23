import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import MovieSearchApp from './medium.jsx';
import CounterApp from './easy.jsx';
import Navbar from './Components/Navbar/Navbar';
import ToDoApp from './hard.jsx';
// import TaskDetails from './TaskDetails.js';

function App() {
  return (
          <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<CounterApp/>}/>
      <Route path="/movie/*" element={<MovieSearchApp/>} />
      <Route path="/todolist" element={<ToDoApp/>}/>
      {/* <Route path="/task/:taskId" component={<TaskDetails/>} /> */}
      </Routes>
      </Router>
      </div>
  );
}

export default App;
