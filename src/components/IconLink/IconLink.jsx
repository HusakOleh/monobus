import React from "react";
import './IconLink.scss';
import {Link} from "react-scroll";

export const IconLink = ({link, image}) => {
  return (



    <Link
      className='icon-link'
      style={{
        backgroundImage: `url('./assets/images/icons/${image}.svg')`
      }}

      to={link}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
    </Link>


  );
};
