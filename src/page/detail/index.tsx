import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../common/Loading';
import DetailContainer from '../../components/detail/detail/DetailContainer';
import { RootState } from '../../redux/store';

const DetailMenuPage = (): JSX.Element => {
  const disaptch = useDispatch();
  const { menuId } = useParams<any>();

  const { loading } = useSelector((state: RootState) => ({
    loading: state.detailSlice.loading,
  }));

  useEffect(() => {
    if (loading) {
      disaptch({ type: '/detail/getMenuInfoSaga', payload: { menuId } });
      disaptch({ type: '/detail/getOptionGroup', payload: { menuId } });
    }
  }, []);
  
  if (loading) return <Loading/>
  else return <DetailContainer/>;
};

export default DetailMenuPage;