// fetch.jsx - fake weather fetch without internet, in case internet doesn't work


export const reports = {
  '90210': 
    {"coord":{ "lon":-118.41, "lat":34.09 },"weather":[{ "id": 701, "main": "Mist", "description": "mist", "icon": "50n" }], "base":"stations", "main":{ "temp":70.65, "pressure":1015, "humidity":88, "temp_min":64.4, "temp_max":75.2 },"visibility":16093, "wind":{ "speed":5.82, "deg":280 },"clouds":{ "all":75 },"dt":1500438960, "sys":{ "type":1, "id":396, "message":0.0039, "country":"US", "sunrise":1500468974, "sunset":1500519804 },"id":0, "name":"Beverly Hills", "cod":200 },

  '77079': 
    { "coord":{ "lon":-95.6, "lat":29.77 },"weather":[{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "base":"stations", "main":{ "temp":79, "pressure":1017, "humidity":78, "temp_min":75.2, "temp_max":80.6 },"visibility":16093, "wind":{ "speed":6.93, "deg":170 },"clouds":{ "all":1 },"dt":1500440100, "sys":{ "type":1, "id":2646, "message":0.0069, "country":"US", "sunrise":1500464073, "sunset":1500513760 },"id":0, "name":"Houston", "cod":200 },

  '12345': 
    {"coord":{"lon":-73.94,"lat":42.81},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"}],"base":"stations","main":{"temp":66.13,"pressure":1017,"humidity":83,"temp_min":62.6,"temp_max":71.6},"visibility":16093,"wind":{"speed":2.68,"deg":177.503},"clouds":{"all":1},"dt":1500440040,"sys":{"type":1,"id":2088,"message":0.0049,"country":"US","sunrise":1500456887,"sunset":1500510534},"id":0,"name":"Schenectady","cod":200}

};

export const fetch = (url) => {
  const zip = /zip=(\d+)/.exec(url)[1];
  return new Promise((resolve, reject) => {
    resolve({
      json() {
        return new Promise((resolve, reject) => {
          if(reports[zip]) {
            resolve(reports[zip])
          } else {
            resolve({ cod: '404' })
          }
        });
      }
    });
  })
}