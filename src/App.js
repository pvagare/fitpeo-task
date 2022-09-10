import './App.css';
import Layout from './Layout/Layout';
import './css/style.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout></Layout>

      </Router>
    </div>
  );
}

export default App;
