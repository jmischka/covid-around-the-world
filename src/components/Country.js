import React, { Component } from 'react';

class Country extends Component {
  render() {
    return (
      <li id={ this.props.id.toLowerCase().replace(/\s/g,'-') } className="App-country">
        <div className="country-name"><a href={ this.props.country } data-slug={ this.props.slug } onClick={ this.props.handleCountryClick } >{ this.props.country }</a></div>
        <div className="country-totalConfirmed">
          <span className="country-statLabel">Total Confirmed:</span>
          <span className="country-stat">{ this.props.countryTotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</span>
        </div>
        <div className="country-totalDeaths">
          <span className="country-statLabel">Total Deaths:</span>
          <span className="country-stat">{ this.props.countryTotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</span>
        </div>
      </li>
    );
  }
}

export default Country;