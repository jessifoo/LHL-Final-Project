import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';


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

      {backendData ? (backendData.userData.map((user) => (
        <Card key={user.id} style={{ width: '35rem' }}>
          <Card.Img variant="top" src={user.profilepic} alt="Profile Pic" />
          <Card.Body>
            <Card.Title className="text-center">{user.firstname} {user.lastname}</Card.Title>
            <Card.Text className="text-center"> {user.phonenumber}  </Card.Text>
            <Card.Text className="text-center">{user.email} </Card.Text>
          </Card.Body>
        </Card>
      ))
      ) : (

        <p>Loading...</p>
      )}

    </div>

  );
}