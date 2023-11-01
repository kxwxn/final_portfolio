import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Photograph = (props) => {

  const tyo = props.tyo;

  const tyoPicture = tyo.map((item) => (
    <div key={item.id}>
      <img src={item.uri} alt={`Image ${item.id}`} />
    </div>
  ));

  return (
    <div>
      {tyoPicture}
    </div>
  );
}

export default Photograph;