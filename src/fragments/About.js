import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex items-center">
        <div className="mw7-l dib-l">
          <h2 className="section__title section__title--about">
            A Space<br/>
            to grow change
          </h2>
          <p className="section__content">
            Our main objetive is to level up the community's
            knowledge, by bringing great speakers from the teams
            that are paving the way for a global scale in tomorrow's
            apps and services.
          </p>
        </div>
        <img src={require('../../src/assets/images/logo.png')} alt="ScaleConf Colombia" className="pl4-l w-30 dib-l dn"/>
      </div>
    );
  }
}
