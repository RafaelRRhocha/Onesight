const KEY = 'users';

export const readUsers = () => {
  const response = localStorage.getItem(KEY);

  if (response) return JSON.parse(response);
  return [];
};

export const createUsers = (obj: any) => {
  const users = readUsers();

  if (users.length) return localStorage.setItem(KEY, JSON.stringify([...users, obj]));
  return localStorage.setItem(KEY, JSON.stringify([obj]));
};

export const deleteUsers = (email: string) => {
  const users = readUsers();
  localStorage.setItem(KEY, JSON.stringify(users.filter((e: any) => e.email !== email)));
};