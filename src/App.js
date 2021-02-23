import React, { useState, useEffect } from 'react';
import MenuList from './components/MenuList';
import mockData from './response.json';

import './App.css'

function App() {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    getMenuData();

    // Only for mock purposes
    setMenuData(mockData);
  }, []);

  function getMenuData() {
    const userId = 'vlad-at-work'; // This is the id or username of the user logged in.

    fetch(`https://api.test.com/menus/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data);
      })
      .catch(() => {
        console.log('error');
      });
  }

  return (
    <div className="App">
      {menuData && <MenuList menuData={menuData} />}
    </div>
  );
}

export default App;
