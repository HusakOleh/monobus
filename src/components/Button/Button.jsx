import React from "react";
import classNames from 'classnames';
import useMatchMedia from "use-match-media-hook";
import './Button.scss';

export const Button = ({
  content,
  whiteButton,
  onClick,
  forModal
  }) => {
  const [onDesktop] = useMatchMedia(["(min-width: 1280px)"]);

  return (
    <button
      onClick={onClick}
      className={classNames('button', {
        whiteButton,
        "button__onDesktop": onDesktop && !forModal
      })}

    >
      {content}
    </button>
  );
}
