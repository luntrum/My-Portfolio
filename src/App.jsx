import { useState } from 'react';

import './App.css';
import MyHeader from './components/MyHeader';
import MyHomeSection from './components/MyHomeSection';
import MyProject from './components/MyProject';

function App() {
  return (
    <div>
      <MyHeader />
      <MyHomeSection />
      <hr class="mx-auto w-1/2 bg-black dark:bg-white" />
      <MyProject />
    </div>
  );
}

export default App;
