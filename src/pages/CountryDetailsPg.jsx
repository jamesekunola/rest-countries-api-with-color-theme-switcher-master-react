import React from "react";
import { useParams } from "react-router-dom";

const CountryDetailsPg = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Details page</h1>
    </div>
  );
};

export default CountryDetailsPg;
