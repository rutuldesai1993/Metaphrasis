import {
  INTERPRETER_UPDATE,
  INTERPRETER_CREATE,
  INTERPRETER_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: null,
  lastName: '',
  about: '',
  address: '',
  dateofbirth: '',
  gender: '',
  ssn: '',
  languages: '',
  rate: '',
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  saturday: '',
  sunday: '',
  mobile: '',
  ethnicity: '',
  region: '',
  countryname: '',
  companyname: '',
  agencyname: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INTERPRETER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case INTERPRETER_CREATE:
      return INITIAL_STATE;
    case INTERPRETER_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
