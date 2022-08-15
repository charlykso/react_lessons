// import { useState, useEffect } from "react";
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
  const {
    data: users,
    isPending,
    error,
  } = useFetch('https://localhost:7144/api/user/getallusers')

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {users && <BlogList users={users} />}
    </div>
  )
}

export default Home
