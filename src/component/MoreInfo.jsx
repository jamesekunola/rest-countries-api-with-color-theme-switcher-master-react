import React from "react";

const MoreInfo = React.memo(
  ({ name, flags: { svg }, nativeName, population, region, capital }) => {
    return (
      <div className="details__card">
        <img src={svg} alt={`${name} flag`} />

        <div className="card__text-container">
          <div className="card__text">
            <h2>{name}</h2>
            <p>
              Native Name: <span>{nativeName}</span>
            </p>
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Sub Region: <span>{subregion}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </div>

          <div className="card__text2">
            <p>
              Top Level Domain: <span></span>
            </p>
            <p>
              Currencies: <span></span>
            </p>
            <p>
              Languages: <span></span>
            </p>
          </div>

          <div className="card__text3">
            <h1>Border Countries</h1>
            <span>France</span>
            <span>German</span>
            <span>Netherlands</span>
          </div>
        </div>
      </div>
    );
  }
);

export default MoreInfo;
