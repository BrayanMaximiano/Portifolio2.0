import Header from '../../components/Header';
import { ProjetoContainer } from '../../styles/ProjetoStyles';
import BannerProjeto from '../../components/BannerProjeto';

export default function Projeto() {
    return (
        <ProjetoContainer>
            <Header />
            <BannerProjeto
                title='Ecomerce'
                type='Loja de roupas'
                imgUrl='https://vendamodaonline.com.br/wp-content/uploads/2020/01/Como-montar-uma-loja-virtual-de-roupas-1024x682.png'
            />

            <main>
                <p>Site de uma loja de roupas virtual. Este projeto e apenas o front end do site e no momento a responsividade nao esta funcionando, logo, funciona apenas em navegadores.  <br/><br/>
                    tecnologias usadas:<br/><br/>
                    - Next Js<br/>
                    - Material ui icons<br/>
                    - styled-components<br/>
                    - React Hooks<br/>
                    - Recomendações de filmes/séries<br/><br/>

                </p>
                <button type='button'>
                    <a href="https://ecomercetestfrontdevbrayan.vercel.app/">ver Projeto Online</a>
                </button>
            </main>


        </ProjetoContainer>
    );
}