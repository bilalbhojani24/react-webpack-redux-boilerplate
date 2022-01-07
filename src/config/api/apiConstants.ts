import {
  createConfig, get,
} from './apiUtils';

const ApiConstants : any = {
  post: {
    getPost: createConfig('todos', get, true, false),
  },
};

export default ApiConstants;
