export const POSTS = '/posts?_page=1&_limit=20';

export const getPostById = (id: number): string => `/posts/${id}`;
