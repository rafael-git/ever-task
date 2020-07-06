import React from 'react';


import '../../assets/img/sprite.svg';

const Icon = (props) => (
  <svg className={props.className}>
    <use xlinkHref={`#sprite_${props.name}`} />
  </svg>
)

export default Icon;
