import React, { Component } from "react";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";
import styled from "styled-components";
export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free ship",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "30 days return policy",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "secured payment",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      }
    ]
  };
  render() {
    return (
      <ServicedWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map(item => {
              return (
                <div
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                  key={item.id}
                >
                  <div className="service-icon">{item.icon} </div>
                  <div className="mt-3 text-capitalize">{item.title}</div>
                  <p className="mt-3">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ServicedWrapper>
    );
  }
}

const ServicedWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    color: var(--primaryColor);
    font-size: 2.5rem;
  }
  p{
    color: var(--darkGrey)
  }
`;
