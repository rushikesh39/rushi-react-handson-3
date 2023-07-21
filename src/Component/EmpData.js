import React, { Component } from "react";

export default class EmpData extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    return (
      <div>
        <div className="dataContainer">
          {this.props.data.EmpData.map((item, index) => {
            return (
              <div key={index} className="data">
                <p>Name:{item.name}</p>
                <p>|</p>
                <p>DepartMent:{item.dept}</p>
                <p>|</p>
                <p>Rating:{item.rating}</p>
              </div>
            );
          })}
        </div>
        <button onClick={this.props.backFunction}>Back</button>
      </div>
    );
  }
}
