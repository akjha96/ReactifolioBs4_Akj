import React from "react";
import styled from "styled-components";

const MyScroll = styled.div`
  position: absolute;
  z-index: 9999;
  bottom: 1px;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  text-shadow: 1px 1px #45a29e;
  color: #fff;

  .turn {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

const ScrollDown = () => {
  return (
    <MyScroll>
      <div className="turn">
        <span>></span>
      </div>
    </MyScroll>
  );
};

export default ScrollDown;
