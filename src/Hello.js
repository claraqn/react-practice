import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color: color, fontSize: '60px' }}>
      {/* {isSpecial ? <b>*</b> : null} */}
      {isSpecial && <b>*</b>}
      안녕하세요{name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
