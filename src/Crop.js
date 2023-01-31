import React from "react";
import '../src/Crop.css';
function Crop(props) {
  return (
    <>
      <div className="maincrop" id="card">
        <p style={{ backgroundColor: props.colo }}>
          Success rate : {props.badg}
        </p>
        <div id="card-img">
          <img src={props.imag} alt="image" ></img>
        </div>
        <div id="card-content">
          <h2>{props.name}</h2>
          <table>
            <tr>
              <td>Days for Germination</td>
              <td>: {props.gem}</td>
            </tr>
            <tr>
              <td>Days for Maturation</td>
              <td>: {props.matu}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Crop;
