/** NOTE: 모든 요소가 하나의 컴포넌트에 선언된 예시 */

import React from 'react'
import PropTypes from 'prop-types'

const A = ({ message, todos }) => {
  return (
    <article className='w-full'>
      <h1 className='text-3xl'>A Component</h1>
      <p className='my-5'>{message}</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label
              htmlFor={'A_' + todo.id}
              className='mb-2 block w-full rounded-md bg-gray-50 p-2 shadow-xl'>
              <input
                type='checkbox'
                id={'A_' + todo.id}
                name='todo'
                className='me-2'
              />
              {todo.title}
            </label>
          </li>
        ))}
      </ul>
    </article>
  )
}

A.propTypes = {
  message: PropTypes.string,
  todos: PropTypes.array
}

export default A
