import React from 'react';
import DisplayResult from '../components/DisplayResult/DisplayResult';

const ResultScreen = () => {
  const currentUrl = window.location.href.split('/')[3];
  return (
    <React.Fragment>
      <DisplayResult />
    </React.Fragment>
  );
};

export default ResultScreen;
