import { environment } from '../../environments/environment';

const API_URL = (environment.production) ? "" : "http://localhost:3000";

export const FETCH_ALL_USERS = `${API_URL}/users`;