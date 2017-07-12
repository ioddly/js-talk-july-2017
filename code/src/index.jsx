import React, { Component } from 'react';
import { render } from 'react-dom';

let setGlobalState, getGlobalState;

const EMOJI_SUN = String.fromCodePoint(0x2600); // ☀️
const EMOJI_CLOUD = String.fromCodePoint(0x2601); //☁

class WeatherReport extends Component {
  fetchWeather() {
    window.fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.props.zipCode},us&appid=0fbbf897fdc8751bb1b5eb559319fe18&units=imperial`)
      .then(response => response.json())
      .then(json => {
        if (json.cod === '404') {
          this.setState({ error: `Could not find weather for ${this.props.zipCode}` });
          return;
        }

        const { name, main } = json;
        const { humidity, temp } = main;
        const { description } = json.weather[0];
        
        this.setState({ name, humidity, temp, description });
      });
  }

  componentWillMount() {
    this.state = {};
    this.fetchWeather();
  }

  removeReport() {
    setGlobalState({ zipCodes: getGlobalState().zipCodes.filter(zip => zip !== this.props.zipCode) });
  }

  render() {
    if(this.state.error) {
      return <div className="card">
        <div className="card-block">
          <button className="btn btn-warning btn-sm" onClick={() => this.removeReport()}>Remove</button>
          <p>{this.state.error}</p>
        </div>
      </div>;
    }

    if(!this.state.name) {
      return <p>Loading weather...</p>;
    }

    let emoji = EMOJI_SUN;

    if (this.state.description !== 'clear sky') {
      emoji = EMOJI_CLOUD;
    }

    return <div className="card">
      <div className="card-block">
        <span style={{ 'fontSize': '2em' }}>{emoji}</span>
        {this.state.name} ({this.props.zipCode})

        <div className="float-right" style={{'display': 'inline'}}>
          <button className="btn btn-warning btn-sm" onClick={() => this.removeReport()}>
            Remove report
          </button>
        </div>

        <div>{this.state.humidity}% humidity</div>
        <div>{this.state.temp}* temperature</div>
      </div>
    </div>
  }
}

class WeatherControls extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addZip(e) {
    e.preventDefault();

    if(this.zipInput.value.length !== 5) {
      this.setState({ error: `Zip codes must be five digits long :(`})
      return;
    }

    const zipNumber = parseInt(this.zipInput.value, 10);

    if(isNaN(zipNumber)) {
      this.setState({ error: `${this.zipInput.value} is not a valid zip code :(` });
      return;
    }

    const newZipCodes = this.props.zipCodes.slice();
    newZipCodes.push(this.zipInput.value);

    setGlobalState({ zipCodes: newZipCodes });
  }

  render() {
    return <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form className="form-inline" onSubmit={(e) => this.addZip(e)}>
        <input className="form-control" type="text" ref={(elt) => { this.zipInput = elt }} />
        <button className="btn btn-primary">Add zipcode</button>
      </form>
    </div>
  }
}

class WeatherApp extends Component {
  constructor() {
    super();

    this.state = { zipCodes: [] };

    setGlobalState = (state) => {
      this.setState(state);
    }

    getGlobalState = () => this.state;
  }

  render() {
    const reports = this.state.zipCodes.map((zip, i) => 
      <WeatherReport key={i} zipCode={zip} />
    );

    return <div className="container">
      <WeatherControls zipCodes={this.state.zipCodes} />
      {reports}
    </div>;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render(<WeatherApp />, document.getElementById('root'));
});