import { Env } from '../types/enums/env';
import env from '../utils/env';

const local = {
  ENV: Env.Local,
  API_URL: 'http://localhost:3001/api/v1'
};

const dev = {
  ENV: Env.Dev,
  API_URL: 'http://localhost:3001/api/v1'
};

const prod = {
  ENV: Env.Prod,
  API_URL: 'http://localhost:3001/api/v1'
};

let config = {};

switch (env()) {
  case Env.Local:
    config = local;
    break;
  case Env.Dev:
    config = dev;
    break;
  default:
    config = prod;
}

export default {
  API_URL: 'http://localhost:3001/api/v1',
  ...config
};
