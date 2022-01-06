const initialState = {
  loading: false,
  error: false,
  data: [],
};

interface Action {
  type: string,
  payload : object
}

const getUserReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        loading: true,
      };
    case 'RECEIVE_DATA':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case 'ERROR_DATA':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
export default getUserReducer;
