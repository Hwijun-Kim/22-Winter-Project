import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axios 초기화 함수
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}
const instance = createInstance();
const posts = createInstanceWithAuth('posts');

export { instance, posts };
