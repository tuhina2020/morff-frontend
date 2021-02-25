import React from 'react';
import BaseIcon from 'components/atoms/BaseIcon';
import BaseImage from 'components/atoms/BaseImage';
import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';
import PropTypes from 'prop-types';
import { clean } from 'utils/helper';
const PersonalDetails = ({ personal, onEdit, viewOnly }) => {
  const { firstName, lastName, profession, city, state } = personal;
  const personalObj = clean(personal);
  if (isEmpty(personal) || !personalObj.firstName) return null;
  return (
    <div className="Bdrs($xs) Bgc(white) H($fc) Maw($60xl)">
      <div className="D(f) Ai(s) Jc(sb) Px($lg) Pb($sm) Pt($mmd) Lh(1)">
        <div>
          <div className="Ff($ffmanrope) Fz($xml)">
            {firstName} {lastName}
          </div>
          <div className="Ff($ffopensans) Fz($md)">
            <div className="My($sm)">{profession}</div>
            <div>
              {city}, {state}
            </div>
          </div>
        </div>
        <div className="D(f) Ai(s) Jc(c)">
          <BaseImage text={firstName[0].toUpperCase()} />
          {!viewOnly && (
            <div className="Mstart($lg) Pos(r) P($xxs) Bgc($navBarBg):h Bdrs($half) W($lmg) H($lmg)">
              <BaseIcon
                icon="edit"
                fill="#555"
                onClick={onEdit}
                width="20px"
                height="20px"
                iconClasses="Pos(a) T($xxs) Start($xxs)"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

PersonalDetails.propTypes = {
  personal: PropTypes.object,
  onEdit: PropTypes.func,
  viewOnly: PropTypes.bool,
};

PersonalDetails.defaultProps = {
  viewOnly: false,
  onEdit: () => {},
};

export default PersonalDetails;
