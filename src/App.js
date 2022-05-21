import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap';
import WeightHeight from './components/WeightHeight';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container className="bg-light pt-5 text-left">
        <WeightHeight />
      </Container>
    </div>
  );
}

export default App;
