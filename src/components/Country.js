import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaICursor } from 'react-icons/fa';
import Nav from './Access/Nav';
import { fetchCountries } from '../redux/countries';

const Country = () => {
  const countries = useSelector((state) => state.entities.countries);
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  const country = countries.filter((country) => country.name.common === name);
  return (
    <div>
      <Nav title={name} />
      <div className="homs">
        <ul className="displayFlex space-btn home-data">
          <li className="text-right">
            <NavLink
              to="/"
              className="navLink displayFlex justify-center align-center"
            >
              <FaICursor />
              Back
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <table className="country-table">
          <thead>
            <th>Field</th>
            <th>Details</th>
          </thead>
          {country.map((data) => (
            <tbody key={data.name.common}>
              <tr>
                <td>Name</td>
                <td>{data.name.common}</td>
              </tr>
              <tr>
                <td>Capital City</td>
                <td>{data.capital}</td>
              </tr>
              <tr>
                <td>Coat of Arm</td>
                <td>
                  <img
                    src={data.coatOfArms.svg}
                    alt={data.coatOfArms.svg}
                    className="coat-of-arm"
                  />
                </td>
              </tr>
              <tr>
                <td>Population</td>
                <td>{data.population}</td>
              </tr>
              <tr>
                <td>Sub Region</td>
                <td>{data.subregion}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Country;