import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollarSimple,
} from 'phosphor-react';
import { useContext } from 'react';
import { TransactionContext } from '../../contexts/TransactionsContext';
import { priceFormatter } from '../../utils/formatter';
import { SummaryCard, SummaryContainer } from './styles';

export default function Summary() {
  const { transactions } = useContext(TransactionContext);
  const summary = transactions.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.type]: acc[cur.type] + cur.price,
    }),
    {
      income: 0,
      outcome: 0,
    }
  );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollarSimple size={32} color="#fff" />
        </header>
        <strong>
          {priceFormatter.format(summary.income - summary.outcome)}
        </strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
