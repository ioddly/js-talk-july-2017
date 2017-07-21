import React from 'react';
import ReactDOM from 'react-dom';

/*
const WeatherReport = (props) => {
  return <div className="card">
    <div className="card-block">
      <h1>{props.report.name}</h1>
      <p>Temperature: {props.report.temp}</p>
      <p>Humidity: {props.report.humidity}%</p>
      <p><strong>{props.report.description}</strong></p>
    </div>
  </div>
}

class WeatherApp extends React.Component {
  constructor() {
    super();

    this.state = {
      error: null,
      reports: []
    }
  }

  async fetchWeather(zip) {
    const response = await window.fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=0fbbf897fdc8751bb1b5eb559319fe18&units=imperial`);
    const json = await response.json();

    if(json) {
      if(json.cod === '404') {
        this.setState({error: `Zip ${zip} is not a real place`});
        return;
      }

      const {name, weather: [{description}], main: {temp, humidity}} = json;

      const object = {name, description, temp, humidity, zip};

      const reports = this.state.reports.slice();
      reports.push(object);
      this.setState({ reports });

    }
    console.log(json);
  }

  addZip(event) {
    event.preventDefault();

    const zipText = this.zipInput.value;

    if (zipText.length !== 5) {
      this.setState({ error: `${zipText} should be 5 digits long`});
      return;
    }

    const zipCode = parseInt(zipText, 10);

    if (isNaN(zipCode)) {
      this.setState({ error: `${zipText} is not a valid number`});
      return;
    }

    this.fetchWeather(zipCode);
  }

  render() {
    return <div className="container">
      {this.state.error &&
        <div className="alert alert-error">
          {this.state.error}
        </div>}
      <div>
        <p>{this.state.reports.length} weather reports retrieved</p>
      </div>
      <form className="form-inline" onSubmit={(event) => this.addZip(event)}>
        <input ref={elt => this.zipInput = elt}  type="text" placeholder="Enter zip code"  />
        <button className="btn btn-sm btn-primary">Enter zip code</button>
      </form>
      {this.state.reports.map((report, i) => <WeatherReport report={report} key={i} />)}
    </div>
    return <div><p>Hello world</p></div>
  }
}

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(<WeatherApp />, document.getElementById('root'));

});

*/

import './index-completed.jsx';