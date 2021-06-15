import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import AboutUs from './containers/AboutUs/AboutUs';
import AllAppointments from './containers/Appointment/admin/AllAppointments';
import AllClients from './containers/Appointment/admin/AllClients';
import CreateAppointmnet from './containers/Appointment/CreateAppointment';
import ClientAppointments from './containers/ClientAppointments/ClientAppointments';
import ClientProfile from './containers/ClientProfile/ClientProfile';
import ClientRegister from './containers/ClientRegister/ClientRegister';
import Clinics from './containers/Clinics/Clinics';
import Contact from './containers/Contact/Contact';
import DentistProfile from './containers/DentistProfile/DentistProfile';
import DentistRegister from './containers/DentistRegister/DentistRegister';
import Dentist from './containers/Dentists/Dentist';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

function App() {
  return (
    <div className="App">

       <BrowserRouter>
          
          <Header/>

          <Switch>
    
           <Route path="/" exact component={Home}/>
           <Route path="/aboutus" exact component={AboutUs}/>
           <Route path="/contact" exact component={Contact}/>
           <Route path="/register" exact component={Register}/>
           <Route path="/login" exact component={Login}/>
           <Route path="/clinics" exact component={Clinics}/>
           <Route path="/dentists" exact component={Dentist}/>
           <Route path="/dentistregister" exact component={DentistRegister}/>
           <Route path="/dentistprofile" exact component={DentistProfile}/>
           <Route path="/clientregister" exact component={ClientRegister}/>
           <Route path="/clientprofile" exact component={ClientProfile}/>
           <Route path="/appointments" exact component = {CreateAppointmnet}/>
           <Route path="/findappointments" exact component = {AllAppointments}/>
           <Route path="/clientappointments" exact component = {ClientAppointments}/>
           <Route path="/clients" exact component = {AllClients}/>
           <Route path="/calendar" exact component = {Calendar}/>
 
    
          </Switch>
        
        </BrowserRouter>

    </div>
  );
}

export default App;
