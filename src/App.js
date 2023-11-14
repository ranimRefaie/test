import './App.css';
import { Route, Routes, createHashRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
function App() {
//   const routes =createHashRouter([{
//     children:[
//       {path:'/' ,element:<Home/>},
//       {path:'/about' ,element:<About/>}
//     ]
//  }])
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
