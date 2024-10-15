/** NOTE: B 컴포넌트에서 성능개선을 한 예시 */

import React, { useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

/** NOTE: B 문제 발생
 * 재사용성과 렌더링 최적화를 위해서 컴포넌트를 분할하였으나,
 * 1. Message 업데이트 시 하위의 컴포넌트도 같이 재렌더링 됨
 * 2. 부모 컴포넌트가 재 렌더링 될 때 마다 하위 컴포넌트에 전달한 함수가 계속 새로 전달됨 -> 하위 컴포넌트 신규 생성
 */
const C = ({ message, todos }) => {
  console.log('C components is Rendering')
  /** NOTE: C 문제 2 해결: useCallback 를 사용한 문제 해결
   * - const 함수명 = useCallback(함수, [])
   */
  const testFn = useCallback(() => {}, [])
  return (
    <article className='w-full'>
      <Title testFn={testFn} />
      <p className='my-5'>{message}</p>
      <List todos={todos} />
    </article>
  )
}
const Title = React.memo(function Title() {
  console.log('C Title is Rendering')
  return <h1 className='text-3xl'>C Component</h1>
})
/** NOTE: C 문제 1 해결: useMemo 를 사용한 문제 해결
 * - const 컴포넌트명 = React.memo(function 컴포넌트명(props) { 컴포넌트 }, 비교함수)
 *    - 비교함수: props 가 object, array 등의 타입일 경우 세 번째 인자로 넣으며, 매개변수로 prevProps, nextProps 를 받는다
 * - const 컴포넌트명 = (props) => { return useMemo(() => ( … ), [props.값1, ...]) }
 */
const List = React.memo(function List({ todos }) {
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
}, compareFn) // props 가 배열이기 때문에 비교 함수 사용
function compareFn(prevProps, nextProps) {
  /** NOTE: 깊은 비교
   * Object depth 가 깊지 않은 경우 -> JSON.stringify
   * Object depth 가 깊은 경우      -> lodash 라이브러리의 isEqual 사용
   */
  return JSON.stringify(prevProps) == JSON.stringify(nextProps)
}
const Item = ({ todo }) => {
  return useMemo(
    () => (
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
    ),
    [todo.id, todo.title]
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
