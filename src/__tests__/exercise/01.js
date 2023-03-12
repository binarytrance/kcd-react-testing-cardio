// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import Counter from '../../components/counter'

// NOTE: this is a new requirement in React 18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  const element = document.createElement('div')
  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.append(element)
  // 🐨 use createRoot to render the <Counter /> to the div
  const root = createRoot(element)
  act(() => root.render(<Counter />))
  // console.log(document.body.innerHTML)
  // 🐨 get a reference to the increment and decrement buttons:
  //   💰 div.querySelectorAll('button')
  const [decrementButton, incrementButton] = element.querySelectorAll('button')
  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  const messageElement = element.firstChild.querySelector('div')
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  expect(messageElement.textContent).toBe('Current count: 0')
  // 🐨 click the increment button (💰 act(() => increment.click()))
  act(() => incrementButton.click())
  // 🐨 assert the message.textContent
  expect(messageElement.textContent).toBe('Current count: 1')
  // 🐨 click the decrement button (💰 act(() => decrement.click()))
  act(() => decrementButton.click())
  // 🐨 assert the message.textContent
  expect(messageElement.textContent).toBe('Current count: 0')
  //
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  element.remove() // if an earlier test fails, remove won't run and the next tests will fail. hence we use beforeEach and reset our DOM. (see 01extra.js)
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
