const initialState = {
    isTaskCardVisible: false,
  };
  
  const taskCardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_TASK_CARD':
        return {
          ...state,
          isTaskCardVisible: true,
        };
      case 'HIDE_TASK_CARD':
        return {
          ...state,
          isTaskCardVisible: false,
        };
      default:
        return state;
    }
  };
  
  export default taskCardReducer;
  