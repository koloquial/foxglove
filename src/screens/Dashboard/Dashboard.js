import React, { useEffect, useState } from 'react';

//Authentication
import { useAuth } from '../../authentication/AuthContext';

//Components
import Loading from '../../components/Loading';
import Navigation from '../../components/Navigation';
import NewGame from './components/NewGame';

//State
import { useSelector, useDispatch } from 'react-redux';

//Functions
import { checkReality } from '../../functions/checkReality';

//Navigation
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  //State
  const loading = useSelector(state => state.loading.loading);
  const reality = useSelector(state => state.account.reality);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser.uid) {
      checkReality(currentUser.uid);
    }
  }, []);

  console.log('reality', reality);

  return (
    <div>
      {loading ? <Loading /> :
        <div className='fade'>
          <Navigation />

          {!!reality === false ? <NewGame />
            : <div className='container'>
              <p className='interface-text head'>
                | stream <br />
              </p>

              <p className='interface-text prompt'>
                ! interface possibility<br />
              </p>

              <p className='interface-text'><a href='#' onClick={() => navigate('/game')}>> {reality.possibility}</a></p>
              <br />

              <p className='interface-text info'># resonance</p>
              <br />
              {reality.awareness.map(item => {
                if (item !== reality.possibility) {
                  return <><p className='interface-text disabled'>x {item}</p> <br /></>
                }
              })}
            </div>
          }
        </div>
      }
    </div >
  )
}

export default Dashboard