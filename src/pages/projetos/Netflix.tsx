import Header from '../../components/Header';
import { ProjetoContainer } from '../../styles/ProjetoStyles';
import BannerProjeto from '../../components/BannerProjeto';

export default function Projeto() {
    return (
        <ProjetoContainer>
            <Header />
            <BannerProjeto
                title='Netflix Clone'
                type='website clone'
                imgUrl='https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/09/Netflix-1200x900-1.jpg'
            />

            <main>
                <p>UI Clone do serviço de streaming - Netflix, com o uso da API fornecida pelo The Movie Database. Esse Projeto foi desenvolvido durante a live ministrada pelo professor Boenick Lacerda no Youtube.
                    Nesse projeto desenvolvi habilidade com react Hooks como "useState" e "useEffect" do react, foi usado o TypeScript e aprendi tambem o uso de APIs em um projeto pratico. <br/><br/>
                    Nesse projeto voce pode encontrar:<br/><br/>
                    - Filme Destaque<br/>
                    - Filmes Originais Netflix<br/>
                    - Filmes divididos em categorias: romance, ação, etc<br/>
                    - Setas de rolagem da lista<br/>
                    - Recomendações de filmes/séries<br/><br/>

                </p>
                <button type='button'>
                    <a href="https://fakeflix-front-dev-brayan-project.netlify.app/">ver Projeto Online</a>
                </button>
            </main>


        </ProjetoContainer>
    );
}