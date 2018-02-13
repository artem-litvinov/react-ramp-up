import React, { Component } from 'react';

const HomePage = ({ username }) => {
  return (
    <div className="jumbotron text-center">
        <h1>Hello {'username'}!</h1>
    </div>
  );
};


export default HomePage;
