/** NOTE: B 컴포넌트에서 성능개선을 한 예시 */

import React from 'react'
import PropTypes from 'prop-types'

const C = ({ message, todos }) => {
  return (
    <article className='w-full'>
      <h1 className='text-3xl'>C Component</h1>
      <p className='my-5'>{message}</p>
      <List todos={todos} />
    </article>
  )
}
const List = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Item
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  )
}
const Item = ({ todo }) => {
  return (
    <li>
      <label
        htmlFor={'C_' + todo.id}
        className='mb-2 block w-full rounded-md bg-gray-50 p-2 shadow-xl'>
        <input
          type='checkbox'
          id={'C_' + todo.id}
          name='todo'
          className='me-2'
        />
        {todo.title}
      </label>
    </li>
  )
}

C.propTypes = {
  message: PropTypes.string,
  todos: PropTypes.array
}
List.propTypes = {
  todos: PropTypes.array
}
Item.propTypes = {
  todo: PropTypes.object
}

export default C
