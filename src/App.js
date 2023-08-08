import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App({category}) {
  return (
    <div className="App mx-14 mr-20 dark:bg-[#1f2937] ">
      <Navbar/>
      <Main category={category} />
      {/* <Banner/> */}
      <Footer/>
    </div>
  );
}

export default App;
