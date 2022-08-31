import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import Nav from '../Access/Nav';
import Header from '../Access/Header';
import { fetchCountries } from '../../redux/countries';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const countries = useSelector((state) => state.entities.countries);

  const ctrs = [];
  countries.map((data) => {
    ctrs.push(data.region);
    return ctrs;
  });

  let regions = [...new Set(ctrs)];
  const countCountries = (array, region) => array.filter((item) => item === region).length;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    setLoading(true);
  }, []);

  const [searchText, setYourFilterText] = useState('');
  regions = regions.filter((continent) => continent.toLowerCase().includes(searchText));
  const handleChange = (e) => {
    setYourFilterText(e.target.value.toLowerCase());
  };

  return (
    <div>
      <Nav title="THE GLOBAL WORLD" />
      <div className="homs">
        <h2>REST-COUNTRIES API</h2>
        <ul className="displayFlex space-btn home-data">
          <li className="displayFlex flex-column text-right">
            <span className="data-number">{regions.length}</span>
            <span>Major Regions</span>
          </li>
          <li className="displayFlex flex-column text-right">
            <span className="data-number">{countries.length}</span>
            <span>Number of Countries</span>
          </li>
        </ul>
      </div>
      <div className="search">
        <input
          name="query"
          value={searchText}
          onChange={handleChange}
          placeholder="Search continent"
          className="searchTerm"
        />
        <FaSearch className="searchButton" />
      </div>
      <div className="grid-container">
        {loading
          ? regions.map((region) => (
            <Header
              key={region}
              title={region}
              number={countCountries(ctrs, region)}
            />
          ))
          : 'loading data...'}
      </div>
    </div>
  );
};

export default Home;
