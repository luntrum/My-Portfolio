import './App.css';
import MyHeader from './components/MyHeader';
import MyHomeSection from './components/MyHomeSection';
import MyProject from './components/MyProject';
import MyHobby from './components/MyHobby';
import 'fontisto/css/fontisto/fontisto.min.css';

function App() {
  return (
    <div>
      <MyHeader />
      <MyHomeSection />
      <hr className="mx-auto my-2 py-1 h-1 rounded-full w-1/2 bg-black dark:bg-white" />
      <MyHobby />
      <hr className="mx-auto my-2 py-1 h-1 rounded-full w-1/2 bg-black dark:bg-white" />
      <MyHobby />
      <hr className="mx-auto my-2 py-1 h-1 rounded-full w-1/2 bg-black dark:bg-white" />
      <MyHobby />
      <MyProject />
    </div>
  );
}

export default App;
