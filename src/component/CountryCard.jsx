import React from "react";

const CountryCard = React.memo(
  ({ name, flags: { svg }, population, region, capital }) => {
    return (
      <>
        <img src={svg} alt="country flag" />
        <div className="card__text">
          <h2>{name}</h2>
          <p>
            population : <span>{population}</span>
          </p>
          <p>
            Region : <span>{region}</span>
          </p>
          <p>
            Capital : <span>{capital}</span>
          </p>
        </div>
      </>
    );
  }
);

export default CountryCard;
