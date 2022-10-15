import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "../component/card.js";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

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
                <Button variant="primary">Learn More!</Button>
                <Button variant="primary heart">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </span>
                </Button>
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
                  <Button variant="primary">Learn More!</Button>
                  <Button variant="primary heart">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </span>
                  </Button>
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
                  <Button variant="primary">Learn More!</Button>
                  <Button variant="primary heart">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </span>
                  </Button>
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
