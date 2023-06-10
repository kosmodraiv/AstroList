const initialState = {
    validationErrors: {
      title: '',
      description: ''
    }
  };
  
  const taskErrorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_VALIDATION_ERRORS':
        return {
          ...state,
          validationErrors: {
            ...state.validationErrors,
            [action.payload.fieldName]: action.payload.errors
          }
        };
      default:
        return state;
    }
  };
  
  export default taskErrorReducer;
  