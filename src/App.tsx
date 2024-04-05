import { FC } from 'react';
import './App.css';
import { Users } from './components/Users/Users';
import { Counter } from './components/Counter/Counter';

export const App: FC = () => {
  return (
    <>
      <Counter />
      <Users />
    </>
  );
};
