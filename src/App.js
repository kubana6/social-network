import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';



const App = () => {
  return (
    <div className='app-wrapper'>
     <Header/>
     <Navbar/> 
     <div className='app-wrapper-content'>
     <Dialogs/>
     </div>
     {/* <Profile/> */}
    </div>

  );
}




export default App;