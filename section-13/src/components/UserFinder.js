import { Fragment, Component } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css'
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';
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
class UserFinder extends Component {
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: '',
        }
    }
    componentDidMount() {
        //Send http request...
        this.setState({ filteredUsers: this.context.users })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.filter((user) =>
                    user.name.includes(this.state.searchTerm),
                )
            })
        }

    }

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }
    render() {
        return (
            <Fragment>
                <input className={classes.finder} type='search' onChange={this.searchChangeHandler.bind(this)} />
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}
// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <Fragment>
//             <input className={classes.finder} type='search' onChange={searchChangeHandler} />
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };

export default UserFinder;