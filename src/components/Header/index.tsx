import * as Dialog from '@radix-ui/react-dialog';
import logo from '../../assets/logo.svg';
import NewTransactionModal from '../NewTransactionModal';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
