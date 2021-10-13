import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/Books';

import BookDetails from './components/BookDetails';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" exact component={Books} />
        <Route path="/:abbrev" component={BookDetails} />
      </Switch>
    </Router>
  );
}

export default App;
