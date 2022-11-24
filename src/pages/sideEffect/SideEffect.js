import React, { useEffect, useState } from 'react';
import './SideEffect.scss';
const SideEffect = () => {
  //---------------------------------------------------------

  // console.log("test 1");

  // // useEffect(콜백함수)
  // // 렌더링이 완료된 후, JSX return 후에, 콜백함수를 실행

  // useEffect(()=> {
  //     console.log("test 3: sideEffect2")
  // },[])

  //---------------------------------------------------------//

  //2022.11.07  실험
  // 1. count에 값이 새로 입력될 때마다 useEffect가 작동한다.
  // 2. useEffect가 작동하면 "Hello My Friend?!" 알림창이 뜬다.

  const [count, setCount] = useState(0);
  // 새로고침 하여도 alert 작동 안함.
  useEffect(() => {
    if (count !== 0) return alert('Hello My Friend?!');
  }, [count]);

  return (
    <>
      <h1>Side Effect</h1>
      <br></br>
      <h3>Count: {count}</h3>
      {/* 마우스가 버튼에서 공간에서 벗어날경우 setCount라는 함수가 실행되고 이 함수는 count를 +1 시켜준다.*/}
      <button className="yourBtn" onMouseLeave={() => setCount(count + 1)}>
        <h1>$__$</h1>
      </button>
    </>
  );

  //---------------------------------------------------------//
};

export default SideEffect;
