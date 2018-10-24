import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants/index';

class CommentsList extends React.Component {
  state = {
    comments: []
  };

  handleReceivedComment = response => {
    // TODO: right now, only handle concat (no editing of comments)
    const comments = this.state.comments.concat(response);
    this.setState({ comments });
  };

  render = () => {
    const { comments } = this.state;

    return (
      <div className="commentsList">
        <ActionCable
          channel={{ channel: 'ChannelsChannel', channel_id: '6q0rmAffnNnTzA' }}
          onReceived={this.handleReceivedComment}
        />

        <ul>{mapComments(comments, this.handleClick)}</ul>
      </div>
    );
  };
}

export default CommentsList;

// helpers

const mapComments = (comments) => {
  return comments.map(comment => {
    comment = comment.comment

    return (
      <li key={comment.id}>
        <span className="commentMessage">{comment.message}</span>
        -
        <span className="commentTime">{comment.created_at}</span>
      </li>
    );
  });
};
