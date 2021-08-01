import React from "react";
import useFetch from "./useFetch";

export default function Actors() {
  const { data, isPandingData, dataError } = useFetch(
    "https://swapi.dev/api/people"
  );
  console.log(data && data["results"]);

  return (
    <>
      <h2>Biography in detail</h2>
      {isPandingData
        ? "Loading..."
        : data &&
          data["results"].map((item, key) => {
            return (
              <div
                style={{
                  borderRadius: "6px",
                  boxShadow: "0 0 3px rgba(32, 32, 32, 0.3)",
                  margin: "24px 0",
                }}
              >
                <img
                  src={
                    "https://starwars-visualguide.com/assets/img/characters/" +
                    (key + 1) +
                    ".jpg"
                  }
                  width="100%"
                  style={{
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                  }}
                ></img>
                <h3>{item["name"]}</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 14px",
                    fontSize: "12px",
                  }}
                >
                  <p>Gender: {item["gender"]}</p>
                  <p>Birth year: {item["birth_year"]}</p>
                </div>
              </div>
            );
          })}
    </>
  );
}
