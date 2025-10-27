import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
  color: white;
`

const BotaoPerigo = styled(Botao)`
  background-color: red;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Enviar
      </Botao>
      <Botao fontSize="14px" principal={false}>
        {' '}
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        {/* a propriedade as, possibilita que passemos uma tag HTML para o componente emular */}
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
