import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create from "./pages/Create";
import Login from "./pages/Login";
import Formulir from './pages/Formulir';
import Formulir2 from './pages/Formulir2';




function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/formulir' element={<Formulir />}/>
                <Route path='/create' element={<Create />}/>
                <Route path='/formulir2' element={<Formulir2 />}/>
            </Routes>
        </Router>
    );
}

export default App;