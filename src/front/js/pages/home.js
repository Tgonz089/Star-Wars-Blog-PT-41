import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "../component/card.js";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { HeartButton } from "../component/heartButton.js";

export const Home = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container">
        <h1>Characters</h1>
        <div className="charctersRow">
          {store.people.map((person, index) => {
            return (
              <Cards key={index}>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>Gender: {person.gender}</Card.Text>
                <Card.Text>Eye Color: {person.eye_color}</Card.Text>
                <Card.Text>Hair Color: {person.hair_color}</Card.Text>
                <Link to={"/people/" + (index + 1)} className="link">
                  <Button className="btnLearnMore">Learn more!</Button>
                </Link>{" "}
                <HeartButton name={person.name} />
              </Cards>
            );
          })}
          ;
        </div>
        &nbsp;
        <div className="planets">
          <h1>Planets</h1>
          <div className="planetsRow">
            {store.planets.map((planet, index) => {
              return (
                <Cards key={index}>
                  <Card.Title>{planet.name}</Card.Title>
                  <Card.Text>Population: {planet.population}</Card.Text>
                  <Card.Text>Terrain: {planet.terrain}</Card.Text>
                  <Link to={"/planet/" + (index + 1)} className="link">
                    <Button className="btnLearnMore">Learn more!</Button>
                  </Link>{" "}
                  <HeartButton name={planet.name} />
                </Cards>
              );
            })}
            ;
          </div>
        </div>
        &nbsp;
        <div className="vehicles">
          <h1>Vehicles</h1>
          <div className="vehiclesRow">
            {store.vehicles.map((vehicle, index) => {
              return (
                <Cards key={index}>
                  <Card.Title>{vehicle.name}</Card.Title>
                  <Card.Text>Model: {vehicle.model}</Card.Text>
                  <Card.Text>Crew: {vehicle.crew}</Card.Text>
                  <Link to={"/vehicle/" + (index + 1)} className="link">
                    <Button className="btnLearnMore">Learn more!</Button>
                  </Link>{" "}
                  <HeartButton name={vehicle.name} />
                </Cards>
              );
            })}
            ;
          </div>
        </div>
      </div>
    </>
  );
};
