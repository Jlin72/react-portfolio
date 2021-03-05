import Index from './pages/Index';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contact" component={Contact}/>
    </Router>
  );
}

export default App;
