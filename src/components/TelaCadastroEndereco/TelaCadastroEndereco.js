import { Form, FormContainer, Input, SendButton, StyledLabel } from "./styled";

export default function TelaCadastroEndereco(props) {

    return(
        <FormContainer>
            <h1>Cadastre seu endereço</h1>
            <Form>
                <StyledLabel htmlFor="endereco">Endereço: 
                    <Input id="endereco" />
                </StyledLabel>
                <StyledLabel htmlFor="numero-endereco">Nº: 
                    <Input id="numero-endereco" />
                </StyledLabel>
                <StyledLabel htmlFor="telefone" >Telefone: 
                    <Input type="phone" id="telefone" />
                </StyledLabel>
                <StyledLabel htmlFor="complemento" >Complemento: 
                    <Input id="complemento" />
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(4)}>Enviar!</SendButton>
            </Form>
        </FormContainer>
    )
}