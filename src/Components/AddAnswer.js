import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddAnswer = () => {
  const [name, setName] = useState('');
  const { AddAnswer } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newAnswer = {
      id: uuid(),
      name
    }
    AddAnswer(newAnswer);
    history.push("/");
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
       
      <FormGroup>
      
        <Label>answer</Label>
        <Input type="text" value={name} onChange={onChange} name="answer" placeholder="Enter answer" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
export default AddAnswer;