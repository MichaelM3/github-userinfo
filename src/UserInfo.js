import React from 'react'

const UserInfo = (props) => {

  // Some users do not have their email publicly available
  // therefore the value will turn up null
  const fixingNullEmail = () => {
    if (!props.user.email) {
      return "No Email Listed"
    }
  }

  // Some users do not have a company listed
  // therefore the value will turn up null
  const fixingNullCompany = () => {
    if (!props.user.Company) {
      return "No Company Listed"
    }
  }

  // A shorthand for logic, because props.user will be
  // null on the first render
  return (
    <div>
      { props.user &&
        <div align="center">
          <h1>{props.user.name}</h1>
          <h3>Email: {fixingNullEmail()}</h3>
          <h3>Company: {fixingNullCompany()}</h3>
          <h3>Public Repos: {props.user.public_repos}</h3>
        </div>
      }
    </div>
  )
}

export default UserInfo;
