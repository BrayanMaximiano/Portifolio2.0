import Head from "next/head";
import Header from "../../components/Header";
import ProjetoItem from "../../components/ProjetoItem";
import { ProjetosContainer } from "../../styles/ProjetosStyle";


export default function Projetos() {
    return (
        <ProjetosContainer >
            <Head >
                <title>Projetos | Front Dev Brayan</title>
            </Head>
            <Header />
            <main className="container" data-aos="fade-up">
                <ProjetoItem

                    title="netflix Clone"
                    type="Website clone"
                    slug="Netflix"
                    imgUrl="https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/09/Netflix-1200x900-1.jpg" />
                <ProjetoItem

                    title="netflix Clone"
                    type="Website clone"
                    slug="Netflix"
                    imgUrl="https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/09/Netflix-1200x900-1.jpg" />

                <ProjetoItem

                    title="Primeiro Portifolio"
                    type="Portfolio"
                    slug="Portfolio"
                    imgUrl="https://github.com/BrayanMaximiano/Portifolio2.0/blob/main/src/assets/Captura%20de%20Tela%202022-04-16%20a%CC%80s%2000.22.47.png?raw=true" />

                <ProjetoItem

                    title="UrStore"
                    type="Ecomerce"
                    slug="Ecommerce"
                    imgUrl="https://vendamodaonline.com.br/wp-content/uploads/2020/01/Como-montar-uma-loja-virtual-de-roupas-1024x682.png" />


            </main>
        </ProjetosContainer>
    )
}