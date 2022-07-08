import React from 'react'

//Authentication
import { useAuth } from '../../authentication/AuthContext'

//Navigation
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/splash')
    } catch (error) {

    }
  }

  return (
    <div>
      Dashboard
      {console.log('current user:', currentUser)}
      <button onClick={handleLogout}>signout</button>
    </div>
  )
}

export default Dashboard;