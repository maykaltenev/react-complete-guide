import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';



// 1. What is constructor ?
// The constructor method is a special method of
// a class for creating and initializing an object
// instance of that class. The purpose of a constructor is to create a new object and set
// values for any existing object properties.
// 2. Definition of a class?
// Unlike other programming languages such as Java and C#, 
// JavaScript classes are syntactic sugar over the prototypal
// inheritance. In other words, ES6 classes are just special functions.

class Users extends Component {
  constructor() {
    super()
    this.state = {
      showUsers: true,
    };
  }
  toggleUsersHandler() {
    // class setState is merging the state 
    this.setState((curState) => {
      return { showUsers: !curState.showUsers }
    })
  }
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return <div className={classes.users}>
      <button onClick={this.toggleUsersHandler.bind(this)}>
        {this.state.showUsers ? 'Hide' : 'Show'} Users
      </button>
      {this.state.showUsers && usersList}
    </div>
  }
}
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };
//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );
//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
