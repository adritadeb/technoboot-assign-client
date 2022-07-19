import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from "react-router-dom";
import Students from './Pages/Students/Students';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/students' element={<Students></Students>}></Route>
      </Routes>
    </div>
  );
}

export default App;
