import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../common/Loading';
import { RootState } from '../../redux/store';
import { useParams } from 'react-router-dom';
import HomeContainer from '../../components/home/home/HomeContainer';

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();

  const { storeId } = useParams<any>();
  const { loading } = useSelector((state: RootState) =>({
    loading: state.menuboardSlice.loading,
  }));

  useEffect(() => {
    if (loading) dispatch({ type: '/getAllMenuBoardSaga', payload: { storeId }});
  }, []);
  
  if (loading) return <Loading/>
  else return <HomeContainer/>
};

export default HomePage;