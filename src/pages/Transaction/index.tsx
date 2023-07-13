import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import Summary from '../../components/Summary.';
import api from '../../libs/api';
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './styles';

interface ITransaction {
  id: string;
  name: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
  createdAt: string;
}

export default function Transaction() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get('/transactions').then(({ data }) => setTransactions(data));
  }, []);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.name}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.price}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
