import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  CreateTransactionForm,
  transactionFormSchema,
} from '../../api/transaction';
import { TransactionContext } from '../../contexts/TransactionsContext';
import {
  CloseButton,
  Content,
  Overlay,
  TransactioType,
  TransactionTypeButton,
} from './styles';

export default function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionContext);
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CreateTransactionForm>({
    resolver: zodResolver(transactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  });

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="" onSubmit={handleSubmit(createTransaction)}>
          <input placeholder="Nome" required {...register('name')} />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input placeholder="Categoria" required {...register('category')} />
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactioType
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactioType>
            )}
          />
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
