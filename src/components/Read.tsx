import Link from 'next/link';
import { useRouter } from 'next/router';
import { NotePencil } from 'phosphor-react';
import { FC, useEffect, useState } from 'react';
import IUser from '../interfaces';
import { deleteUsers, readUsers } from '../localStorage';
import Delete from './Delete';

interface ReadProps {}

const Read: FC<ReadProps> = ({}) => {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const dbUsers = readUsers();
    setUsers(dbUsers);
  }, []);

  const removeUsers = (email: string) => {
    deleteUsers(email);
    setUsers((old) => old.filter((user: IUser) => user.email !== email));
  };

  return (
    <div className="container">
      <Link href="/create">
        <button
          type="button"
          className="newUserBtn"
        >
          New User
        </button>
      </Link>
          {users?.length ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Created At</th>
                  <th>Edit/Remove</th>
                </tr>
              </thead>
              <tbody>
                {users?.map(({ name, email, date }: IUser, id: number) => (
                  <tr key={ email }>
                    <td>{ name }</td>
                    <td>{ email }</td>
                    <td>{ date }</td>
                    <td>
                      <NotePencil
                        size={ 25 }
                        color="#36d399"
                        style={{ cursor: 'pointer', marginLeft: 10 }}
                        onClick={() => router.push(`/update/${id}`)}
                      />
                      <Delete email={ email } removeUsers={ removeUsers } />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No Registered User</p>
          ) }
    </div>
  );
}

export default Read;