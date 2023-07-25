import { ThemeProvider } from 'styled-components';
import TransactionProvider from './contexts/TransactionsContext';
import Transaction from './pages/Transaction';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <GlobalStyle />
        <Transaction />
      </TransactionProvider>
    </ThemeProvider>
  );
}
