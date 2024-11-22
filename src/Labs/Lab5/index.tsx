import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";

function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a
          href="http://localhost:4000/lab5/welcome"
          className="list-group-item"
        >
          Welcome
        </a>
      </div>
      <hr />
      <EnvironmentVariables></EnvironmentVariables>
      <PathParameters></PathParameters>
      <QueryParameters></QueryParameters>
      <WorkingWithObjects></WorkingWithObjects>
      <WorkingWithArrays></WorkingWithArrays>
      <hr />
      <HttpClient></HttpClient>
      <WorkingWithObjectsAsynchronously></WorkingWithObjectsAsynchronously>
      <WorkingWithArraysAsynchronously></WorkingWithArraysAsynchronously>
    </div>
  );
}

export default Lab5;
