import React, { Component } from 'react';
import Header from './components/Header';
import Global from './components/Global';
import Countries from './components/Countries';
import Details from './components/Details';
import Footer from './components/Footer';
import './App.css';

require('dotenv').config()
const enpoint = 'https://api.covid19api.com/summary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      global: {},
      countries: [],
      countryDetails: {},
      countryData:[],
      countryImage: '',
      triggered: false
    }
    this.handleCountryClick = this.handleCountryClick.bind(this);
    this.handleCloseButton = this.handleCloseButton.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    fetch(enpoint)
      .then(response => response.json())
      .then(data => this.setState({
        countries: data.Countries,
        global: data.Global
      }));
  }

  handleSearch = (e) => {
    e.preventDefault();
    let searchedCountry = e.target[0].value.toLowerCase().replace(/\s/g,'-');
    let elem = document.getElementById(searchedCountry);
    if (!elem) {
      alert('Sorry. We can not find your search');
    } else {
      elem.scrollIntoView({behavior: 'smooth'});
    }
    e.target[0].value = '';
  }

  handleCountryClick = (e) => {
    e.preventDefault();
    let country = e.target.dataset.slug;
    !this.state.triggered ? this.setState({triggered: true}) : this.setState({triggered: false});

    const filterCountries = this.state.countries.filter(country => country.Slug === e.target.dataset.slug);
    this.setState({countryDetails: filterCountries[0]});

    Promise.all([
      fetch(`https://api.covid19api.com/total/dayone/country/${country}`),
      fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${country}&image_type=photo&orientation=horizontal&per_page=3`)
    ]).then(responses => {
        return Promise.all(responses.map(response => {
        return response.json();
      }));
    }).then(data => {
      this.setState({
        countryData: data[0],
        countryImage: data[1].hits[0].webformatURL
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  handleCloseButton = (e) => {
    e.preventDefault();
    !this.state.triggered ? this.setState({triggered: true}) : this.setState({triggered: false});
    document.querySelector('.details-window').scrollTo(0,0);
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Global global={this.state.global} />
        <Countries countries={this.state.countries} handleCountryClick={this.handleCountryClick} placeholderText={this.state.placeholderText} handleSearch={this.handleSearch} />
        <Details countryDetails={this.state.countryDetails} countryData={this.state.countryData} countryImage={this.state.countryImage} triggered={this.state.triggered} handleCloseButton={this.handleCloseButton} />
        <Footer />
      </div>
    );
  }
}

export default App;
