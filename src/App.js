import React, { useEffect, useState } from 'react';
import { Card, CardContent, FormControl, MenuItem, Select, Table } from '@material-ui/core';
import './App.css';
import InfoBox from './components/InfoBox';
import MapInfo from './components/MapInfo';
import TableInfo from './components/TableInfo';
import { sortData } from './utils';
import GraphInfo from './components/GraphInfo';
import Author from './components/Author';


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('UZ');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
    })
  }, []);

  useEffect(() => {
    const getCountriesStatistics = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));
        
        const sortedData = sortData(data);
        setTableData(sortedData);
        setCountries(countries);
      });
    };
    getCountriesStatistics();
  }, []);

  const onCountrySelectionChange = async (event) => {
    const countryCode = event.target.value;

    const url = countryCode === 'worldwide' 
      ? "https://disease.sh/v3/covid-19/all" 
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    
    await fetch(url) 
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);
      })
  };
  return (
    <>
    <div className="app">
     <div className="app__left">
     <div className="app__header">
        <h1>Covido-Radar ☢️</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountrySelectionChange} value={country}>
            <MenuItem value="worldwide"> WorldWide</MenuItem>
            {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}
                </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="app__stats">
          <InfoBox title="Coronavirus cases:" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox title="Recovered:"cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Deaths:" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
      </div>
      
      <MapInfo />
     </div>
       <Card className="app__right">
          <CardContent>
            <div className="app__information">
              <h3>Live Cases By Country</h3>
              <TableInfo countries={tableData} />
              <h3>Worldwide {casesType}</h3>
              <GraphInfo casesType={casesType}/>
            </div>
          </CardContent>
       </Card>
    </div>
    <Author />
    </>
  );
}

export default App;