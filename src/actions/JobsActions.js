import firebase from 'firebase';
import {
  JOBS_FETCH
} from './types';

export const jobsFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/Jobs')
      .on('value', snapshot => {
        console.log(snapshot.val());
        dispatch({ type: JOBS_FETCH, payload: snapshot.val() });
      });
  };
};
