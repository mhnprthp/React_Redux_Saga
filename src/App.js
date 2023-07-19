import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Dashboard></Dashboard>}>  
      </Route>
    </Routes>
   
    </BrowserRouter>
      
    </div>
  );
}

export default App;
