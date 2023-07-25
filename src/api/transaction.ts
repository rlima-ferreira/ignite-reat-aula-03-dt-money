import { z } from 'zod';
import api from '../libs/axios';

const route = '/transactions';

export interface ITransaction {
  id: string;
  name: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
  createdAt: string;
}

export const transactionFormSchema = z.object({
  name: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

export type CreateTransactionForm = z.infer<typeof transactionFormSchema>;

export const transactionApi = {
  find: async (params?: any) => api.get(route, { params }),
  create: async (data: any) => api.post(route, data),
};
