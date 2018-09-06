import React, { Component } from 'react';
import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to='/'>MooreStagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default App;