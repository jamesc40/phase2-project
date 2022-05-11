import { useState } from 'react';

export default function CommentForm({ comments, handleComments }) {
  //comment state
  const [commentState, setCommentState] = useState('');
  // updates commentState
  function handleChange(e) {
    setCommentState(e.target.value);
  }
  // sends commentState to handleComments() in RenderTrail.js
  function handleSubmit(e) {
    e.preventDefault();
    handleComments(commentState);
    e.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='comment form'
        type='text'
        onChange={handleChange}
        placeholder='New comment...'
      />
      <input type='submit' value='Submit' />
    </form>
  );
}
