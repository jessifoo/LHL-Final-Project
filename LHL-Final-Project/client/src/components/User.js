import React, { useEffect, useState } from 'react';


export default function User(props) {
  
  const [backendData, setBackendData] = useState(undefined)

  useEffect(() => {
    fetch("/users").then(
      res => res.json())
      .then(data => setBackendData(data))
  }, [])
  // <main>
  //   <div>
  //     <img src="https://t3.ftcdn.net/jpg/02/85/21/08/360_F_285210898_TBIeGXpLm3sW1uh95wiZtpO9RH4d7bAR.jpg" alt= "Profile Pic"/>
  //     <h4>name: {backendData.users[0].firstname}</h4>
  //   </div>
  // </main>
  console.log("BACKEND DATA: ", backendData)

 /* const userArray = users.map (user => {
    return <key={user.id} 
  })*/
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