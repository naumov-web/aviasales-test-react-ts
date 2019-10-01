import React from 'react';
import { ITextContainer } from '../../../models/components/ITextContainer';

import './styles.scss';

interface ISegmentParamHeader extends ITextContainer {};

const SegmentParamHeader: React.FC<ISegmentParamHeader> = ({ text } : ISegmentParamHeader) => {
  return <h4 className="segment-param-header">
    { text }
  </h4>;
};

export default SegmentParamHeader;