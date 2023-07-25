import { ReactNode, createContext, useEffect, useState } from 'react';
import {
  CreateTransactionForm,
  ITransaction,
  transactionApi,
} from '../api/transaction';

interface IContext {
  transactions: ITransaction[];
  searchTransaction: (params?: any) => Promise<void>;
  createTransaction: (form: CreateTransactionForm) => Promise<void>;
}

interface IProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as IContext);

export default function TransactionProvider({ children }: IProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    transactionApi
      .find({
        _sort: 'createdAt',
        _order: 'desc',
      })
      .then(({ data }) => setTransactions(data));
  }, []);

  async function searchTransaction(params?: any) {
    const { data } = await transactionApi.find(params);
    setTransactions(data);
  }

  async function createTransaction(form: CreateTransactionForm) {
    const { data } = await transactionApi.create({
      ...form,
      createdAt: new Date(),
    });
    setTransactions((state) => [...state, data]);
  }

  return (
    <TransactionContext.Provider
      value={{ transactions, searchTransaction, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
