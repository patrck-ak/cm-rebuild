import { ButtonSubmit, Container, Form, Input } from "./styles/Auth";

export default function Auth() {
  return (
    <Container>
      <Form>
        <Input placeholder="Usuário" />
        <Input placeholder="Senha" />
        <ButtonSubmit>Entrar</ButtonSubmit>
      </Form>
    </Container>
  );
}
