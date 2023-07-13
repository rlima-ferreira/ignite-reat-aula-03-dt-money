import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  CloseButton,
  Content,
  Overlay,
  TransactioType,
  TransactionTypeButton,
} from './styles';

const formSchema = z.object({
  desctription: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

type FormInputs = z.infer<typeof formSchema>;

export default function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function handleCreateTransaction(data: FormInputs) {
    //
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="" onSubmit={handleSubmit(handleCreateTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />
          <TransactioType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactioType>
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
