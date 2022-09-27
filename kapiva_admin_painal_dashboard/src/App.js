import logo from './logo.svg';
import './App.css';
import './Custom.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Dashboard from './Component/Admin/Dashboard';
// import HeroBanner from './Component/Admin/HeroBanner';
import Index from './Component/index';
import SearchFilter from './Component/SearchFilter';

function App(props) {
  return (
    <div className="App">
      <Router>
          {/* <Route
          exact
          strict
          component={Dashboard}
          path="/"
          history={props.history}
          />

          <Route
          exact
          strict
          component={HeroBanner}
          path="/HeroBanner"
          history={props.history}
          />
           */}

          <Route
          exact
          strict
          component={Index}
          path="/"
          history={props.history}
          />

          <Route
          exact
          strict
          component={SearchFilter}
          path="/SearchFilter"
          history={props.history}
          />
          
          
      </Router>
    </div>
  );
}

export default App;
