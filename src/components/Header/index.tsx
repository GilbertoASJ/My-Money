import * as Dialog from '@radix-ui/react-dialog';

import { HeaderContainer, HeaderContent, HeaderLogoTitle, NewTransactionButton } from "./styles";
import pagamento from '../../assets/pagamento.png'
import { NewTransactionModal } from '../NewTransactionModal/index';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div>
                    <img src={pagamento} alt="" />
                    <HeaderLogoTitle>My</HeaderLogoTitle>
                    <HeaderLogoTitle>Money</HeaderLogoTitle>
                </div>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>
                    
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}