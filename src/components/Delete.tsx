import { Trash } from 'phosphor-react';

import type { FC } from 'react';

interface DeleteProps {
  email: string
  removeUsers: (email: string) => void 
}

const Delete: FC<DeleteProps> = ({email, removeUsers}) => {
  return (
      <Trash
        size={ 25 }
        color="#FF0000"
        onClick={() => removeUsers(email)}
        style={{ cursor: 'pointer', marginLeft: 10 }}
      />
  );
}

export default Delete;