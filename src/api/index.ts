export const fetchUsersFromServer = async () => {
  const request = await fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=10'
  );
  return await request.json();
};
