import { useState, useContext } from 'react'
import { GithubContext } from '../../context/github/GithubContext'


function UserSearch() {
    const { state, dispatch } = useContext(GithubContext)
    const [text, setText] = useState('')

    function handleChange(e) {
        setText(e.currentTarget.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: "SET_ISLOADING", payload: { isLoading: true } })
        searchUsers()

        async function searchUsers() {
          const params = new URLSearchParams({ q: text })
          const res = await fetch(`https://api.github.com/search/users?${params}`)
          const data = await res.json()
          if (data.total_count > 0) { 
            // dispatch({items: data.items, status: 200}) 
            dispatch({ type: "SET_USERS", payload: { users: data.items, status: 200 } })
          } else if (data.total_count === 0) { 
            dispatch({ type: "SET_USERS", payload: { users: [], status: 404 } })
            // dispatch({ items: [], status: 404 })
          }
          dispatch({ type: "SET_ISLOADING", payload: { isLoading: false } })
        }
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {state.users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: "SET_USERS", payload: { users: [], status: 0 } })}
            className='btn btn-ghost btn-lg'
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
