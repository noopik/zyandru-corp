import Image from 'next/image';
import React from 'react';
import './user-detail.styles.scss';
const UserDetail = () => {
  return (
    <div className="_user_detail_wrapper">
      <Image
        src={'/assets/images/img-dummy-user.png'}
        alt="user"
        width={200}
        height={200}
      />
      <div className="_description">
        <h3 className="_name">Joko</h3>
        <p className="_email">Temon</p>
      </div>
    </div>
  );
};

export default UserDetail;
