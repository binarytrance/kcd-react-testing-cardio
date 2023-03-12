// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  let submittedData
  const handleSubmit = data => {
    // console.log(data)
    return (submittedData = data)
  }
  render(<Login onSubmit={handleSubmit} />)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  //
  // 🐨 get the username and password fields via `getByLabelText`
  const userNameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)
  const username = 'binarytrance'
  const password = `not a password`
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
  // assert that submittedData is correct
  expect(submittedData).toEqual({
    username,
    password,
  })
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
})

/*
eslint
  no-unused-vars: "off",
*/
