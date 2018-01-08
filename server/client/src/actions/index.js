import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  // ReduxThunk pays attention to whether we pass back an action or a function
  // - if we pass a function, dispatch is automatically passed to ActionCreator
  return function(dispatch) {
    axios.get('/api/current_user').then(res =>
      dispatch({
        type: FETCH_USER,
        payload: res
      })
    );
  };
};
