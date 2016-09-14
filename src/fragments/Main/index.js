import React, { Component } from 'react'
import Info from '../Info'

import styles from './index.css'

export default class Main extends Component {
  getAnnounceDescription(className) {
    return (
      <span>
        { 'Do you' }
        <span className={ className }>{ ' love ' }</span>
        { 'scalable architecture, distributed systems, devops, modern tools and practices?' }
      </span>
      )
  }

  getSponsorsDescription(className) {
    return (
      <span>
        { 'Interested in sporsoring this event? Take a look at our ' }
        <a
          href="https://example.com"
        >
          <span className={ className }>{ 'prospectus' }</span>
        </a>
      </span>
    )
  }

  render() {
    return (
      <div className={ styles.container }>
        <Info
          icon="announce"
          title="We’re looking for Speakers!"
          description={ this.getAnnounceDescription }
          emphasis="Got something cool to share?"
          buttonText="Speak at Scaleconf Colombia"
          buttonLink="https://example.com"
        />
        <Info
          icon="connect"
          title="Sponsors"
          description={ this.getSponsorsDescription }
          buttonText="Sponsor Scaleconf Colombia"
          buttonLink="https://example.com"
        />
      </div>
    )
  }
}
