import Link from 'next/link';
import type { FC } from 'react';
import { useState } from "react";
import { createUsers, readUsers } from "../localStorage";

interface CreateProps {}

const Create: FC<CreateProps> = ({}) => {
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
    const dbUsers = readUsers();
    const isNotValidUser = dbUsers.some((e: any) => email === e?.email || name === e?.name);

    if(isNotValidUser) {
      alert('Email ou Usuário Já Cadastrado!');
      return setDisable(true);
    }
    createUsers({ name, email });
    setEmail('');
    setName('');
    setDisable(true);
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
      <button
        type="button"
        disabled={ disable }
        onClick={() => saveAllUsers()}
      >
        button
      </button>
      <Link href="/read">
        <button
          type="button"
        >
          ver usuários cadastrados
        </button>
      </Link>
    </form>
  );
}

export default Create;