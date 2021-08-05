import React from 'react';
import { CategoryType } from '../../../common/type';
import MenuContaienr from '../DefaultMenu/MenuContainer';
import './CategoryList.scss'

interface Props {
  categories: CategoryType[]
}
const CategoryListContainer = ({
  categories
}: Props) => {
  return (
    <div className='c-l-con'>
      {
        categories.map((category, index) => (
          <div className='c-l' key={index}>
            <div className='c-l-n'>{category.name}</div>
            <MenuContaienr menus={category.menus}/>
          </div>
        ))
      }
    </div>
  );
};

export default CategoryListContainer;