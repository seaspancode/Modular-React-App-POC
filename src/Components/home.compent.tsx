import * as React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logUserIn } from 'src/Store/store.global';


interface IProps {
    loggedIn: boolean,
    name: string,
    logUserIn(user: any): any
}

const HomeComponent: React.SFC<IProps> = (props) => {
    function logIn() {
        props.logUserIn({ name: "daria" })
    }
    return (
        <div className="HomeComponent">
            <button onClick={logIn}>LogIn</button>
            <br />
            <Link to="/a">Go To A</Link>
            <br />
            <Link to="/b">Go To B</Link>
            <br />
            Component A Store: {props.loggedIn ? 'logged in' : 'not logged in'}
            <br />
            {props.name}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        loggedIn: state.loggedIn,
        name: state.name
    }
}

export default connect(mapStateToProps, { logUserIn })(HomeComponent);

