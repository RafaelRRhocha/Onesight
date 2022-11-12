import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useEffect, useState } from "react";
import IUser from '../interfaces';
import { readUsers, updateUsers } from "../localStorage";

interface UpdateProps {
  id: string
}

const Update: FC<UpdateProps> = ({ id }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    const { name, email } = readUsers()[id];
    setName(name);
    setEmail(email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verifyInputName = ({ target: { value } }) => {
    setDisable(true);
    setName(value);
    if (name.length >= 3 && email.length >= 3) return setDisable(false)
  }

  const verifyInputEmail = ({ target: { value } }) => {
    const regexValidation = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    const finalValidation = regexValidation.test(email);
    setEmail(value);
    setDisable(!finalValidation);
  };

  const saveAllUsers = () => {
    const dbUsers = readUsers();

    let isNotValidUser = dbUsers?.some((user: IUser) => email === user.email || name === user.name);

    if(dbUsers[id].email === email || dbUsers[id].name === name) {
      isNotValidUser = false
    }

    if(isNotValidUser) {
      alert('Email or User Already Registered!');
      return setDisable(true);
    }

    updateUsers({ name, email, date: dbUsers[id].date }, id);
    setEmail('');
    setName('');
    setDisable(true);
    router.push('/');
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={ name }
        placeholder="Name"
        onChange={verifyInputName}
        autoComplete="off"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={ email }
        onChange={verifyInputEmail}
        autoComplete="off"
      />
      <div>
        <Link href={'/'}>
          <button
            type="button"
            className="backToHomeBtn"
          >
            Back To Home
          </button>
        </Link>
        <button
          type="button"
          className="updateBtn"
          disabled={ disable }
          onClick={() => saveAllUsers()}
        >
          Update User
        </button>
      </div>
    </form>
  );
}

export default Update;