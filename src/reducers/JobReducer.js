// import jobs from './Jobs.json';
//
// export default () => jobs;

import {
  JOBS_FETCH
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JOBS_FETCH:
      return action.payload;
    default:
      return state;
  }
};
