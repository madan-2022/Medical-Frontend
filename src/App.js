import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from './components/Home'
import AdminPanel from './components/admin/AdminPanel';
import Adminuniversity from './components/admin/Adminuniversity';
import UPUniversities from './components/stateuniversity/UPUniversities';
import Karnataka from './components/stateuniversity/karnataka'
import Meghalaya from './components/stateuniversity/Meghalaya'
import Pondicherry from './components/stateuniversity/Pondicherry';
import Gujarat from './components/stateuniversity/Gujarat';
import Rajasthan from './components/stateuniversity/Rajasthan';
import Assam from './components/stateuniversity/Assam';
import Kerala from './components/stateuniversity/Kerala';
import Sikkim from './components/stateuniversity/Sikkim';
import Goa from './components/stateuniversity/Goa';
import Chandigarh from './components/stateuniversity/Chandigarh';
import Delhi from './components/stateuniversity/Delhi';
import Maharashtra from './components/stateuniversity/Maharashtra';
import CollegePage from './components/Collegepage/CollegePage';
import Footer from './components/Footer/Footer';
import MBBS from './components/Courseuniversity/MBBS';
import MD from './components/Courseuniversity/MD';
import MS from './components/Courseuniversity/MS';
import MCH from './components/Courseuniversity/MCH';
import DM from './components/Courseuniversity/DM';
import DIP from './components/Courseuniversity/DIP';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<AdminPanel/>}/>
        <Route path="/adminuniversity" element={<Adminuniversity/>}/>
        <Route path="/state/UttarPradesh" element={<UPUniversities />} />
        <Route path="/state/Karnataka" element={<Karnataka />} />
        <Route path="/state/Meghalaya" element={<Meghalaya />} />
        <Route path="/state/Pondicherry" element={<Pondicherry />} />
        <Route path="/state/Gujarat" element={<Gujarat />} />
        <Route path="/state/Rajasthan" element={<Rajasthan />} />
        <Route path="/state/Assam" element={<Assam />} />
        <Route path="/state/Sikkim" element={<Sikkim />} />
        <Route path="/state/Goa" element={<Goa />} />
        <Route path="/state/Chandigarh" element={<Chandigarh />} />
        <Route path="/state/Delhi" element={<Delhi />} />
        <Route path="/state/Kerala" element={<Kerala />} />
        <Route path="/state/Maharashtra" element={<Maharashtra/>} />
        <Route path="/colleges/:collegename" element={<CollegePage/>} />
        <Route path='/courses/MBBS' element={<MBBS/>}/>
        <Route path='/courses/MS' element={<MS/>}/>
        <Route path='/courses/MD' element={<MD/>}/>
        <Route path='/courses/MCH' element={<MCH/>}/>
       
        <Route path='/courses/DM' element={<DM/>}/>
        <Route path='/courses/DIP' element={<DIP/>}/>






{/* Add this route */}
             
          
        
          </Routes>
          <Footer/>

      </Router>

      
    </div>
  );
}

export default App;
