import React, { useRef } from 'react';
import { useState } from 'react';

function InputSample() {
  // 객체 형태의 상태를 관리
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();
  // 변수명이 동일해야 가져올 수 있음
  // 네임과 닉네임 값을 간편하게 사용하기 위해 name, nickname 값을 비구조화 할당으로 추출
  const { name, nickname } = inputs;

  const onChange = (e) => {
    // 비구조화 할당을 통해 name과 value 값 추출
    const { value, name } = e.target;
    console.log(e);
    setInputs({
      ...inputs,
      // 리액트에서 객체를 업데이트 할 때는 이전의 객체를 먼저 복사(...)해야 한다.
      // inputs 을 복사해서 쓰고 거기에 값을 덧씌우는 형식
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
