import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Pages/Contact';
function App() {
  return (
    <div>
      <Router>
        <PageWrapper>
          <Route exact path="/" component={Home} />
          {/* <Route path="/a" render={() => {return (<h1>I am /a route</h1>)}} /> */}
          {/* <Route path="/ab" render={() => {return (<h1>I am /ab route</h1>)}} /> */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
