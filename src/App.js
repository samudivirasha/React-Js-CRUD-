import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpDetails from './EmpDetails';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>React CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/details/:id' element={<EmpDetails />}></Route>
          <Route path='/employee/edit/:id' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
 
}

export default App;
