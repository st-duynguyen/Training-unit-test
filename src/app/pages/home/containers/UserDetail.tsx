import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserInfo } from '../home.actions';

const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userDetail = useSelector((state: any) => state.userDetailReducer.dataUser);
  const error = useSelector((state: any) => state.userDetailReducer.error);
  const isLoading = useSelector((state: any) => state.userDetailReducer.isLoading);

  useEffect(() => {
    dispatch(getUserInfo(id));
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
      <h1>USER DETAIL</h1>
      {userDetail ? (
        <div data-testid="user-detail">
          <p>
            <span>Name:</span>
            <span>{userDetail.name}</span>
          </p>
          <p>
            <span>Email:</span>
            <span>{userDetail.email}</span>
          </p>
          <p>
            <span>Phone:</span>
            <span>{userDetail.phone}</span>
          </p>
          <p>
            <span>Username:</span>
            <span>{userDetail.username}</span>
          </p>
          <p>
            <span>Website:</span>
            <span>{userDetail.website}</span>
          </p>
        </div>
      ) : (
        'Dont have a user'
      )}
    </>
  );
};

export default UserDetail;
