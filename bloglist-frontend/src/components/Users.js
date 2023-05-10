import userService from '../services/users'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user }) => {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to={`/users/${user.id}`} style={{ width: '20%' }}>
        {user.name}
      </Link>
      <div style={{ width: '80%' }}>{user.blogs.length}</div>
    </li>
  )
}

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAll().then(users => {
      setUsers(users)
    })
  }, [])

  if (!users) {
    return null
  }

  return (
    <div>
      <h2>Users</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
          <div style={{ width: '20%' }}></div>
          <div style={{ width: '80%' }}>blogs created</div>
        </li>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  )
}

export default Users