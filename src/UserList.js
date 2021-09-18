import React, { useContext, useEffect } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => {
          dispatch({ type: 'TOGGLE_USER', id: user.id });
        }}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button
        onClick={() => {
          dispatch({
            type: 'REMOVE_USER',
            id: user.id,
          });
        }}
      >
        삭제
      </button>
      {/* 삭제 버튼을 구현하고, 클릭 시 user.id 가 인자로 들어간 onRemove 함수 호출 */}
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} />
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
