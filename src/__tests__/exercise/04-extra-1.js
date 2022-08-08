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
  const handleSubmit = jest.fn() // mock fn
  // we could pass in a fn to .fn() to make it do something
  // we could call handleSubmit.mockImplementation/.returnValue etc
  render(<Login onSubmit={handleSubmit} />)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  //
  // 🐨 get the username and password fields via `getByLabelText`
  const userName = screen.getByLabelText(/username/i)
  const password = screen.getByLabelText(/password/i)
  const enteredUserName = 'binarytrance'
  const enteredPassword = `not a password`
  const submitButton = screen.getByRole('button', {name: /submit/i})
  // console.log(userName)
  // 🐨 use `await userEvent.type...` to change the username and password fields to
  //    whatever you want
  await userEvent.type(userName, enteredUserName)
  await userEvent.type(password, enteredPassword)
  //
  // 🐨 click on the button with the text "Submit"
  await userEvent.click(submitButton)
  //
  expect(handleSubmit).toHaveBeenCalledWith({
    username: enteredUserName,
    password: enteredPassword,
  })
  expect(handleSubmit).toHaveBeenCalledTimes(1)

  // in exercise 1, we tested the return value of handleSubmit
  // but in this one, we are testing only whether the args are correctly called and the number of times it is being called.
  // they don't seem to be equivalent
  // is it not necessary for us to test the return value of a function everytime?
})

/*
eslint
  no-unused-vars: "off",
*/
