import React from 'react';
import CardKontak from './CardKontak';

const ListKontak = ({ nama }) => {
  return (
    <div>
      <h2>ListKontak</h2>
      <CardKontak nama={nama} />
    </div>
  );
};

export default ListKontak;
