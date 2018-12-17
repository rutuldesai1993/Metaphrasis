// import React from 'react';
// import { Scene, Router } from 'react-native-router-flux';
// import LoginForm from './components/LoginForm';
// import HomePage from './components/HomePage';
// import NewUser from './components/NewUser';
// import JobsParent from './components/JobsParent';
// //import ForgotPassword from './components/ForgotPassword';
// import Schedule from './components/Schedule';
// //import InterpreterCreate from './components/NewUser';
//
// const RouterComponent = () => {
//   return (
//     <Router sceneStyle={{ paddingTop: 65 }}>
//       <Scene key="root">
//         <Scene
//         key="login" component={LoginForm} title="Please Login" initial
//         />
//       <Scene
//           key="homePage"
//           component={HomePage}
//           title="Home Page"
//       />
//       <Scene
//       key="newUser" component={NewUser} title="Profile"
//       />
//       <Scene
//       key="schedule" component={Schedule} title="Schedule"
//       />
//       <Scene
//       key="jobsParent" component={JobsParent} title="Jobs"
//       />
//     </Scene>
//     </Router>
//   );
// };
//
// export default RouterComponent;
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import JobsParent from './components/JobsParent';
import JobsItem from './components/JobItem';
import HomePage from './components/HomePage';
import Schedule from './components/Schedule';
import EmployeeHome from './components/EmployeeHome';
import Upload from './components/UploadCertifications';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
        />
        <Scene
           key="employeeCreate"
           component={EmployeeCreate}
           title="Create Profile"
        />
        <Scene
            key="homePage"
            component={HomePage}
            title="Home Page"
        />
        <Scene
            key="libraryList"
            component={JobsParent}
            title="Jobs Page"
        />
        <Scene
            key="jobsItem"
            component={JobsItem}
            title="Job"
        />
        <Scene
            key="upload"
            component={Upload}
            title="Upload Certification"
        />
        <Scene
          key="employeeHome"
          component={EmployeeHome}
          title="Employee Profile Home"
        />
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
        />
        <Scene
          key="schedule"
          component={Schedule}
          title="Schedule"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
