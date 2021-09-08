import React from 'react';
import { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('값을 입력');
  const onChange = (e) => {
    setText(e.target.value);
    console.log(e);
  };
  const onReset = () => {
    setText('');
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
