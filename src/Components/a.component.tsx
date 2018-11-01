import * as React from 'react';
import { connect } from 'react-redux'

interface IProps {
  loggedIn: boolean,
  name: string
}

const ComponentA: React.SFC<IProps> = (props) => {
  return (
    <div className="ComponentB">
      Component A Store: { props.loggedIn ? 'logged in' : 'not logged in'}
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

export default connect(mapStateToProps, null)(ComponentA);

