import React, { useEffect, useState } from 'react';


export default function User(props) {
  
  const [backendData, setBackendData] = useState(undefined)

  useEffect(() => {
    fetch("/users").then(
      res => res.json())
      .then(data => setBackendData(data))
  }, [])


  return (
    <div>
  
      {backendData ? ( 
      <div>
        <img src={backendData.users[0].profilepic} alt= "Profile Pic"/>
        <p>{backendData.users[0].firstname} {backendData.users[0].lastname}</p> 
        <p>{backendData.users[0].phonenumber} </p> 
        <p>{backendData.users[0].email} </p> 
      </div>
        
        ) : (
          
          <p>Loading...</p>
      )}
  
    </div>

  );
}