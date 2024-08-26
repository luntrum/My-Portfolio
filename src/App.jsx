import './App.css';
import 'fontisto/css/fontisto/fontisto.min.css';
import MyHeader from './components/MyHeader';
import MyHomeSection from './components/MyHomeSection';
import MyProject from './components/MyProject';
import MyHobby from './components/MyHobby';
import MyContact from './components/MyContact';
import MyKnowledge from './components/MyKnowledge';

function App() {
  return (
    <div>
      <MyHeader />
      <MyHomeSection />
      <hr className="mx-auto  h-1 rounded-full w-1/2 bg-black dark:bg-white" />
      <MyKnowledge />
      <hr className="mx-auto  h-1 rounded-full w-1/2 bg-black dark:bg-white" />
      <MyProject />
      <hr className="mx-auto  h-1 rounded-full w-1/2 bg-black dark:bg-white" />
      <MyHobby />
      <MyContact />
    </div>
  );
}

export default App;
