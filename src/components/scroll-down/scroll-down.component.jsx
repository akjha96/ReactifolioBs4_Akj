import React from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

const MyScroll = styled.div`
  position: relative;
  z-index: 1000000;
  bottom: 5.5em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: 800;
  text-shadow: 1px 1px #45a29e;
  color: #fff;
  animation: MoveUpDown 2s linear infinite;

  .turn {
    cursor: pointer;
    transform: rotate(90deg);
    color: black;
  }
  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 85px;
    }
    50% {
      bottom: 70px;
    }
  }
`;

const handleScrollDown = () => {};

const ScrollDown = () => {
  return (
    <MyScroll>
      <div onClick={handleScrollDown}>
        <Nav.Link href="#about" className="turn">
          {" "}
          &gt;&gt;&gt;{" "}
        </Nav.Link>
      </div>
    </MyScroll>
  );
};

export default ScrollDown;
