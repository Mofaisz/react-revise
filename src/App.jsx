import "./App.css";
import data from "./data";
// let data = require("./data");

// console.log(data);
const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="heading">Where in the world?</h1>
        <button className="dark-mode-button">Dark Mode</button>
      </div>
    </>
  );
};

const Card = ({ value }) => {
  return (
    <>
      <div className="card">
        <img className="flag-png" src={value.flags.png} alt="Flag png" />
        <div className="country-info">
          <h2 className="name">{value.name.common} </h2>
          <p className="population">Population : {value.population}</p>
          <p className="region">Region : {value.region}</p>
          <p className="capital">Capital : {value.capital}</p>
        </div>

        {/* <h3>{official}</h3> */}
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="card-list">
        {data.map((value) => {
          return <Card value={value} key={value.ccn3} />;
        })}
      </div>
    </>
  );
};

function App() {
  return (
    <>
      {/*
      header
      body
      footer

    */}
      <Header />
      <Body />
    </>
  );
}

export default App;
