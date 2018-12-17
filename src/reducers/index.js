// import { combineReducers } from 'redux';
// import AuthReducer from './AuthReducer';
// import InterpreterReducer from './InterpreterReducer';
// import JobReducer from './JobReducer';
//
// export default combineReducers({
//   auth: AuthReducer,
//  interpreter: InterpreterReducer,
//  jobs: JobReducer,
// });
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import JobReducer from './JobReducer';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer,
  jobs: JobReducer,
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
