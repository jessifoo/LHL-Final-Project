import './App.css';
import Name from "./components/User";
import React, { useEffect, useState } from 'react';
import User from "./components/User";

function App() {

  const [backendData, setBackendData] = useState(undefined)

  useEffect(() => {
    fetch("/users").then(
      res => res.json())
      .then(data => setBackendData(data))
  }, [])

  console.log(backendData)
  return (
    <div>

      {backendData ? ( backendData.users.map((user, i) => (
          <p key={i}>{user.firstname}</p>
        ))
        ) : (
          
          <p>Loading...</p>
      )}

    </div>
  );
}

export default App;
