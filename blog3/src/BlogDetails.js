import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
  const { Id } = useParams()
  const {
    data: user,
    isPending,
    error,
  } = useFetch('https://localhost:7144/api/User/GetUser/' + Id)

  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {user && (
        <article>
          <h2>{user.Email}</h2>
          <h4>
            {' '}
            <i>{user.Firstname}</i>
          </h4>
          <h4>
            {' '}
            <i>{user.Lastname}</i>
          </h4>
          <h4>
            {' '}
            <i>{user.Phone_no}</i>
          </h4>
          <h4>
            {' '}
            <i>{user.Role}</i>
          </h4>
          <h4>
            {' '}
            <i>{user.Created_at}</i>
          </h4>
          <h4>
            {' '}
            <i>{user.Updated_at}</i>
          </h4>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
