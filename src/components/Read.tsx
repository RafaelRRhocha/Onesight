import Link from 'next/link';
import { NotePencil, Trash } from 'phosphor-react';
import { FC, useEffect, useState } from 'react';
import { deleteUsers, readUsers } from '../localStorage';

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
    <div>
      {users?.length ? (
        <>
          {users?.map(({ name, email }: { name: string, email: string }, i: number) => (
            <>
              <div key={ i }>
                <p>{ name }</p>
                <p>{ email }</p>
                <NotePencil size={32} color="#f2f2f2" />
                <Trash size={32} color="#f2f2f2" onClick={() => removeUsers(email)} />
              </div>
            </>
          ))}
          <Link href="/">
            <button type="button">Back to home</button>
          </Link>
        </>
      ) : (
        <p>Nenhum Usuário Cadastrado</p>
      ) }
    </div>
  );
}

export default Read;