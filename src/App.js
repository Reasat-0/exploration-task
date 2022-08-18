import logo from './logo.svg';
// Vendor Imports
import { Container } from "reactstrap"


// Self Imports
import TopBar from './Components/TopBar';
import MainSection from './Components/MainSection'
import Footer from './Components/Footer';


function App() {

  const topBarInfo = {
    name : 'MD Reasat Montasir Chowdhury',
    designation: 'Frontend React Developer',
    email: 'reasat.g8@gmail.com',
    phone : '880-1521484206',
    address : 'Ambia Bhaban, Moulovi Pukur Paar, Chandgaon, Chattogram'
  }
  const footerInfo = {
    name : "International Islamic University Chittagong",
    dept: "Department of Computer Science & Engineering",
    year : 2019
  }
  return (
    <div className="App">
      <Container className='text-center custom-container'>
        <TopBar topBarInfo = {topBarInfo}/>
        <MainSection/>
        <Footer footerInfo={footerInfo}/>
      </Container>
      
    </div>
  );
}

export default App;
