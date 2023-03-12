// http://localhost:3000/counter

import * as React from 'react'
import faker from 'faker'
import {build, fake} from '@jackfranklin/test-data-bot'

console.log({faker})

// console.log({build, fake})

const buildLoginForm = build({
  fields: {
    username: fake(f => {
      console.log(f, 'f.internet')
      return f.internet.userName()
    }), // fake fn will ensure we will generate a new username password every time we call buildLoginForm fn
    password: fake(f => f.internet.password()),
  },
})

console.log(buildLoginForm())

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  return (
    <div>
      <div>Current count: {count}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter
