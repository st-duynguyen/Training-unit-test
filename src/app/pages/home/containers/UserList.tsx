import React, { useEffect, useState } from 'react';
import { deleteUser, getListUser } from '../home.actions';
import { useDispatch, useSelector } from 'react-redux';
// import LoadingIcon from '@assets/images/loading.svg';
import { Link } from 'react-router-dom';

const UserList = () => {
  const dispatch = useDispatch();
  const dataList = useSelector((state: any) => state.userListReducer.dataList);
  const { isLoading, error } = useSelector((state: any) => state.userListReducer);
  const deleteUserItem = (id: string) => {
    dispatch(deleteUser(id));
  };

  useEffect (() => {
    dispatch(getListUser());
  }, []);

  if (isLoading) {
    return (
      <div className="page page-loading">
        <span className="loading-indicator txt-black">
          Loading
        </span>
      </div>

    );
  }

  if(error) {
    return <div data-testid='error'>Error</div>;
  }

  return (
    <>
      <div className="">User List</div>
      <ul data-testid="user-list" className="user-list">
        {
          dataList.length ? dataList.map((item) => (
            <li data-testid="user-item" className="user-item" key={item.id}>
              <Link data-testid={`user-${item.id}`} to ={`/user-info/${item.id}`} className='user-name'>{item?.name}</Link>
              <button data-testid={`btn-delete-${item.id}`} onClick={() => deleteUserItem(item?.id)}>Delete</button>
            </li>
          )) : (
            <p>Dont have a user</p>
          )
        }
      </ul>
    </>
  );
};
export default UserList;
