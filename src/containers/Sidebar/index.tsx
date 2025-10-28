import Avatar from '../../components/Avatar'
import { P } from '../../components/Paragrafo/styles'
import Title from '../../components/Title'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <SidebarContainer>
    <Avatar />
    <Title fontSize={20}>Pedro Paz</Title>
    <P fontSize={16} tipo="secundario">
      PedroPaz0156
    </P>
    <Descricao tipo="principal" fontSize={12}>
      Engenheiro Front-End
    </Descricao>
    <BotaoTema>Trocar Tema</BotaoTema>
  </SidebarContainer>
)

export default Sidebar
