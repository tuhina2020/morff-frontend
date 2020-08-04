import * as React from 'react';

function SvgPmicon(props) {
  return (
    <svg viewBox="0 0 16 20" {...props}>
      <defs>
        <style>
          {
            '.Complete_PM_Icon_cls-1{fill:none;stroke:#000122;stroke-linecap:round}'
          }
        </style>
      </defs>
      <g
        id="Complete_PM_Icon"
        data-name="Complete PM Icon"
        transform="rotate(90 34.247 18.557)"
      >
        <path
          id="Path_162"
          data-name="Path 162"
          className="Complete_PM_Icon_cls-1"
          d="M0 0v14"
          transform="rotate(-90 26.747 10.556)"
        />
        <path
          id="Path_163"
          data-name="Path 163"
          className="Complete_PM_Icon_cls-1"
          d="M0 0v19"
          transform="rotate(-90 30.747 14.556)"
        />
        <path
          id="Path_164"
          data-name="Path 164"
          className="Complete_PM_Icon_cls-1"
          d="M0 0v9"
          transform="rotate(-90 34.247 18.056)"
        />
      </g>
    </svg>
  );
}

export default SvgPmicon;
