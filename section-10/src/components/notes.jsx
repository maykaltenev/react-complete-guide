//! What is an "Effect"(or a "Side Effect")?
//* Main Job: Render UI & React to User Input
//? Evaluate && Render JSX
//? Menage State & Props
//? React to (User) Events & Input
//? Re-evaluate Components upon State & Prop Changes
//* This all is "backed into" React via the "tools" (ie. useState() Hook, Props. etc)

//! Side Effect: Anything Else
//? Store Data in Browser Storage, Send Http Request to Backend Servers
//? Set & Manage Timers
//* These task are happening out of the normal component evaluation and render cycle

//! Handling Side Effect with the useEffect() Hook
useEffects(() => {}, ["dependencies"]);

//! -------------------
//! Introducing useReducer() for State Management
//? Sometimes, you have more complex state - for example if it got multiple states, multiple ways of changing i or dependencies to other states
//? useState() then often becomes hard or error-prone to use - it's easy to write bad, inefficient or buggy code in such scenarios
//? useReducer() can be used as a replacement for useState() if you need more powerful state management

//! Understanding useReducer()

//? const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn)
//*   1. state => The sate snapshot used in the component re-render/re-evaluation cycle
//*   2. dispatchFn => A function that can be used to dispatch a new action (i.e trigger an update of the state)
//*   1.1. reducerFn => (prevState, action) => newState, A function that is triggered automatically once an action is dispatched
//*   (via dispatchFn()) - it receives the latest state snapshot and should return the new, updated state.
//*   1.2  initialState => the initial state
//*   1.3 initFn => A function to set the initial state programmatically

//! useState() vs useReducer()

//? When using useState() becomes cumbersome or you're getting a lot of bugs/unintended behaviors
//* useState() +++PROS++
//* The main state management "tool"
//* Great for independent pieces of state/data
//* Great if state updates are easy and limited to a few kind of updates

//* useReducer() +++PROS+++
//* Great if you need "more power", more complex logic
//* Related pieces of state/data
//* more complex state updates
