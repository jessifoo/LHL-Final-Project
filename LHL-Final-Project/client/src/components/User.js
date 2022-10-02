import React from 'react';
import {getAllUsers} from '../../api';


export default function User(props) {
  const [users, setUsers] = useState([])

  const fetchUsers = () => {
    const results = getAllUsers()
    if (results.error) {
      return error
    } else {
      
    }
  }

  return (
    <main>
      <div>
        <img src="https://t3.ftcdn.net/jpg/02/85/21/08/360_F_285210898_TBIeGXpLm3sW1uh95wiZtpO9RH4d7bAR.jpg" alt= "Profile Pic"/>
      </div>
      <h4>FirstName, LastName</h4>
      <h3>Email: superkookemail@email.com</h3>
      <h3>Cell: 555-555-5555</h3>
    </main>
  );
}