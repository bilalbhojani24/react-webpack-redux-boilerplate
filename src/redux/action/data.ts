import axios from 'axios';

export const dataAction = {
    getData,
};

function getData() {
    return (dispatch: any) => {
        dispatch(request());
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (response.status === 200) {
                    dispatch(success(response.data));
                }
                dispatch(failure(response));
            })
            .catch((error) => {
                dispatch(failure(error));
            });
    };
    function request() {
        return { type: 'REQUEST_DATA' };
    }
    function success(data: any) {
        return { type: 'RECEIVE_DATA', payload: data };
    }
    function failure(error: any) {
        return { type: 'ERROR_DATA', error };
    }
}
