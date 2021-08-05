import React from 'react';
import './index.scss';

interface HorizaontalScrollProps {

}

const HorizontalScroll = ({
  
}: HorizaontalScrollProps): JSX.Element => {
  return (
    <div className="hs-con">
      <div className="hs-title-con">
        <div className="hs-title">{}</div>
      </div>
      <div className="hs-content-con">
        <div className="hs-content">
          <div className="hs-item"/>
          <div className="hs-item"/>
        </div>
        <div/>
      </div>
    </div>
  );
};

export default HorizontalScroll;
