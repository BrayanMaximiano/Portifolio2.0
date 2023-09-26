import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/HomePageImg.png'
import Link from 'next/link'


function HomeHero() {
  return (
    <Container data-aos='fade-up'>
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá,</h1>
          <h2>Seja Bem vindo ao meu Portfólio.</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">// Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Brayan Igor,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Fiola Maximiano</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Desenvolvedor Front-end,</span>
            </div>
            <div>
              Nivel: <span className="blue">Junior</span>
            </div>

            
            {'\u007D'}
          </CodeItem>
          <CodeItem >

            <span className='purple'>Curriculo</span> {'\u007B'}
            <div>

            Português: <span>

              <button>
                <Link href='https://drive.google.com/file/d/1Roi6EOAD4bPuQY2UdPxM8546FnGS1fVc/view?usp=drive_link'>
                  <a > Curriculo </a>
                </Link>
              </button>
              </span>

            </div>

            <div>
              Inglês: <span><button>
                <Link href='https://drive.google.com/file/d/1Roi6EOAD4bPuQY2UdPxM8546FnGS1fVc/view?usp=drive_link'>
                  <a > Curriculo </a>
                </Link>
              </button></span>
            </div>
            {'\u007D'}
            
          </CodeItem>

          
        </InfosContainer>
        
      </div>
    </Container>
  );
}

export default HomeHero;
