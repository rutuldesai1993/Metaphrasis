import firebase from 'firebase';
import {
  INTERPRETER_UPDATE,
  INTERPRETER_CREATE,
} from './types';

export const interpreterUpdate = ({ prop, value }) => {
  return {
    type: INTERPRETER_UPDATE,
    payload: { prop, value }
  };
};

export const interpreterCreate = ({ name, lastName, about, address, dateofbirth,
  gender, ssn, mobile, email, password, ethnicity, languages,
  monday, tuesday, wednesday, thursday, friday, saturday, sunday,
  region, countryname, companyname, agencyname }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}`)
    .push({ name,
      lastName,
      about,
      address,
      dateofbirth,
      gender,
      ssn,
      languages,
      mobile,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      email,
      password,
      ethnicity,
      region,
      countryname,
      companyname,
      agencyname })
      .then(() => {
        dispatch({ type: INTERPRETER_CREATE });
      });
  };
};
