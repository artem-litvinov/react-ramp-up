import React, { Component } from 'react';
import { FormGroup, Form, InputGroup } from 'react-bootstrap';

import { DeleteButton } from './FAButtons';

class SearchPanel extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      search: ''
    };
  }

  clearSearch = (e) => {
    this.searchInput.value = '';
    this.setState({ search: '' });
    this.props.onChange({ target: this.searchInput });
  }

  setSearchRef = (input) => {
    this.searchInput = input;
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <InputGroup>
            <input
              ref={this.setSearchRef}
              type='text'
              placeholder='Search'
              onChange={this.props.onChange}
              className='form-control'
            />
            <InputGroup.Button>
              <DeleteButton onClick={this.clearSearch} />
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
};

export default SearchPanel;
