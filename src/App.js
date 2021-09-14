// import logo from './logo.svg';
import Hello from './Hello';
import './App.css';
import React, { useRef, useState } from 'react';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester#example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',

      active: false,
    },
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    //항목을 새로이 만들어주는 부분
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]); // 이렇게 써도 됨 -> setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    // 클릭된 id와 일치하지 않는 user.id들을 필터링해 다시 렌더링 하는 것
  };
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
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
    // <InputSample />
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
