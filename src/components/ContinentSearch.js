import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaAnchor } from 'react-icons/fa';
import Nav from './Access/Nav';
import { fetchCountries } from '../redux/countries';

const ContinentSearch = () => {
  let regionDetails = useSelector((state) => state.entities.countries);

  const { title } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries(title));
  }, []);

  const [searchText, setYourFilterText] = useState('');
  regionDetails = regionDetails.filter((country) => country.name.common.includes(searchText));
  const handleChange = (e) => {
    setYourFilterText(e.target.value.toLowerCase());
  };

  return (
    <div>
      <Nav title={title} />
      <div className="homs displayFlex flex-column">
        <ul className="displayFlex space-btn home-data">
          <li className="text-right">
            <NavLink
              to="/"
              className="navLink displayFlex justify-center align-center"
            >
              <FaAnchor />
              Back to Home
            </NavLink>
          </li>
          <li className="displayFlex flex-column text-right">
            <h2>{title}</h2>
            <p>
              {regionDetails.length}
              Countries
            </p>
          </li>
        </ul>
      </div>
      <div>
        <div className="search">
          <input
            name="query"
            value={searchText}
            onChange={handleChange}
            placeholder="Search Country"
            className="searchTerm"
          />
        </div>
        <ul className="grid-container">
          {regionDetails.map((country) => (
            <NavLink
              to={`/country/${country.name.common}`}
              key={country.name.common}
              className="navLink"
            >
              <li className="country-list displayFlex space-btn">
                <div className="displayFlex justify-center align-center">
                  <img
                    src={country.flags.svg}
                    className="flag"
                    alt={country.flags.svg}
                  />
                  <h3>{country.name.common}</h3>
                </div>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContinentSearch;