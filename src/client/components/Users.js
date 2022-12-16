import React, { useState, useEffect } from 'react';


const Users = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetch('/api/users')
      .then(response => response.json())
      .then(data => {
         console.log(data);
         this.setState({users: data});
      })
      .catch((error) => {
         console.log(error);
      });
   })

   return(
         <ul>
            {
               this.state.users.map(user => (
                  <li>Username: {user.username} Age: {user.age}</li>
               ))
            }
         </ul>
     )
}

export default Users;
