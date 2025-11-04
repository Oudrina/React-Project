import './App.css';

import Navbar from './containers/navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import SingleEvent from './components/SingleEvent/SingleEvent';


function App() {
  return (
    <div className="App">

       <Navbar />
         
            <Routes>
              <Route path='/' element={ <Homepage />} />
              <Route  path='/eventPage' element={<MainPage />} />
              <Route path='/event/:id' element={<SingleEvent />} />
            </Routes>


        <Footer />
    </div>
  );
}

export default App;
