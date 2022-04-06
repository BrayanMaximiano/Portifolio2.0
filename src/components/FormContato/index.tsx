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
            retornarei em breve
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContato;