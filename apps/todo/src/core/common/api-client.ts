import { BACKEND_URL } from '@/consts';
import { RestApi } from './models';

export const api: RestApi = {
  fetch: (endpoint: string) =>
    fetch(`${BACKEND_URL}/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json()),
  post: <Payload>(endpoint: string, data: Payload) =>
    fetch(`${BACKEND_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
  delete: (endpoint: string) =>
    fetch(`${BACKEND_URL}/${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json()),
};
