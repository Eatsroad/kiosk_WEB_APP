import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const DetailContainer = (): JSX.Element => {
  const { menu, optionGroup } = useSelector((state: RootState) => ({
    menu: state.detailSlice.menu,
    optionGroup: state.detailSlice.optionGroup,
  }));
  console.log('menu: ', menu, 'optionGorup: ', optionGroup);
  return (
    <div>
      <div>
      </div>
    </div>
  );
};

export default DetailContainer;