/** NOTE: 성능이 차이나는 이유와 해결 방법을 공부하기 위한 프로젝트 */

import { useEffect, useState } from 'react'
import './App.css'
import { TodoForm, A, B, C } from './components'

const App = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])
  /** NOTE: useEffect
   * 컴포넌트 렌더링, 또는 관찰 값이 업데이트 될 때 마다 특정 작업을 실행하는 함수
   * 첫 번째 인자: 실행시킬 함수
   * 두 번째 인자: 관찰할 값의 배열
   *    - 배열이 없을 경우: 페이지가 렌더링 될 때마다 실행
   *    - 빈 배열일 경우  : 첫 번째 렌더링 때만 실행
   */

  // 성능 체크를 위한 로딩 부하를 만들기 위해 더미 데이터 요청
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  // Todo 추가 이벤트
  const handleSubmit = e => {
    e.preventDefault()
    if (value == '') return
    setTodos([
      {
        id: crypto.randomUUID(),
        title: value
      },
      ...todos
    ])
    setValue('')
  }
  return (
    <div className='px-5 md:px-0'>
      <TodoForm
        value={value}
        handleValue={e => setValue(e.target.value)}
        handleSubmit={handleSubmit}
      />
      <section className='mx-auto mt-5 flex gap-5 md:container'>
        {/* 모든 요소가 하나의 컴포넌트에 선언된 예시 */}
        <A
          message={value}
          todos={todos}
        />
        {/* 여러 컴포넌트로 나눠준 예시 */}
        <B
          message={value}
          todos={todos}
        />
        {/* B 컴포넌트에서 성능개선을 한 예시 */}
        <C
          message={value}
          todos={todos}
        />
      </section>
    </div>
  )
}

export default App
