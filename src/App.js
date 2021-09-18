// import logo from './logo.svg';
import Hello from './Hello';
import './App.css';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중,,,');
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    // 리렌더링을 막기위한 useCallback 사용
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    []
  );

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
  const onCreate = useCallback(() => {
    //항목을 새로이 만들어주는 부분
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user)); // 이렇게 써도 됨 -> setUsers([...users, user]);

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email]);
  const onRemove = useCallback((id) => {
    setUsers(users.filter((user) => user.id !== id));
    // 클릭된 id와 일치하지 않는 user.id들을 필터링해 다시 렌더링 하는 것
  }, []);
  const onToggle = useCallback((id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);
  // input 값이 바뀔 때에도 컴포넌트가 리렌더링 되므로 이렇게 불필요할때에도 호출하여서 자원이 낭비되는 걸 막기위해
  // useMemo를 사용
  const count = useMemo(() => countActiveUsers(users), [users]);

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
      <div>활성사용자 수 :{count}</div>
    </>
  );
}

export default App;
