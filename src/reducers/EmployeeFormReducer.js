import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  photo: '',
  name: '',
  lastName: '',
  about: '',
  address: '',
  city: '',
  zip: '',
  statename: '',
  phone: '',
  gender: '',
  ssn: '',
  ein: '',
  ethnicity: '',
  countryname: '',
  companyname: '',
  agencyname: '',
  language1: '',
  rate1: '',
  language2: '',
  rate2: '',
  language3: '',
  rate3: '',
  mondayam: '',
  mondaypm: '',
  tuesdayam: '',
  tuesdaypm: '',
  wednesdayam: '',
  wednesdaypm: '',
  thursdayam: '',
  thursdaypm: '',
  fridayam: '',
  fridaypm: '',
  saturdayam: '',
  saturdaypm: '',
  sundayam: '',
  sundaypm: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
