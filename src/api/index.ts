export const fetchUsersFromServer = async () => {
  const request = await fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=10'
  );
  return await request.json();
};

export const fetchTodosFromServer = async () => {
  const request = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10'
  );
  return await request.json();
};
export const fetchPopularTodosFromServer = async () => {
  const request = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=20'
  );
  return await request.json();
};
