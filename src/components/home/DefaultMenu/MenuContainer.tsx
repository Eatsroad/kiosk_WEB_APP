import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { MenuType } from '../../../common/type';
import './Menu.scss';

interface Props {
  menus: MenuType[]
}
const MenuContaienr = ({
  menus
}: Props): JSX.Element => {
  const { url } = useRouteMatch();
  const { push } = useHistory();

  const onClick = (menuId: number) => {
    push(`${url}/menu/${menuId}`)
  };

  return (
    <div className='m-con'>
      {
        menus.map((menu, index) => (
          <div className='m' key={index} onClick={() => onClick(menu.menu_id)}>
            <div className='m-n'>{menu.name}</div>
          </div>
        ))
      }
    </div>
  );
};

export default MenuContaienr;