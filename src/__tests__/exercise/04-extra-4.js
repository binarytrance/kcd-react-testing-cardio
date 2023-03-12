// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
// import faker from 'faker'
import {build, fake} from '@jackfranklin/test-data-bot'

// this will handle overrides as well
// buildLoginForm is generated with the build utility
const buildLoginForm = build({
  fields: {
    username: fake(f => {
      // console.log(f.internet, 'f.internet')
      return f.internet.userName()
    }), // fake fn will ensure we will generate a new username password every time we call buildLoginForm fn
    password: fake(f => f.internet.password()),
  },
})
test('submitting the form calls onSubmit with username and password', async () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  let submittedData
  const handleSubmit = jest.fn() // mock fn
  render(<Login onSubmit={handleSubmit} />)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  //
  // 🐨 get the username and password fields via `getByLabelText`
  const userNameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)

  const {username, password} = buildLoginForm({
    password: 'this is not a password',
  }) //"We just need a normal login form,except the password needs to be something specific for this test."
  console.log(
    buildLoginForm({
      password: 'this is not a password',
    }),
  )
  const submitButton = screen.getByRole('button', {name: /submit/i})
  // console.log(userName)
  // 🐨 use `await userEvent.type...` to change the username and password fields to
  //    whatever you want
  await userEvent.type(userNameInput, username)
  await userEvent.type(passwordInput, password)
  //
  // 🐨 click on the button with the text "Submit"
  await userEvent.click(submitButton)
  //
  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  })
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
