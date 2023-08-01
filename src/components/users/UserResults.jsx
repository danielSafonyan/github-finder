import { useEffect, useState, useContext } from 'react'
import baseURL from '../../GitHubApi.js'
import UserItem from './UserItem.jsx'
import { GithubContext } from '../../context/github/GithubContext.jsx'

function UserResults() {
    const { state } = useContext(GithubContext)
    if (state.isLoading) { return <h2>Loading users.</h2> }
    if (state.status === 0) { return <h2>Let&apos;s find users.</h2> } 
    if (state.status === 404) { return <h2>No users with such username.</h2> } 
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 pb-5'>
        {state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
  )
}

export default UserResults
