import React, { Component } from 'react';


class Shaurma extends Component {
  render() {
    return (
      <div className="header">
        {
          this.props.data.map((item, index) => {
            if (item.title === "Шаурма") {
              return (
                <div className="fastFoots">
                  <span>{item.place}</span>
                  <span>{item.title}</span>
                  <img
                    alt={item.name}
                    src={item.img}
                  ></img>
                  <span> {item.cost} сом</span>
                </div>
              )
            }
          })
        }
      </div>
    );
  };
};
export default Shaurma;