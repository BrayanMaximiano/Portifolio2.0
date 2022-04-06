import Header from '../../components/Header';
import { ProjetoContainer } from '../../styles/ProjetoStyles';
import BannerProjeto from '../../components/BannerProjeto';

export default function Projeto() {
    return (
        <ProjetoContainer>
            <Header />
            <BannerProjeto
                title='Spotify Clone'
                type='website clone'
                imgUrl='https://t2.tudocdn.net/493527?w=1920'
            />

            <main>
                <p>Projeto Clone do site do aplicativo de musicas Spotify.
                     Neste projeto, foram ultilizadas as seguintes tecnologias: <br/><br/>
                    - Java script<br/>
                    - CSS3 <br/>
                    - HTML5 <br/>
                    
                </p>
                <button type='button'>
                    <a href="#">ver Projeto Online</a>
                </button>
            </main>


        </ProjetoContainer>
    );
}