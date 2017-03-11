import React, { Component } from 'react'
import Nav from "../Nav"
import SocialIcons from '../SocialIcons'

let particles
if (typeof window !== 'undefined') {
  particles = require('particles.js')
}

export default class Hero extends Component {

  componentDidMount() {
    particles && particles.particlesJS.load('particles-js', '/assets/particles.json', function() {
      // eslint-disable-next-line no-console
      console.log('callback - particles.js config loaded');
    })
  }

  render() {
    return (
      <div id="particles-js" className="w-100 gradient h-650">
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
