import { Env } from '../enums/env.enum';

export const CONFIG = {
  [Env.Dev]: {
    API_URL: 'http://localhost:3001/api/v1'
  },
  [Env.Prod]: {
    API_URL: 'http://localhost:3001/api/v1'
  }
};
