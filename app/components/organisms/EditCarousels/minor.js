import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import BaseIcon from 'components/atoms/BaseIcon';
import Button from 'components/molecules/Button';

const GetStarted = ({ width, onStart }) => {
  const [open, setOpen] = useState(false);
  const saveProps = {
    iconDescription: 'Save',
    alignContent: 'center',
    kind: 'primary',
    size: '15xl',
    type: 'submit',
    roundCorners: true,
    onClick: () => {
      onStart();
    },
  };
  return (
    <div className="W($30xl) H($30xl) Bgc(white) Bdrs($bdrsbutton) Ff($ffmanrope) D(f) Ai(s) P($lg) Jc(s) Fld(c) Pos(r) T($10x) Start(80%)">
      <div className="Fz($mmd) Lh(1.5) C($inputGrey)">
        Add more details about you to get more projects
      </div>
      <div className="My($lg) W($quarter)">
        <Button {...saveProps}>Lets get started</Button>
      </div>
    </div>
  );
};

export default GetStarted;
