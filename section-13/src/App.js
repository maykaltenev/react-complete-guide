// import Users from './components/Users';

// function App() {
//   return (
//     <div>
//       <Users />
//     </div>
//   );
// }

// export default App;


import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

export const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
  { id: 'u4', name: 'Nico' },
  { id: 'u5', name: 'Rico' },
  { id: 'u6', name: 'Kate' },
  { id: 'u7', name: 'Horry' },
  { id: 'u8', name: 'May' },
  { id: 'u9', name: 'John' },
];
function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>

  );
}

export default App;
