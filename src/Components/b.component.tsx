import * as React from 'react';
import { connect } from 'react-redux'

interface IProps {
  loggedIn: boolean
}

const ComponentB: React.SFC<IProps> = (props) => {
  return (
    <div className="ComponentB">
      Component B Store: { props.loggedIn ? 'logged in' : 'not logged in'}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  loggedIn: state.reducerB.loggedIn,
})

export default connect(mapStateToProps, null)(ComponentB);
