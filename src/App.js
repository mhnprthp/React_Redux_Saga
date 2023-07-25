import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Dashboard></Dashboard>}>  
      </Route>
    </Routes>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </BrowserRouter>
      
    </div>
  );
}

export default App;
