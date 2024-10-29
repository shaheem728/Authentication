import './App.css';
import Login from './routes/login';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
      <Router>
    <Routes>
      <Route path="/login" element={<Login/>} />
    </Routes>
   </Router>
  );
}

export default App;
