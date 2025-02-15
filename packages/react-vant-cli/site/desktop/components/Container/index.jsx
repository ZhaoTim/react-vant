import React from 'react';
import clsx from 'clsx';
import './index.less';

export default (props) => {
  return <div className={clsx('vant-doc-container', 'vant-doc-row')}>{props.children}</div>;
};
