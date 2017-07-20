import React from 'react';
import ReactDOM from 'react-dom';

// import './index-completed.jsx';
const WeatherReport = ({ name, temp, humidity, description }) => {
  return <div className="card p-1">
    <div className="card-block">
      <h1>{name}</h1>
      <p>Temperature: {temp}</p>
      <p>Humidity: {humidity}</p>
      <p>Description: {description}</p>
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
    const json = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=0fbbf897fdc8751bb1b5eb559319fe18&units=imperial`);
    const json = await response.json();

    if(json) {
      if(json.cod === '404') {
        this.setState({ error: 'Not a real zip code'});
        return;
      }

      console.log(json);
      const { name, main: {temp, humidity}, weather: [{description}]} = json;
      const object = { name, temp, humidity, description };

      const reports = this.state.reports.slice();
      reports.push(object);
      this.setState({reports})
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
      {this.state.error && <div className="flash flash-error">{this.state.error}</div>}
      <p>{this.state.reports.length} weather reports downloaded </p>
      <form className="form-inline" onSubmit={(e) => this.addZip(e)}>
        <input ref={(elt) => this.zipInput = elt} type="text" placeholder="Enter zip code" />
        <button type="submit" className="btn btn-primary btn-sm">
          Get weather
        </button>

      </form>

      {this.state.reports.map((report, i) => <WeatherReport {...report} key={i} />)}
    </div>
  }

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<WeatherApp />, document.getElementById('root'));
})
