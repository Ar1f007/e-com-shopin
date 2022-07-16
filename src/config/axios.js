import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzliMGE3MWQ0MmJkMjNjNGZhNjk4ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzcyNTU0MiwiZXhwIjoxNjU3OTg0NzQyfQ.HNiXCAEoQXHdLQPeCbCX-tAt22h-wlvQfOgFbdvoqYk';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
