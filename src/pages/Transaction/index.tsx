import { useContext } from 'react';
import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import Summary from '../../components/Summary.';
import { TransactionContext } from '../../contexts/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../utils/formatter';
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './styles';

export default function Transaction() {
  const { transactions } = useContext(TransactionContext);

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
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
