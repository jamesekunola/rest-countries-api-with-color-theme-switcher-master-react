import { memo } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../component/useFetch";
import { BsArrowLeft } from "react-icons/bs";
import PreLoader from "../component/PreLoader";
import Error from "../component/Error";

const CountryDetailsPg = memo(() => {
  // hooks
  const { countryName } = useParams();
  const url = `https://restcountries.com/v2/name/${countryName}`;

  const { isLoading, countryData, isError } = useFetch(url);

  if (isLoading) {
    return <PreLoader />;
  }

  if (isError) {
    return <Error />;
  }

  const {
    flags: { svg },
    name,
    nativeName,
    population,
    region,
    subregion,
    languages,
    capital,
    topLevelDomain,
    numericCode,
    borders,
  } = countryData[0];

  return (
    <main>
      <div className="details__page__container">
        <Link to=".." className="bk__btn">
          <BsArrowLeft />
          Back
        </Link>

        <div className="countryDetails_cardcontainer">
          <div className="desc__card__img">
            <img src={svg} alt={`${name} flag`} className="flag" />
          </div>

          <div className="countryDetails__card_info">
            <div className="details__text__left">
              <h1>{name}</h1>
              <p>
                Native Name: <span>{nativeName}</span>
              </p>
              <p>
                Population: <span>{population.toLocaleString()}</span>
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

            <div className="details__text__right">
              <p>
                Top Level Domain: <span>{topLevelDomain}</span>
              </p>
              <p>
                Numeric code: <span>{numericCode}</span>
              </p>
              <p>
                Language: <span>{languages[0].name}</span>
              </p>
            </div>

            <div className="details__border__countries">
              {borders && <p>Border Countries:</p>}
              <div>
                {borders?.map((bor, i) => (
                  <span key={i}>{bor}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});

export default CountryDetailsPg;
