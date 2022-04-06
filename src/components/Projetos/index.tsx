import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  warning?: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}

function Projetos({ projetos }: ProjetosProps) {
  return (
    <Container data-aos="fade-up">
      <SectionTitle title="Principais Projetos" />

      <section>
      <ProjetoItem
          
          img='https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/09/Netflix-1200x900-1.jpg'
          title='Clone Netflix'
          type='Website Clone'
          warning='(Somente navegador)'
          slug='Netflix'
          
        />
        <ProjetoItem
          img='https://th.bing.com/th/id/R.c5db840096acc1430a8f1ef4a5da3e0a?rik=5C6nd0G58nAuTw&pid=ImgRaw&r=0'
          title='Clone Spotify'
          type='Website Clone'
          slug='Spotify'
          warning=''
        />
      </section>
      <button type="button" data-aos="fade-up">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;