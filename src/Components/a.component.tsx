import * as React from 'react';
import { connect } from 'react-redux'

interface IProps {
  loggedIn: boolean
}

const ComponentA: React.SFC<IProps> = (props) => {
  return (
    <div className="ComponentB">
      Component A Store: { props.loggedIn ? 'logged in' : 'not logged in'}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    loggedIn: state.reducerA.loggedIn
  }
}

export default connect(mapStateToProps, null)(ComponentA);

