
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './components/Section';
import Section2 from './components/Section2';
import Section1 from './components/Section1';
import Tabsec from './components/Tabsec';
import Practice from './components/Practice';
import Modalsec from './components/Modalsec';
import Todo from './components/Todo';
function App() {
  return (
    <div>
       <Section1 />
      <Section />
      <Section2 />
      <Tabsec /> 
      {/* <Practice /> */}
      {/* <Modalsec /> */}
      <Todo />
    </div>
  );
}

export default App;
