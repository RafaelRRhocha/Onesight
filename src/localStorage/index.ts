import IUser from "../interfaces";

const KEY = 'users';

export const readUsers = () => {
  const response = localStorage.getItem(KEY);
  if (response) return JSON.parse(response);
  return [];
};

export const createUsers = (obj: IUser) => {
  const dbUsers = readUsers();
  if (dbUsers.length) return localStorage.setItem(KEY, JSON.stringify([...dbUsers, obj]));
  return localStorage.setItem(KEY, JSON.stringify([obj]));
};

export const updateUsers = (obj: IUser, id: string) => {
  const dbUsers = readUsers();
  const updatedUsers = dbUsers.map((user: IUser, index: number) => {
    if(index === Number(id)) {
      return obj;
    }
    return user;
  });
  return localStorage.setItem(KEY, JSON.stringify(updatedUsers));
}

export const deleteUsers = (email: string) => {
  const dbUsers = readUsers();
  localStorage.setItem(KEY, JSON.stringify(dbUsers.filter((user: IUser) => user.email !== email)));
};