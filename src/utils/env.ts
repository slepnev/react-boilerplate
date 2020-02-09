import { Env } from '../types/enums/env';

export default function env() {
  return process.env.REACT_APP_ENV || Env.Prod;
}
