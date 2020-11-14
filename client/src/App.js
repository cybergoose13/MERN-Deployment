import './App.css';
import { Router, Link } from '@reach/router';
import { Landing } from './Components/Landing';
import { Pirates } from './Components/Pirates';
import { AddPirate } from './Components/AddPirate';
import { ViewPirate } from './Components/ViewPirate';

function App() {
  return (
    <div className="App">
    <Link to="/pirates">pirates</Link>
      <Router>
        <Landing path="/"/>
        <Pirates path="/pirates/"/>
        <AddPirate path= "/pirate/new"/>
        <ViewPirate path= "/pirate/:id" />
      </Router>
    </div>
  );
}

export default App;
