import React from 'react';

const Casilla = (props) =>{
  return( 
  <div className={"casilla "+ props.className} onClick={props.onClick}>
  {props.marca}
  </div>
  );
};

export default Casilla;