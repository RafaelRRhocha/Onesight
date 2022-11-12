import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from "react";
import IUser from "../interfaces";
import { createUsers, readUsers } from "../localStorage";

interface CreateProps {}

const Create: FC<CreateProps> = ({}) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disable, setDisable] = useState(true);

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
    const date = new Date().toLocaleDateString('pt-BR');

    const dbUsers = readUsers();
    const isNotValidUser = dbUsers?.some((user: IUser) => email === user.email || name === user.name);

    if(isNotValidUser) {
      alert('Email or User Already Registered!');
      return setDisable(true);
    }

    createUsers({ name, email, date });
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
        <button
          type="button"
          disabled={ disable }
          onClick={() => saveAllUsers()}
          className="updateBtn"
        >
          Register User
        </button>
      </div>
    </form>
  );
}

export default Create;