import Header from '../../components/Header';
import { ProjetoContainer } from '../../styles/ProjetoStyles';
import BannerProjeto from '../../components/BannerProjeto';

export default function Projeto() {
    return (
        <ProjetoContainer>
            <Header />
            <BannerProjeto
                title='Primeiro Portifolio'
                type='Portifolio'
                imgUrl='https://github.com/BrayanMaximiano/Portifolio2.0/blob/main/src/assets/Captura%20de%20Tela%202022-04-16%20a%CC%80s%2000.22.47.png?raw=true'
            />

            <main>
                <p>Essse foi meu primeiro portifolio desenvolvido no final de 2020.
                    Nele foram usadas as seguintes tecnologias: <br/><br/>
                    - Java script<br/>
                    - CSS3 <br/>
                    - HTML5 <br/><br/>

                    Foi tambem o primeiro projeto em que eu usei media query para fazer a parte da responsividade.
                    
                </p>
                <button type='button'>
                    <a href="https://front-dev-brayan.netlify.app">ver Projeto Online</a>
                </button>
            </main>


        </ProjetoContainer>
    );
}