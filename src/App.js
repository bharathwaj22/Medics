
import './App.css';
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
     <Router></Router>
     </BrowserRouter>
    </div>
  );
}

export default App;
