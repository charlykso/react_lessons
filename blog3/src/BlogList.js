import { Link } from 'react-router-dom'
const BlogList = ({ users }) => {
  return (
    <div className='blog-list'>
      <h2>Registered Users</h2>
      {users.map((user) => (
        <div className='blog-preview' key={user.Id}>
          <Link to={`/user/${user.Id}`}>
            <h2>Email: {user.Email}</h2>
            <h4>First name: {user.Firstname}</h4>
            <h4>Last name: {user.Lastname}</h4>
            <h4>Last phone no: {user.Phone_no}</h4>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList
