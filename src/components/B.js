/** NOTE: 여러 컴포넌트로 나눠준 예시 */

import React from 'react'
import PropTypes from 'prop-types'

/** NOTE: B 문제 발생: 재사용성과 렌더링 최적화를 위해서 컴포넌트를 분할하였으나, Message 업데이트 시 하위의 컴포넌트도 같이 재렌더링 됨 */
const B = ({ message, todos }) => {
  return (
    <article className='w-full'>
      <h1 className='text-3xl'>B Component</h1>
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
        htmlFor={'B_' + todo.id}
        className='mb-2 block w-full rounded-md bg-gray-50 p-2 shadow-xl'>
        <input
          type='checkbox'
          id={'B_' + todo.id}
          name='todo'
          className='me-2'
        />
        {todo.title}
      </label>
    </li>
  )
}

B.propTypes = {
  message: PropTypes.string,
  todos: PropTypes.array
}
List.propTypes = {
  todos: PropTypes.array
}
Item.propTypes = {
  todo: PropTypes.object
}

export default B
