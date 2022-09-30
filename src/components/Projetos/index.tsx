import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import Ndbg from '../../assets/ndbg.png'

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
          
          img={Ndbg}
          title='Nova Direção Recursos Humanos'
          type='Trabalho Freelancer'
          slug='NovaDirecao'
          
        />
        <ProjetoItem
          img='https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/09/Netflix-1200x900-1.jpg'
          title='Clone Netflix'
          type='Website Clone'
          slug='Netflix'
          warning=''
        />
        <ProjetoItem
          img='https://vendamodaonline.com.br/wp-content/uploads/2020/01/Como-montar-uma-loja-virtual-de-roupas-1024x682.png'
          title='UrStore'
          type='template Ecommerce'
          slug='Ecommerce'
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
