import React, { Component } from 'react'
import Nav from "../Nav"
import SocialIcons from '../SocialIcons'

export default class Hero extends Component {
  render() {
    return (
      <div id="header-wrapper" className="w-100 i-header h-650">
        <Nav />
        <div className="mw80 w-100 center relative">
          <header className="w-100 tc tl-l w-auto-l">
            <h1 className="home__title home__title--scaleconf">Mindfulness for change</h1>
            <div className="w-20-l w-100">
              <SocialIcons />
            </div>
          </header>
        </div>
      </div>
    )
  }
}
