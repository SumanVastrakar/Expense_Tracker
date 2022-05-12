import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Header from './components/Header';
import {Routes, Route} from "react-router-dom";
import AddExpenses from './pages/home/AddExpenses';
import Footer from './components/Footer';

function App() {
  return (
   <>
      <Header/>
   <Routes>

   <Route path="/" element={<Home></Home>}></Route>
   <Route path="/addExpenses" element={<AddExpenses/>}></Route>


   </Routes>
<Footer/>
   
   </>
  );
}

export default App;
