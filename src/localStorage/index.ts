const KEY = 'users';

export const readUsers = () => {
  const response = localStorage.getItem(KEY);

  if (response) return JSON.parse(response);
  return [];
};

export const createUsers = (obj: Object) => {
  const users = readUsers();

  if (users.length) return localStorage.setItem(KEY, JSON.stringify([...users, obj]));
  return localStorage.setItem(KEY, JSON.stringify([obj]));
};

export const updateUsers = (obj: Object, id: string) => {
  const users = readUsers();
  const updatedUsers = users.map((e: any, i: number) => {
    if(i === Number(id)) {
      return obj;
    }
    return e;
  });
  return localStorage.setItem(KEY, JSON.stringify(updatedUsers));
}

export const deleteUsers = (email: string) => {
  const users = readUsers();
  localStorage.setItem(KEY, JSON.stringify(users.filter((e: any) => e.email !== email)));
};