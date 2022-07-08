//State
import { assignDatabase, assignLoading } from '../store/features/accountSlice';
import store from '../store';

export const update = async (uid) => {
  store.dispatch(assignLoading(true));
  store.dispatch(assignLoading(false));
};