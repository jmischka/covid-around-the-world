import React, { Component } from 'react';
import Graphs from './Graphs';

const today = new Date();
const date = new Intl.DateTimeFormat('en', { month: 'long', day: '2-digit', year: 'numeric' }).format(today);

class Details extends Component {
  render() {
    const {triggered} = this.props;
    return (
      <div className={!triggered ? "Country-details" : "Country-details triggered"}>
        <div className="details-window">
          <div className="details-container">
            <div className="details-title">
              <img src={this.props.countryImage} alt="country" />
              <span className="details-countryName">{this.props.countryDetails.Country}</span>
            </div> 
            <div className="details-content">
              <div className="details-totalConfirmed">
                <span className="stat-label">Total Confirmed Cases Nationwide:</span>
                <span className="stat-number">{this.props.countryDetails.TotalConfirmed}</span>
              </div>
              <div className="details-totalDeath">
                  <span className="stat-label">Total Deaths Nationwide:</span>
                  <span className="stat-number">{this.props.countryDetails.TotalDeaths}</span>
              </div>
              <div className="details-newConfirmed">
                  <span className="stat-label">New Confirmed Cases Nationwide:<br /><span>{date}</span></span>
                  <span className="stat-number">{this.props.countryDetails.NewConfirmed}</span>
              </div>
              <div className="details-newDeath">
                  <span className="stat-label">New Deaths Nationwide:<br /><span>{date}</span></span>
                  <span className="stat-number">{this.props.countryDetails.NewDeaths}</span>
              </div>

              <Graphs countryData={this.props.countryData} />
            </div>          
          </div>
        </div>
        <button className="details-closeButton" type="button" onClick={this.props.handleCloseButton}>&#10005;</button>
      </div>
    );
  }
}

export default Details;