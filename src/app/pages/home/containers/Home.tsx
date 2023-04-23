import React, { useEffect, useState } from 'react';
import { deleteUser, getListUser } from '../home.actions';
import { useDispatch, useSelector } from 'react-redux';
import LoadingIcon from '@assets/images/loading.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const dataList = useSelector((state: any) => state.homeReducer.dataList);
  const { isLoading, error } = useSelector((state: any) => state.homeReducer);
  const [isLoadingIcon, setIsLoadingIcon] = useState(true);
  const deleteUserItem = (id: string) => {
    dispatch(deleteUser(id));
  };

  useEffect (() => {
    dispatch(getListUser());
    if (!isLoading) {
      setTimeout(() => {
        setIsLoadingIcon(false);
      }, 1000);
    }
  }, []);

  if (isLoadingIcon) {
    return (
      <div className="page page-loading">
        <span className="loading-indicator txt-black">
          <LoadingIcon/>
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
          dataList && dataList.map((item) => (
            <li data-testid="user-item" className="user-item" key={item.id}>
              <Link to ={`/user-info/${item.id}`} className='user-name'>{item?.name} </Link>
              <p>{item.name}</p>
              <button data-testid={`btn-delete-${item.id}`} onClick={() => deleteUserItem(item?.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </>
  );
};
export default Home;
