import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div className="bg">
          <Header/>
      </div>
     
    </Router>
  );
}

export default App;
