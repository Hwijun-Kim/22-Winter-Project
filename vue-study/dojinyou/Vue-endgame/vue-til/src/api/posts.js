// 학습 노트 조작과 관련된 crud api 함수 파일
import { posts } from '@/api/index';
// 학습 노트 데이터 목록를 조회 하는 api
function fetchPosts() {
  return posts.get('/');
}

// 특정 학습 노트를 조회 하는 api
function fetchPost(postId) {
  return posts.get(postId);
}

// 특정 학습 노트를 수정하는 api
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

// 학습 노트를 등록하는 api
function createPost(postData) {
  return posts.post('/', postData);
}

// 학습 노트를 삭제하는 api
function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPost, editPost, fetchPosts, createPost, deletePost };
