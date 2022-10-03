import React, { useEffect, useState } from 'react';


export default function User(props) {
  
  const [backendData, setBackendData] = useState(undefined)

  useEffect(() => {
    fetch("/users").then(
      res => res.json())
      .then(data => setBackendData(data))
  }, [])
    // <div>

    //   {backendData ? ( backendData.users.map((user, i) => (
    //       <p key={i}>{user.firstname}</p>
    //     ))
    //     ) : (
          
    //       <p>Loading...</p>
    //   )}

    // </div>

  return (

    <main>
      <div>
        <img src="https://t3.ftcdn.net/jpg/02/85/21/08/360_F_285210898_TBIeGXpLm3sW1uh95wiZtpO9RH4d7bAR.jpg" alt= "Profile Pic"/>
      </div>
      <h4></h4>
    </main>
  );
}