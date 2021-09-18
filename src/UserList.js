import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
      {/* 삭제 버튼을 구현하고, 클릭 시 user.id 가 인자로 들어간 onRemove 함수 호출 */}
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} onRemove={onRemove} onToggle={onToggle} />
        // onRemove 함수를 User 컴포넌트 props로 넣어줌
      ))}
      {/*  {users.map(user => (
        <User user={user} key={user.id} />
      ))} 고유한 id 값이 있기때문에 이렇게 적어줘도 됨 */}
      {/* 배열을 렌더링 할 때에는 고유한 key 값이 있는것이 중요하며, 
      만약에 배열안에 중복되는 key 가 있을 때에는 렌더링시에 오류메시지가 콘솔에 나타나게 되며, 
      업데이트가 제대로 이루어지지 않게 됩니다. */}
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
    </div>
  );
}

export default React.memo(UserList);
