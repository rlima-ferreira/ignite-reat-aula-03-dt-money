import { ReactNode, createContext, useEffect, useState } from 'react';
import api from '../libs/api';

interface ITransaction {
  id: string;
  name: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
  createdAt: string;
}

interface IContext {
  transactions: ITransaction[];
}

interface IProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as IContext);

export default function TransactionProvider({ children }: IProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get('/transactions').then(({ data }) => setTransactions(data));
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
