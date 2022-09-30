import Header from '../../components/Header';
import { ProjetoContainer } from '../../styles/ProjetoStyles';
import BannerProjeto from '../../components/BannerProjeto';
import Ndbg from '../../assets/ndbg.png'

export default function Projeto() {
    return (
        <ProjetoContainer>
            <Header />
            <BannerProjeto
                title='Nova Direção Recursos Humanos Ldta.'
                type='Projeto Freelancer'
                imgUrl={Ndbg}
            />

            <main>
                <p>Primeiro projeto Freelancer fullstack, este projeto é um site de uma agencia de empregos. Para desenvolver esse projeto, utilizei as seguintes tecnologias:<br/><br/>
                    - Banco de dados Mysql<br/>
                    - React Js<br/>
                    - Node js para o backend<br/>
                    - styled-components<br/>
                    - API google maps<br/>
                    - Figma para desenhar o layout<br/><br/>

                </p>
                <button type='button'>
                    <a href="http://novadirecaorh.com.br">ver Projeto Online</a>
                </button>
            </main>


        </ProjetoContainer>
    );
}
