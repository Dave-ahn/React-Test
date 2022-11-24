import React, { useState } from 'react';
import Comment from './Comment';

const App = () => {
  const [itemName, setItemName] = useState(0);

  const loginSuccess = e => {
    fetch('http://211.106.114.186/auth/signin', {
      method: 'POST',
      headers: { 'Content-type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: id, password: password }),
    })
      .then(response => response.json()) //요청
      .then(data => {
        setGetData(data); //응답
        localStorage.setItem('idKey', JSON.stringify(data));
      });
    navigate('/mainasj');
  };

  const [commentValue, setCommentValue] = useState('');

  const [commentList, setCommentList] = useState([]);

  const handleClickBtn = () => {
    const pushedComments = [...commentList, commentValue];
    setCommentList(pushedComments);
    setCommentValue('');
  };

  return (
    <>
      <form onSubmit={event => event.preventDefault()}>
        <input
          type="text"
          value={commentValue}
          placeholder="댓글 입력하시오"
          onChange={e => setCommentValue(e.target.value)}
        />

        <button onClick={handleClickBtn} type="submit" className="btn">
          입력
        </button>
      </form>

      <div className="commentBox">
        <ul>
          {commentList.map((commentValue, index) => {
            return <Comment comment={commentValue} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
