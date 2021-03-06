import React from 'react';
import PropTypes from 'prop-types';
import { classnames } from 'utils/helper';
import BaseButton from 'components/atoms/BaseButton';
import BaseIcon from 'components/atoms/BaseIcon';

const getButtonStyle = ({
  size,
  kind,
  disabled,
  alignContent,
  roundCorners,
  classes,
  height,
}) => {
  const commonStyles = {
    'Ff($ffmanrope)': true,
    'Fw($fwregular)': true,
    'Fz($fzbutton)': true,
    'Py($md)': true,
    [height]: height && height.length > 0,
    [`Miw($${size})`]: size !== 'auto',
    'Bdrs($bdrsbutton)': roundCorners,
    'O(n)': true,
    [`W($${size})`]: size && size.length > 0,
    'Jc(c) D(f) Ai(c)': !alignContent || alignContent === 'center',
    'Jc(fs) D(f) Ai(c)': alignContent === 'start',
    'Jc(fe) D(f) Ai(c)': alignContent === 'end',
  };

  const primaryButtonStyles = {
    'Bgc($hoverButton):h': !disabled,
    'Bgc($primaryButton)': !disabled,
    'Bgc($disabledGrey2)': disabled,
    'C(white)': true,
    'Px($md)': true,
    'Bd(n)': true,
    'Va(bl)': true,
    'Cur(p)': true,
    'Bgc(black):a': true,
  };

  const secondaryButtonStyles = {
    'Bd($bddisabledGreyButton)': !disabled,
    'C($primaryButton)': !disabled,
    'Bd($disabledGrey2)': disabled,
    'C($disabledGrey2)': disabled,
    'Bd($bdprimaryButton):h': !disabled,
    'Bgc(white)': true,
    'Px($md)': true,
    'Va(bl)': true,
    'Cur(p)': true,
    'Bd($bdheadingDarkGrey):a': true,
    'C($headingDarkGrey):a': true,
  };

  const ghostStyles = {
    'Bgc($navBarBg):h': !disabled,
    'C($hoverButton)': !disabled,
    'Bgc(white)': true,
    'C($buttonGrey)': disabled,
    'Va(bl)': true,
    'Cur(p)': true,
    'Bd(n)': true,
    'Px($xs)': true,
    'C($headingDarkGrey):a': true,
    'Bgc($navBarBg):a': true,
  };

  const dangerStyles = {
    'Bgc($navBarBg):h': !disabled,
    'C($error2)': !disabled,
    'Bgc(white)': true,
    'C($buttonGrey)': disabled,
    'Va(bl)': true,
    'Cur(p)': true,
    'Bd(n)': true,
    'Px($xs)': true,
    'C($headingDarkGrey):a': true,
    'Bgc($navBarBg):a': true,
  };

  return `${classnames({
    ...commonStyles,
    ...(kind === 'primary' ? primaryButtonStyles : {}),
    ...(kind === 'secondary' ? secondaryButtonStyles : {}),
    ...(kind === 'ghost' || kind === 'tertiary' ? ghostStyles : {}),
    ...(kind === 'danger' ? dangerStyles : {}),
  })} ${classnames(classes)}`;
};

const Button = React.forwardRef((props, ref) => {
  const {
    children,
    iconDescription,
    alignContent,
    kind,
    onClick,
    prependIcon,
    postIcon,
    iconWidth,
    iconHeight,
    iconClasses,
    iconSpacing,
    iconFill,
    size,
    tabIndex,
    disabled,
    to,
    classes,
    roundCorners,
    height,
    ...others
  } = props;

  const buttonClasses = getButtonStyle({
    size,
    kind,
    disabled,
    alignContent,
    classes,
    roundCorners,
    height,
  });

  const newProps = {
    to,
    children,
    'aria-label': iconDescription,
    tabIndex,
    disabled,
    onClick: e => {
      if (!disabled) onClick(e);
    },
    classes: buttonClasses,
    ...others,
  };

  const PrependIcon = prependIcon ? (
    <BaseIcon
      icon={prependIcon}
      width={iconWidth}
      height={iconHeight}
      iconClasses={iconClasses}
      fill={iconFill}
    />
  ) : null;

  const PostIcon = postIcon ? (
    <BaseIcon
      icon={postIcon}
      width={iconWidth}
      height={iconHeight}
      iconClasses={iconClasses}
      fill={iconFill}
    />
  ) : null;

  return (
    <BaseButton {...newProps} ref={ref}>
      {PrependIcon ? (
        <div className={`Mend(${iconSpacing}) D(f)`}>{PrependIcon}</div>
      ) : null}
      {children}
      {PostIcon ? (
        <div className={`Mstart(${iconSpacing}) D(f)`}>{PostIcon}</div>
      ) : null}
    </BaseButton>
  );
});

Button.propTypes = {
  alignContent: PropTypes.oneOf(['center', 'left', 'right']),
  kind: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'disabled',
    'ghost',
    'danger',
    'danger-primary',
  ]),
  iconDescription: PropTypes.string,
  onClick: PropTypes.func,
  prependIcon: PropTypes.string,
  postIcon: PropTypes.string,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  classes: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  iconSpacing: PropTypes.string,
  iconClasses: PropTypes.string,
  height: PropTypes.oneOf(['H($2xl)', 'H($lg)']),
  iconFill: PropTypes.string,
  roundCorners: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  kind: 'primary',
  onClick: () => {},
  alignContent: 'center',
  tabIndex: 0,
  height: 'H($2xl)',
  iconWidth: '16px',
  iconHeight: '16px',
  iconSpacing: '8px',
  size: 'auto',
  roundCorners: true,
  iconClasses: 'Fill($primaryButton) W($md) H($md)',
};

export default Button;
