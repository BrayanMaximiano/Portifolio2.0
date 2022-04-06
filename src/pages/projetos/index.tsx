import Head from "next/head";
import Header from "../../components/Header";
import ProjetoItem from "../../components/ProjetoItem";
import { ProjetosContainer } from "../../styles/ProjetosStyle";


export default function Projetos(){
    return(
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
                imgUrl="https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/09/Netflix-1200x900-1.jpg"/>
                <ProjetoItem 
                
                title="Spotify Clone" 
                type="Website clone" 
                slug="Spotify" 
                imgUrl="https://th.bing.com/th/id/R.c5db840096acc1430a8f1ef4a5da3e0a?rik=5C6nd0G58nAuTw&pid=ImgRaw&r=0"/>
                

            </main>
        </ProjetosContainer>
    )
}