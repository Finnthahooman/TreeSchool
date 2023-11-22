import logo from './logo.svg';
import './App.css';
//import HelloWorld from './components/HelloWorld.js';
//import CityList from './components/CityList.js';
import Sections from './components/Sections.js';
function App() {
  return (
    
    <body>
      <Sections childrens={<p>Mario</p>}> 
        <h1> Za Warudo </h1>
      </Sections>
      
    </body>

  );
}

export default App;