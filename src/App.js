import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <PageWrapper>
          <Route exact path="/" component={Home} />
          <Route path="/a" render={() => {
            return(
              <h1>I am /a route</h1>
            )
          }} />
          <Route path="/ab" render={() => {
            return(
              <h1>I am /ab route</h1>
            )
          }} />
          <Route path="/about" render={() => {
            return(
              <h1>I am /about route</h1>
            )
          }} />
          {/* <h1>this is home</h1> */}
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
