import React, { useEffect } from 'react';
import { getUsers } from '../actions/users';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    useEffect(()=>{
      dispatch(getUsers());
    }, [dispatch]);
    console.log('users ',users);
    return (
      <div className="App">
      </div>
    );
};

export default Home;