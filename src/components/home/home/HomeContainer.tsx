import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import HomePresenter from './HomePresenter';

const HomeContainer = (): JSX.Element => {
  const { data } = useSelector((state: RootState) => ({
    data: state.menuboardSlice.data,
  }));

  console.log('data: ', data);

  return (
    <HomePresenter data={data}/>
  );
};

export default HomeContainer;