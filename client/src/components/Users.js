import React, { Component } from 'react';


class Users extends Component {

constructor(props) {
   super(props);
   this.state = {
      users: [],
   }
}

componentDidMount() {
   fetch('http://localhost:3000/api/users')
   .then(res => res.json())
   .then(data => {
      console.log(data);
      this.setState({users: data});
   })
}

   render() {
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
}


export default Users;