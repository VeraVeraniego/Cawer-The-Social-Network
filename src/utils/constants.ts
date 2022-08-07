const API_URL = "https://jsonplaceholder.typicode.com";
export const JSONPLACEHOLDERS_API = {
  USERS: `${API_URL}/users`,
  USER_POSTS_ID: `${API_URL}/posts?userId=`,
  ALL_POSTS: `${API_URL}/posts`,
  COMMENTS: `${API_URL}/comments?postId=`,
};

export const PHOTOS_API = {
  USER_PHOTOS: (id: number) =>
    `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`,
  USER_PHOTOS2: `https://rickandmortyapi.com/api/character/`,
  PHOTOS: (id: number) => `https://picsum.photos/id/10${id}/300/200`,
};
