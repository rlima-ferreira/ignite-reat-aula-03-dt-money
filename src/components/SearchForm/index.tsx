import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { TransactionContext } from '../../contexts/TransactionsContext';
import { SearchFormContainer } from './styles';

const searchFormSchema = z.object({
  query: z.string(),
});

type SeachFormInputs = z.infer<typeof searchFormSchema>;

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SeachFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });
  const { searchTransaction } = useContext(TransactionContext);

  async function handleSearchTransaction(data: SeachFormInputs) {
    searchTransaction({ q: data.query });
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="search"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
