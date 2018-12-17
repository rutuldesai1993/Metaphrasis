import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ photo,
  name,
  lastName,
  about,
 address,
 city,
 zip,
 statename,
 phone,
 gender,
 ssn,
 ein,
 ethnicity,
 countryname,
 companyname,
 agencyname,
 language1,
 rate1,
 language2,
 rate2,
 language3,
 rate3,
 mondayam,
 mondaypm,
 tuesdayam,
 tuesdaypm,
 wednesdayam,
 wednesdaypm,
 thursdayam,
 thursdaypm,
 fridayam,
 fridaypm,
 saturdayam,
 saturdaypm,
 sundayam,
 sundaypm }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}`)
      .push({ photo,
        name,
        lastName,
        about,
        address,
        city,
        zip,
        statename,
        phone,
        gender,
        ssn,
        ein,
        ethnicity,
        countryname,
        companyname,
        agencyname,
        language1,
        rate1,
        language2,
        rate2,
        language3,
        rate3,
        mondayam,
        mondaypm,
        tuesdayam,
        tuesdaypm,
        wednesdayam,
        wednesdaypm,
        thursdayam,
        thursdaypm,
        fridayam,
        fridaypm,
        saturdayam,
        saturdaypm,
        sundayam,
        sundaypm })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
          Actions.homePage();
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}`)
      .on('value', snapshot => {
        console.log(snapshot.val());
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ photo,
  name,
  lastName,
  about,
 address,
 city,
 zip,
 statename,
 phone,
 gender,
 ssn,
 ein,
 ethnicity,
 countryname,
 companyname,
 agencyname,
 language1,
 rate1,
 language2,
 rate2,
 language3,
 rate3,
 mondayam,
 mondaypm,
 tuesdayam,
 tuesdaypm,
 wednesdayam,
 wednesdaypm,
 thursdayam,
 thursdaypm,
 fridayam,
 fridaypm,
 saturdayam,
 saturdaypm,
 sundayam,
 sundaypm }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}`)
      .set({ photo,
        name,
        lastName,
        about,
        address,
        city,
        zip,
        statename,
        phone,
        gender,
        ssn,
        ein,
        ethnicity,
        countryname,
        companyname,
        agencyname,
        language1,
        rate1,
        language2,
        rate2,
        language3,
        rate3,
        mondayam,
        mondaypm,
        tuesdayam,
        tuesdaypm,
        wednesdayam,
        wednesdaypm,
        thursdayam,
        thursdaypm,
        fridayam,
        fridaypm,
        saturdayam,
        saturdaypm,
        sundayam,
        sundaypm })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
      });
  };
};
