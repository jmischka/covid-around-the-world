import React, { Component } from 'react';
import coronavirusHero from '../assets/Coronavirus-hero.jpg';
const today = new Date();
const date = new Intl.DateTimeFormat('en', { month: 'long', day: '2-digit', year: 'numeric' }).format(today);

class Global extends Component {
  render() {
    const { global } = this.props; 
    return (
      <div className="App-global">
        <div className="featured-imgWrapper">
            <figure className="featured-img">
              <img src={coronavirusHero} alt="Coronavirus" />
            </figure>
        </div>
        <p className="App-intro"><span>Covid-19 Around The World</span> uses the data repository from the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University to display a snapshot of the total number of confirmed COVID-19 cases and deaths world wide followed by an interactive list of the countries in descending order of total confirmed cases per country.</p>
    <h2>Global Numbers <br /><span>{date}</span></h2> 
        
        <div className="global-content">
            <div className="global-totalConfirmed">
                <span className="stat-label">Total Confirmed Cases WorldWide</span>
                <span className="stat-number">{global.TotalConfirmed}</span>
            </div>
            <div className="global-totalDeath">
                <span className="stat-label">Total Deaths WorldWide</span>
                <span className="stat-number">{global.TotalDeaths}</span>
            </div>
            <div className="global-newConfirmed">
                <span className="stat-label">Newly Confirmed Cases Worldwide</span>
                <span className="stat-number">{global.NewConfirmed}</span>
            </div>
            <div className="global-newDeath">
                <span className="stat-label">New Deaths Worldwide</span>
                <span className="stat-number">{global.NewDeaths}</span>
            </div>                  
        </div>
      </div>
    );
  }
}

export default Global;
