//State
import store from '../store';
import { setLoading, setLoadingMessage } from '../store/features/loadingSlice';

export const checkWorld = async (reality) => {
  //set loading
  store.dispatch(setLoadingMessage('> interlacing projection_'));
  store.dispatch(setLoading(true));

  console.log('reality', reality)

  try {
    if (reality.world) {
      //world exists
      store.dispatch(setLoadingMessage('> reconstructing projection_'));

    } else {
      //world doesnt exist
      store.dispatch(setLoadingMessage('> constructing projection_'));

    }
  } catch (e) {

  }
  store.dispatch(setLoading(false));
};