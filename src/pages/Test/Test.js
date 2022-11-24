import React, { useState } from 'react';
import './Test.scss';

const Test = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const testC = e => {
    setId(e.target.value);
  };

  const testD = e => {
    setPw(e.target.value);
  };

  const loginNum = id.indexOf('@') !== -1 && pw.length >= '5';

  return (
    <>
      <h1>로그인 테스트</h1>
      <br />
      <input type="text" placeholder="ID를 입력하시오" onChange={testC} />
      <input
        type="password"
        placeholder="PassWord를 입력하시오"
        onChange={testD}
      />
      <br />
      <br />

      <button
        disabled={true}
        className={loginNum ? 'rightValue' : 'wrongValue'}
      >
        입력받은 ID 값이 1234이고 PW값이 0000이면 색이 변합니다.{' '}
      </button>
    </>
  );
};

export default Test;
