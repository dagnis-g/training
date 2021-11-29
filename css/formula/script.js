'use strict';

const roundDom = document.querySelector('.round');
const raceName = document.querySelector('.raceName');
const circuitId = document.querySelector('.circuitId');
const loaction = document.querySelector('.loaction');
const raceDate = document.querySelector('.raceDate');
const raceTemp = document.querySelector('.raceTemp');
const conditions = document.querySelector('.conditions');
const rainChance = document.querySelector('.rainChance');
const raceTime = document.querySelector('.raceTime');
const trackPic = document.querySelector('.track_pic');
fetch('https://ergast.com/api/f1/current/next.json')
  .then(response => response.json())
  .then(data => {
    data.MRData.RaceTable.Races.forEach(race => {
      const lat = race.Circuit.Location.lat;
      const long = race.Circuit.Location.long;
      const racehour = race.time.slice(0, -1);
      const raceDateData = race.date;
      raceName.innerText = race.raceName;
      roundDom.innerText = `Round: ` + race.round;
      trackPic.src = `tracks/${race.Circuit.circuitId}.png`;
      circuitId.innerText = race.Circuit.circuitName;
      raceDate.innerText = race.date;
      //raceTime.innerText = racehour;

      getWeatherHorly(lat, long, raceDateData, racehour);
    });
  });

const getWeatherHorly = function (lat, long, date, hour) {
  fetch(
    `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=1&location=${lat}%2C${long}&contentType=json&unitGroup=metric&shortColumnNames=false`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com',
        'x-rapidapi-key': API_KEY
      },
    }
  )
    .then(response => response.json())
    .then(data =>
      data.locations[`${lat},${long}`].values.forEach(value => {
        if (value.datetimeStr.includes(`${date}T${hour}`)) {
          rainChance.innerText = 'Chance of rain: ' + value.pop + '%';
          raceTemp.innerText = `Air tempereature: ${value.temp}`;
          conditions.innerText = value.conditions;
        }
      })
    )
    .catch(err => console.log(err));
};

const driverStandings = document.querySelector('.container_driverStandings');
const constructorStandings = document.querySelector('.constructor_container');
fetch('https://ergast.com/api/f1/current/driverStandings.json').then(response =>
  response.json().then(data =>
    data.MRData.StandingsTable.StandingsLists[0].DriverStandings.forEach(
      driver => {
        driverStandings.innerHTML += `
        <div class="driver_info">
        <div class="position">${driver.position}</div>
        <div class="driver_nr">${driver.Driver.permanentNumber}</div>
        <div class="driver_fullName">${driver.Driver.familyName} ${driver.Driver.givenName}</div>
        <div class="points">${driver.points}</div>
        </div>`;
      }
    )
  )
);

fetch('https://ergast.com/api/f1/current/constructorStandings.json').then(
  response =>
    response.json().then(data =>
      data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.forEach(
        team => {
          constructorStandings.innerHTML += `
          <div class="driver_info">
              <div class="position">${team.position}</div>
              <div class="driver_fullName">${team.Constructor.name}</div>
              <div class="points">${team.points}</div>
          </div>`;
        }
      )
    )
);
