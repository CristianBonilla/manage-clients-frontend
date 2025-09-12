import { environment } from 'src/environments/environment';

const { serverUrl: API_URL } = environment.api;
const ENDPOINTS = {
  CLIENTS: {
    DEFAULT: `${ API_URL }/client`,
  }
} as const;
Object.freeze(ENDPOINTS);

export { API_URL, ENDPOINTS };
