import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants/index';

class CommentsList extends React.Component {
  state = {
    comments: ['abc', 'def']
  };

  handleReceivedComment = response => {
    const { comment } = response;
    const comments = [...this.state.comments, comment];
    this.setState({ comments });
  };

  render = () => {
    const { comments } = this.state;

    return (
      <div className="commentsList">
        <ActionCable
          channel={{ channel: 'CommentsChannel' }}
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
    return (
      <li key={comment.id}>
        {comment.message}
      </li>
    );
  });
};
