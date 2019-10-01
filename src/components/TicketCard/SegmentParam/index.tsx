import React from 'react';
import SegmentParamHeader from '../SegmentParamHeader';
import SegmentParamValue from '../SegmentParamValue';

interface ISegmentParam {
  name: string;
  value: string;
};

const SegmentParam: React.FC<ISegmentParam> = ({ name, value } : ISegmentParam) => {
  return <div className="segment-param">
    <SegmentParamHeader text={name} />
    <SegmentParamValue text={value} />
  </div>;
};

export default SegmentParam;