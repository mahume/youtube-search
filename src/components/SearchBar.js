import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const FormWrapper = styled(FormGroup)`
  position: relative;
  span {
    color: red;
    font-weight: 700;
    font-size: 24px;
    position: absolute;
    right: 10px;
    top: -2px;
    :hover {
      color: darkred;
      cursor: pointer;
    }
  }
`

class SearchBar extends Component {
  state = {
    term: ''
  }

  handleInputChange = ({ target }) => {
    this.setState({ term: target.value }, () => {
      this.props.searchYouTube(this.state.term);
    })
  }

  render() {
    return (
      <Form onSubmit={event => event.preventDefault()}>
          <FormWrapper>
            <Label for="youtubeSearch" hidden>YouTube Search</Label>
            <Input 
              type="text" 
              name="youtubeSearch" 
              id="youtubeSearch" 
              placeholder="Search" 
              value={this.state.term}
              onChange={this.handleInputChange}
            />
            <span
              onClick={() => this.setState({ term: '' })}
            >X</span>
          </FormWrapper>
      </Form>
    )
  }
}

export default SearchBar;