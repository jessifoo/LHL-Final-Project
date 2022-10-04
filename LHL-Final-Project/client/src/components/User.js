import React, { useEffect, useState } from 'react';


export default function User(props) {
  
  const [backendData, setBackendData] = useState(undefined)
 const id = 3;
  useEffect(() => {
    fetch(`/users/${id}`).then(
      res => res.json())
      .then(data => setBackendData(data))
  }, [])



  return (
    <div>
  
      {backendData ? ( backendData.userData.map((user) => (
      <div>
        <img src={user.profilepic} alt= "Profile Pic"/>
        <p>{user.firstname} {user.lastname}</p> 
        <p>{user.phonenumber} </p> 
        <p>{user.email} </p> 
      </div>
        ))
        ) : (
          
          <p>Loading...</p>
      )}
  
    </div>

  );
}