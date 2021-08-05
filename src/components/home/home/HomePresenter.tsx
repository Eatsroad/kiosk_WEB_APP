import React from 'react';
import { MenuBoardResponse } from '../../../common/type';
import CategoryListContainer from '../category/CategoryListContainer';
import './index.scss';

interface Props {
  data: MenuBoardResponse[]
}
const HomePresenter = ({
  data
}: Props): JSX.Element => (
  <div className='h-con'>
    <div>
      <CategoryListContainer categories={data}/>
    </div>
  </div>
);

export default HomePresenter;