import { instance } from 'config/api/apiConfig';

function getData() {
  return (dispatch: any) => {
    function request() {
      return { type: 'REQUEST_DATA' };
    }
    function success(data: any) {
      return { type: 'RECEIVE_DATA', payload: data };
    }
    function failure(error: any) {
      return { type: 'ERROR_DATA', error };
    }

    dispatch(request());
    instance
      .get('posts')
      .then((response) => {
        if (response.status === 200) {
          dispatch(success(response.data));
          return;
        }
        dispatch(failure(response));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };
}

export const dataAction = {
  getData,
};
