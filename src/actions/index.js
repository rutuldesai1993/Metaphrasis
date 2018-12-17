// export * from './AuthActions';
// export * from './InterpreterActions';
export * from './AuthActions';
export * from './EmployeeActions';
export * from './JobsActions';
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
