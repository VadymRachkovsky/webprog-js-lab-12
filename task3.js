// task3.js
let page = 1;
const limit = 5;

async function fetchPosts(page, limit) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
  const posts = await res.json();
  return posts;
}

async function fetchComments(postId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  const comments = await res.json();
  return comments;
}

async function fetchPhotos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
  const photos = await res.json();
  return photos;
}

// Додайте логіку DOM для показу постів, кнопок і фото...
