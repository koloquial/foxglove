//State
import { assignDatabase, assignLoading } from '../store/features/accountSlice';
import store from '../store';

// import { addUser } from '../requests/addUser'
import { getUser } from '../requests/getUser';

export const update = async (uid) => {
  store.dispatch(assignLoading(true));

  getUser(uid)
    .then(res => {
      console.log('firebase data', res.data);
    });

  store.dispatch(assignLoading(false));
};