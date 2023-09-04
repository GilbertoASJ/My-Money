import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay, CloseButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton><X size={24} /></CloseButton>
                <form>
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" required />

                    <TransactionType>
                        <TransactionTypeButton value="income" variant="income">
                            Entrada
                            <ArrowCircleUp size={24} />
                        </TransactionTypeButton>
                        <TransactionTypeButton value="outcome" variant="outcome">
                            Saída
                            <ArrowCircleDown size={24} />
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}