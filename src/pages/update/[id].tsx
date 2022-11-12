import { useRouter } from 'next/router';
import type { FC } from 'react';
import Update from '../../components/Update';

interface IdProps {}

const Id: FC<IdProps> = ({}) => {
  const { query: { id } }  = useRouter();

  return (
    <Update id={ id as string } />
  );
}

export default Id;