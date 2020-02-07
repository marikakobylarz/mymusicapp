import React from "react";
import styled from "styled-components";
import glass from "../images/glass.png";
import background from "../images/81238.jpg";

const Container = styled.div`
  background-image: url(${background});
  background-position: top left;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  width: 100vw;
  height: 150px;
  overflow: hidden;
`;

const Form = styled.form`
  background-color: rgba(255, 0, 0, 0.8);
  text-align: center;
  line-height: 150px;
`;

const Input = styled.input`
  // text-align: center;
  width: 200px;
  height: 30px;
  // background: white;
  // color: #0d0d31;
  padding: 1%;
  // border: none;
  border-style: none;
  border-radius: 5px 0 0 5px;
  font-size: 12px;
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-image: url(${glass});
  background-position: center;
  background-size: 16px;
  background-repeat: no-repeat;
  background-color: #0d0d31;
  color: #0d0d31;
  height: 30px;
  width: 38px;
  border: none;
  border-radius: 0 5px 5px 0;
  :focus {
    outline: none;
  }
`;

const SearchBar = props => {
  const { submit, value, change } = props;

  return (
    <Container>
      <Form onSubmit={submit}>
        <Input
          placeholder="Search songs..."
          type="text"
          onChange={change}
          value={value}
        />
        <Button>.</Button>
      </Form>
    </Container>
  );
};

export default SearchBar;
