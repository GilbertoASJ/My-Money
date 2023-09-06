import * as z from 'zod';
import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay, CloseButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {

    const createTransaction = useContextSelector(TransactionsContext, (context) => {
        return context.createTransaction
    });

    const {
        reset,
        control,
        register,
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {

        const { description, price, category, type } = data;
        
        await createTransaction({
            description,
            price,
            category,
            type
        })

        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton><X size={24} /></CloseButton>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
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
                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <TransactionTypeButton value="income" variant="income">
                                        Entrada
                                        <ArrowCircleUp size={24} />
                                    </TransactionTypeButton>
                                    <TransactionTypeButton value="outcome" variant="outcome">
                                        Saída
                                        <ArrowCircleDown size={24} />
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}