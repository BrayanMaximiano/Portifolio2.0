import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title="Gostou dos meu projetos?"
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContato;