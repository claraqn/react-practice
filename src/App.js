// import logo from './logo.svg';
import Hello from './Hello';
import './App.css';
import React from 'react';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem', // 다른 단위 사용 시 문자열로 설정
  };
  return (
    // <Wrapper>
    //   <Hello name="react" color="red" isSpecial={true} />
    //   <Hello color="pink" />
    //   <div style={style}>{name}</div>
    //   <div className="gray-box"></div>
    //   <Counter />
    // </Wrapper>
    // <Counter />
    <InputSample />
  );
}

export default App;
