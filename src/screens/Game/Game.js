import React, { useEffect } from 'react';

//State
import { useSelector, useDispatch } from 'react-redux';

//Components
import Loading from '../../components/Loading';
import View from './components/View';
import Controller from './components/Controller';

//Functions
import { checkWorld } from '../../functions/checkWorld';

const Game = () => {

  const loading = useSelector(state => state.loading.loading);
  const reality = useSelector(state => state.account.reality);

  useEffect(() => {
    if (reality) {
      checkWorld(reality);
    }
  }, []);

  console.log('loading', loading)
  return (
    <>
      {loading ? <Loading /> :
        <>
          <View />
          <Controller />
        </>}

    </>
  )
}

export default Game;