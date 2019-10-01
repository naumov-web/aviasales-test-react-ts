import React from 'react';
import { ITextContainer } from '../../../models/components/ITextContainer';

import './styles.scss';

interface ISegmentParamValue extends ITextContainer {};

const SegmentParamHeader: React.FC<ISegmentParamValue> = ({ text } : ISegmentParamValue) => {
  return <div className="segment-param-value">
    { text }
  </div>;
};

export default SegmentParamHeader;