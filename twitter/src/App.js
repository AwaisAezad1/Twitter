import Home from "./pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Selfprofile from './pages/Selfprofile'
import Userprofile from './pages/Userprofile'
import Messages from './pages/Messages'
import Notifications from './pages/Notifications'
import Bookmarks from './pages/Bookmarks';
import Explore  from './pages/Explore';
import Settings  from './pages/Settings';
import SignIn  from './components/Signin';
import Auth from './components/Auth'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/Signin" element={<SignIn/>}/>
        <Route path="/landing" element={<Home/>} />
        <Route path="/home" element={<Selfprofile/>} />
        <Route path="/User" element={<Userprofile/>} />
        <Route path="/Messages" element={<Messages/>} />
        <Route path="/Notification" element={<Notifications/>} />
        <Route path="/Bookmark" element={<Bookmarks/>} />
        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Settings" element={<Settings/>} />
      </Routes>
    </div>
  );
}

export default App;
