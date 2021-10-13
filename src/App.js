import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/Books';

import Header from './components/Header';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Books} />
        <Route path="/:abbv" component={BookDetails} />
      </Switch>
    </Router>
  );
}

export default App;
