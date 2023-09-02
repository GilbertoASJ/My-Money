import { HeaderContainer, HeaderContent, HeaderLogoTitle, NewTransactionButton } from "./styles";
import pagamento from '../../assets/pagamento.png'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div>
                    <img src={pagamento} alt="" />
                    <HeaderLogoTitle>My</HeaderLogoTitle>
                    <HeaderLogoTitle>Money</HeaderLogoTitle>
                </div>
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}