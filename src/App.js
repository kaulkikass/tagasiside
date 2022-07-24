import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Tagasiside from './Pages/Tagasiside';
import TagasisideAndjad from './Pages/TagasisideAndjad';
import Tegevused from './Pages/Tegevused';

function App() {
  return (
    <div>
      <Link to='/'>
      <button>Avalehele</button>
      </Link>
      <Link to='/tagasiside'>
      <button>Tagasisidede lehele</button>
      </Link>
      <Link to='/andjad'>
      <button>Vaata, kes tagasisidet on andnud</button>
      </Link>
      <Link to='/andjad'>
      <button>Vaata, kes tagasisidet on andnud</button>
      </Link>
      <Link to='/tegevused'>
      <button>Vaata, mis ülesandeid veel tegema pead</button>
      </Link>
      <Routes>
        <Route path='/' exact element={<div>Tere</div>} />
        <Route path='/tagasiside' exact element={ <Tagasiside /> } />
        <Route path='/andjad' exact element={ <TagasisideAndjad /> } />
        <Route path='/tegevused' exact element={ <Tegevused /> } />
      </Routes>
    </div>
  );
}

export default App;
