import logo from './logo.svg';
import './App.css';
import NavigationNew from './components/NavigationNew';
import MainContent from './components/MainContentNew';
import bgBody from './assets/bg.jpg'
import './style.css'


function App() {
  return (
    <body bg={bgBody}>
      <div>
      {/* <NavigationNew/> */}
      {/* <HeroNavbar/> */}
      <NavigationNew/>
      <MainContent/>
    </div>
    </body>
    
  );
}



export default App;
