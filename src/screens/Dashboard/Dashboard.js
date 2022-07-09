import React, { useEffect, useState } from 'react';

//Authentication
import { useAuth } from '../../authentication/AuthContext';

//Components
import Loading from '../../components/Loading';

//State
import { useSelector, useDispatch } from 'react-redux';

//Functions
import { update } from '../../functions/update';

//Navigation
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  //State
  const account = useSelector(state => state.account.database)
  const loading = useSelector(state => state.account.loading)

  const { currentUser, logout } = useAuth()

  useEffect(() => {
    if (currentUser.uid) {
      update(currentUser.uid)
    }
  }, [])

  const handleSubmit = async () => {
    try {
      await logout()
      navigate('/splash')
    } catch (error) {

    }
  }

  return (
    <div>

      {loading ? <Loading /> :
        <div className='fade'>
          <center>
            <h3 className='darkGreen'>Dashboard</h3>
            <button onClick={handleSubmit} >logout</button>
            <br /><br />
          </center>

        </div >
      }

    </div>
  )
}

export default Dashboard