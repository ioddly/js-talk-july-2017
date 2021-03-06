import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import { fetch } from './fetch';
// const fetch = window.fetch;

const Report = ({removeReport, report: {name, temp, humidity, description, zip}}) => {
  // const name = props.
  return <div className="card mb-1">
    <div className="card-block">
      <h1>{name} ({zip})</h1>
      <p>Temperature: {temp} *F</p>
      <p>Humidity: {humidity}%</p>
      <p>{description}</p>
      <button className="btn btn-danger" onClick={() => removeReport()}>Remove report</button>
    </div>
  </div>;
}

class WeatherApp extends Component {
  constructor() {
    super();

    this.state = {
      reports: []
    };
  }

  async fetchWeather(zip) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=0fbbf897fdc8751bb1b5eb559319fe18&units=imperial`);
    const json = await response.json();

    console.log(JSON.stringify(json));
    if(json) {
      if (json.cod === '404') {
        this.setState({ error: `${zip} is an invalid zip` });
        return null;
      }

      const { name, main: { temp, humidity }, weather: [{description}] } = json;

      const object = { name, temp, humidity, description, zip };

      const updatedReports = this.state.reports;
      updatedReports.push(object);
      this.setState({ reports: updatedReports, error: '' })
    }
  }

  addZip(event) {
    event.preventDefault();

    const zipText = this.element.value;

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

  removeReport(i) {
    this.setState({ reports: this.state.reports.filter((r, ie) => i !== ie) });
  }

  render() {
    return <div className="container">
      <div>
        {this.state.error && <p>{this.state.error}</p>}

        <form className="form-inline" onSubmit={event => this.addZip(event)}>
          <input className="form-control" type="text" placeholder="Enter zip code"
            ref={elt => this.element = elt} />
          <button type="submit" className="btn btn-primary">Add zipcode</button>
        </form>
      </div>
      <p>Displaying {this.state.reports.length} weather reports</p>
      <button className="btn btn-secondary" onClick={() => this.setState({reports: []})}>Clear reports</button>
      <div className="mt-1">
        {this.state.reports.map((report, i) => <Report report={report} key={i} removeReport={() => this.removeReport(i)} />)}
      </div>
    </div>;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<WeatherApp />, document.getElementById('root'));
});
