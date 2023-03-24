import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './styles/App.scss';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';
import Blog from './pages/Blog';
import ChiSono from './pages/ChiSono'; 
import Home from './pages/Home';
import Contatti from './pages/Contatti';

const App = () => {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route exact path = '/Chi-Sono' element={<ChiSono/>}/>
        <Route exact path = '/Blog' element={<Blog/>}/>
        <Route exact path = '/Contatti' element={<Contatti/>}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
