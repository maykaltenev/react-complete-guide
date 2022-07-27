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
// import UsersContext from './store/users-context';


function App() {
  // const usersContext = {
  //   users: DUMMY_USERS
  // }

  return (
    //  <UsersContext.Provider value={usersContext}>
    <div>
      <UserFinder />
      {/* // </UsersContext.Provider> */}
    </div >
  );
}

export default App;
