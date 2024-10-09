import { FaPlus } from 'react-icons/fa6'
import PropTypes from 'prop-types'

const TodoForm = ({ value, handleSubmit, handleValue }) => {
  return (
    <form
      className='container mx-auto mt-5 rounded-xl bg-primary p-5 text-sm text-white shadow-2xl shadow-primary'
      onSubmit={handleSubmit}>
      <div className='flex w-full gap-5 rounded-md'>
        <label
          htmlFor='charge'
          className='w-full'>
          <input
            id='todo'
            name='todo'
            type='text'
            className='block w-full rounded-md bg-transparent px-3.5 py-2 shadow ring-1 ring-inset ring-gray-300 transition placeholder:text-gray-300 focus:bg-white focus:bg-opacity-20 focus-visible:outline-none sm:text-lg'
            autoComplete='off'
            placeholder='할 일'
            value={value}
            onChange={handleValue}
          />
        </label>
        <button
          type='submit'
          className='block rounded-md bg-secondary px-3.5 py-2 text-center shadow focus-within:outline-none hover:bg-active focus:bg-active'
          onClick={handleSubmit}>
          <FaPlus className='inline' />
          <span className='hidden'>추가</span>
        </button>
      </div>
    </form>
  )
}

TodoForm.propTypes = {
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleValue: PropTypes.func
}

export default TodoForm
