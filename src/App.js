import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Navbar from './constants/Navbar';
import Landing from './components/Landing';
import GeneratePage from './components/GeneratePage';
import jwtDecode from 'jwt-decode';
import { googleLogout } from '@react-oauth/google';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [profileImage, setProfileImage] = useState(null); 

  const handleSignInSuccess = (userData) => {
    setIsSignedIn(true);
    const {credential} = userData;
    const decodedToken = jwtDecode(credential);
    const {picture} = decodedToken;
    console.log(picture);
    setProfileImage(picture);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("profileImage", picture);
    console.log('User has successfully signed in.');
  };

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("profileImage");
    setIsSignedIn(false);
    googleLogout();
    setProfileImage(null);
    console.log('User has signed out.');
  };
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      setIsSignedIn(true);
      const profileImage = localStorage.getItem("profileImage");
      setProfileImage(profileImage);
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar credits={2} isSignedIn={isSignedIn} onSignInSuccess={handleSignInSuccess} onSignOut={handleSignOut} profileImage={profileImage}/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/generate" element={<GeneratePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
