import store from '@/store/index';

export function setInterceptors(instance) {
  instance.interceptors.request.use(
    function(config) {
      config.headers.Authorization = store.state.token;
      return config;
    },
    function(error) {
      // 오류 요청을 보내기전 수행할 일
      // ...
      return Promise.reject(error);
    },
  );

  // 응답 인터셉터 추가
  instance.interceptors.response.use(
    function(response) {
      // 응답 데이터를 가공
      // ...
      return response;
    },
    function(error) {
      // 오류 응답을 처리
      // ...
      return Promise.reject(error);
    },
  );

  return instance;
}
