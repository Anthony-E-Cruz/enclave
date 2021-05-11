import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';

const Form = styled.form`
  border-bottom: 1px solid black;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center; 

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
  }
  
`

const Message = styled.div`
  
`

const FormRow = styled.div`
`

const Label = styled.label`
`

const Span = styled.span`
  margin: .5rem
`

const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid;

  &:focus {
    outline: none;
  }
`

const FormButton = styled.button`
  margin: 1rem
`

export default class SubscribeForm extends React.Component {

  state = {
    email: '',
    message: ''
  };

  handleInputChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
          [name]: value
      });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email);
    this.setState({ message: result.msg });
  };

  render() {
    return (
      <Form name="subscribeForm" method="POST" onSubmit={this.handleSubmit}>
        <Message dangerouslySetInnerHTML={{ __html: this.state.message}} />
        <Span className="screen-reader-text">Join Our Newsletter</Span>
        <FormRow>
          <FormInput
            className="subscribe-email"
            type="email"
            name="email"
            placeholder="Enter Email Address..."
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </FormRow>
        <FormButton className="button" type="submit">
          Subscribe
        </FormButton>
      </Form>
    );
  }
}