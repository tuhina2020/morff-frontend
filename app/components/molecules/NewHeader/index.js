import { morff as Morff } from 'Assets/svg-comp';
import React, { useEffect, useState } from 'react';
import { getTransitionClass } from 'utils/helper';
import Button from 'components/molecules/Button';
export default function NewHeader({
  isDesktopOrLaptop,
  bgImg,
  height,
  match,
  logout,
  logoutAction,
  blur,
}) {
  const buttonProps = {
    iconDescription: 'sign in with google',
    alignContent: 'center',
    kind: 'tertiary',
    size: '10x',
    onClick: logoutAction,
  };
  const [headerShadow, setHeaderShadow] = useState(false);
  const onScroll = () => {
    if (document.documentElement.scrollTop > 0) {
      setHeaderShadow(true);
    } else {
      setHeaderShadow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <div className={blur ? 'Blur($xxs)' : ''}>
      <div
        className={`Pos(r) T(0) W($full) Op(1) Z(2) Pstart($lg) ${getTransitionClass(
          1,
        )} H(a) ${
          headerShadow ? 'Bxsh($bxshnavBar)' : 'Bdb($bdcardGrey)'
        } Bgc($navBarBg)`}
        style={{
          backgroundImage: bgImg && `url(${bgImg})`,
          backgroundSize: bgImg && 'cover',
        }}
      >
        <div className={`D(f) ${logout ? 'Jc(s)' : 'Jc(c)'} Ai(c) P(1vw)`}>
          {logout ? (
            <>
              <Morff width="50px" height="48px" />
              <div
                className={`Bdend($bdlightGrey) Pt(2.5vw) Pstart($lg) Mend($lg)`}
              />
              <div className={`Fw($fwregular) Ff($ffmanrope) Fz($lg)`}>
                Designer
              </div>
              <div className="Mstart($10x)" />
              <div className="Pos(a) End(10px)">
                <Button {...buttonProps}>Logout</Button>
              </div>
            </>
          ) : (
            <Morff width="86px" height="80px" />
          )}
        </div>
      </div>
    </div>
  );
}
