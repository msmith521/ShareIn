/* eslint react/prop-types: 0 */

import { withRouter } from 'react-router';

const React = require('react');

class BorrowedItemEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeRoute = () => {
      this.props.history.push(`/profile/${this.props.ownerId}/`);
      this.props.populateProfile(this.props.ownerId);
    };
  }
  render() {
    return (
      <div>
        <a href="#" className="pull-left col-md-2">
          <img
            src={this.props.image}
            alt={this.props.title}
            className="media-photo img-responsive"
          />
        </a>
        <div className="col-md-4">
          <h4 className="title">{this.props.title}</h4>
          <p className="summary">{this.props.description}</p>
        </div>
        <div className="col-md-6">
          <button onClick={this.changeRoute} className="pull-right">
            <p className="owner">  Owner: {this.props.owner}</p>
          </button>
        </div>
      </div>
    );
  }
}
const BorrowedItemEntryWithRouter = withRouter(BorrowedItemEntry);
exports.BorrowedItemEntry = BorrowedItemEntry;
exports.BorrowedItemEntryWithRouter = BorrowedItemEntryWithRouter;
