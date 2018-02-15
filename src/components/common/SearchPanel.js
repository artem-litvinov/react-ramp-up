import React from 'react';
import { FormGroup, FormControl, Form, InputGroup, Button } from 'react-bootstrap';

import { DeleteButton } from './FAButtons';


const SearchPanel = ({ searchRef, onInput, onDelete }) => {
  return (
    <Form>
      <FormGroup>
        <InputGroup>
          <input
            ref={searchRef}
            type='text'
            placeholder='Search'
            onChange={onInput}
            className='form-control'
          />
          <InputGroup.Button>
            <DeleteButton onClick={onDelete}/>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default SearchPanel;

