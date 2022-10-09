
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Image from './components/Image';
import Card1 from './components/Card1';
import Workflow from './components/Workflow';
import DataDriven from './components/DataDriven';
import DataDriven1 from './components/DataDriven1';
import Testimonials from './components/Testimonials';
import Card2 from './components/Card2';
import PlaceHolder from './components/PlaceHolder';
import Footer from './components/Footer';


function App() {
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <Image/>
     <Card1/>
     <Workflow/>
     <DataDriven/>
     <DataDriven1/>
     <DataDriven/>
     <Testimonials/>
     <section className='grid lg:grid-cols-3 gap-6 container mx-auto w-5/6 md:grid-cols-2 grid-cols-1'>
      <Card2/>
      <Card2/>
      <Card2/>
     </section>
     <PlaceHolder/>
     <Footer/>
    </>
  );
}

export default App;
