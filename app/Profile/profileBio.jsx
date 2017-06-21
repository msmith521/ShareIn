// Profile Bio Component
// User can view  profile info and edit info by clicking cog button
// Need to create and conditionally render editable state.

/* eslint react/prop-types: 0 */

const React = require('react');

class ProfileBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }
  componentWillMount() {
  }
  render() {
    // const Editing = this.state.editing ? null : <Editing />;
    return (
      <div>
        <span className="glyphicon glyphicon-cog" />
        <p>Name: {this.props.fullName}</p>
        <p>Email: {this.props.email}</p>
        <p>Bio: {this.props.bio}</p>
        <p>Address: {this.props.city}, {this.props.state}, {this.props.zip}</p>
        <p>Rating: {this.props.rating}</p>
      </div>
    );
  }
}

module.exports = ProfileBio;