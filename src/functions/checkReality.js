//State
import store from '../store';
import { setLoading, setLoadingMessage } from '../store/features/loadingSlice';
import { setUID, setReality } from '../store/features/accountSlice';


import { addUser } from '../requests/addUser'
import { getUser } from '../requests/getUser';

export const checkReality = async (uid) => {

  //set loading
  store.dispatch(setLoadingMessage('> tapping consciousness_'));
  store.dispatch(setLoading(true));

  //get user
  getUser(uid)
    .then(res => {
      //check if game data exists for uid
      if (!res.data) {
        //no game data exists
        store.dispatch(setLoadingMessage('> synchronizing interface_'));

        //add new account to database
        addUser({ uid })
          .then(res => {
            store.dispatch(setUID(uid.uid));
            store.dispatch(setLoading(false));
          });

      } else {
        //game data exists
        //save game data to database
        store.dispatch(setLoadingMessage('> awareness found_'));
        store.dispatch(setUID(res.data.uid));
        store.dispatch(setReality(res.data.reality));
        store.dispatch(setLoading(false));
      }
    });
};