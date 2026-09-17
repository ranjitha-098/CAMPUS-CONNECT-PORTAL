import { useState, useEffect } from "react";
import AuthModule from "./components/AuthModule";

export default function App() {
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash ==='#login') {
        setActiveTab('login');
        scrollToAuth();
      } else if (hash === '#register') {
        setActiveTab('register');
        scrollToAuth();
      }
    };

    const scrollToAuth = () => {
      const authElem = document.getElementById('auth-section');
      if (authElem) {
        authElem.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleHashChange(); // Check the initial hash on page load
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []); 

  return(
    <div style={{ padding: '20px 0' }}>
      <AuthModule key={activeTab} initialMode={activeTab} />
    </div>  
  );
}

  