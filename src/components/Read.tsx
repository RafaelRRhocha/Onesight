import Link from 'next/link';
import { NotePencil } from 'phosphor-react';
import { FC, useEffect, useState } from 'react';
import { deleteUsers, readUsers } from '../localStorage';
import Delete from './Delete';

interface ReadProps {}

const Read: FC<ReadProps> = ({}) => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const dbUsers = readUsers();
    setUsers(dbUsers);
  }, []);

  const removeUsers = (email: string) => {
    deleteUsers(email);
    setUsers((old) => old.filter((item) => item.email !== email));
  };

  return (
    <div className="wrapper">
      <Link href="/create">
        <button
          type="button"
          className="newUser"
        >
          New User
        </button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Edit/Remove</th>
          </tr>
        </thead>
        <tbody>
          {users?.length ? (
              users?.map(({ name, email, date }: { name: string, email: string, date: string }) => (
                <tr key={ email }>
                  <td>{ name }</td>
                  <td>{ email }</td>
                  <td>{ date }</td>
                  <td>
                    <Link href="/update">
                      <NotePencil
                        size={25}
                        color="#36d399"
                        style={{ cursor: 'pointer', marginLeft: 10 }}
                      />
                    </Link>
                    <Delete email={ email } removeUsers={ removeUsers } />
                  </td>
                </tr>
              ))
          ) : (
            <p>Nenhum Usuário Cadastrado</p>
          ) }
        </tbody>
      </table>
    </div>
  );
}

export default Read;