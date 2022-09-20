export const JSONPLACEHOLDERS_API = {
  USERS: `https://jsonplaceholder.typicode.com/users`,
  ALL_POSTS: `https://jsonplaceholder.typicode.com/posts`,
  USER_POSTS_BY_ID: (id: number) =>
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
  COMMENTS: (id: string | undefined) =>
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
  POST_BY_ID: (id: number) =>
    `https://jsonplaceholder.typicode.com/posts?id=${id}`,
  USER_BY_ID: (id: number) =>
    `https://jsonplaceholder.typicode.com/users?id=${id}`,
};

export const PHOTOS_API = {
  USER_PHOTOS: (id: number | string) =>
    `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`,
  PHOTOS: (id: string | number) => `https://picsum.photos/id/10${id}/300/200`,
};
