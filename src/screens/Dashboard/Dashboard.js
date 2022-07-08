import React, { useEffect, useState } from 'react';

//Authentication
import { useAuth } from '../../authentication/AuthContext';

//Components
import Loading from '../../components/Loading';

//State
import { useSelector, useDispatch } from 'react-redux';

//Functions
import { update } from '../../functions/update';

const Dashboard = () => {
  //State
  const account = useSelector(state => state.account.database)
  const loading = useSelector(state => state.account.loading)

  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser.uid) {
      update(currentUser.uid)
    }
  }, [])

  return (
    <div>
      <Navigation />
      <br />

      {loading ?
        <Loading /> :
        <div className='fade'>
          <center>
            <h3 className='darkGreen'>Dashboard</h3>
            <br /><br />
          </center>

          {action.createHoa ? <CreateHOA /> : <></>}

          {action.createSheet && !action.createHoa ? <CreateSheet /> : <></>}

          {Object.keys(view).length && !action.createHoa ? <Glance /> : <></>}
        </div >
      }
    </div>
  )
}

export default Dashboard