import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjetoContainer } from './styles';

interface ProjetoProps {
  title: string;
  type: string;
  slug: string;
  img: string;
  warning?: string;
}

export default function ProjetoItem({ title, type, slug, img, warning }: ProjetoProps) {
  return (
    <ProjetoContainer imgUrl={img} >
      <section>
        <div className="overlay" />
        <div className="text">
          <h1> {title}</h1>
          <h2>- {type}</h2>
          <h3>{warning}</h3>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}