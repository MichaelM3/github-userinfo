import React from 'react'
import { Form, Button, Input } from 'semantic-ui-react'

const UserForm = (props) => {
  return (
    <Form align="center" style={{ marginTop: "15%" }} onSubmit={props.handleUserSubmit}>
      <Input
        onChange={props.handleUsernameInput}
        type="text"
        name="formUsernameInput"
        placeholder="Username"
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default UserForm;
