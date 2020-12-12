import React, { Component } from 'react';
import Country from './Country';
const today = new Date();
const date = new Intl.DateTimeFormat('en', { month: 'long', day: '2-digit', year: 'numeric' }).format(today);

class Countries extends Component {
  render() {
    const sortedCountries = this.props.countries.sort((a,b) => {
      if (a.TotalConfirmed < b.TotalConfirmed) {
        return 1;
      }
      if (a.TotalConfirmed > b.TotalConfirmed) {
        return -1;
      }
      return 0;
    });
    return (
      <div className="App-countries">
        <h2>Statistics By Country <br /><span>{date}</span></h2>
        <p className="country-intro">Click on the country to view COVID-19 data from the time of its first reported case.</p>
        <form onSubmit={this.props.handleSearch}> 
          <input type="text" placeholder="Search By Country" />
          <button type="submit">Search</button>
        </form>
        <ul>
          {sortedCountries.map((country,index) => {
            return <Country key={index} id={country.Country} country={country.Country} slug={country.Slug} countryTotalConfirmed={country.TotalConfirmed} countryTotalDeaths={country.TotalDeaths} handleCountryClick={this.props.handleCountryClick} />
          })}
        </ul>
      </div>
    );
  }
}

export default Countries;