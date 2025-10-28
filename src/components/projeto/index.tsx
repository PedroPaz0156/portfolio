import { P } from '../Paragrafo/styles'
import { Titulo } from '../Title/styles'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <P tipo="secundario">Lista de tarefas feita com VueJS</P>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
