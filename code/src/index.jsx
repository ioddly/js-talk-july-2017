import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Report = ({name, temp, humidity, description, zip}) => {
  return <div className="card">
    <div className="card-block">
      <p>{name} ({zip})</p>
      <p>Temperature: {temp} *F</p>
      <p>Humidity: {humidity}%</p>
      <p>{description}</p>
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

  fetchWeather(zip) {
    return window.fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=0fbbf897fdc8751bb1b5eb559319fe18&units=imperial`)
      .then(response => response.json())
      .then(json => {
        if (json.cod === '404') {
          this.setState({ error: `${zip} is an invalid zip` });
          return null;
        }

        const { name, main: { temp, humidity }, weather: [{description}] } = json;

        const object = { name, temp, humidity, description, zip };
        console.log(object);
        const updatedReports = this.state.reports;
        updatedReports.push(object);
        this.setState({ reports: updatedReports, error: '' })
      });
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
      {this.state.reports.map((report, i) => <Report {...report} key={i} />)}
    </div>;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<WeatherApp />, document.getElementById('root'));
});