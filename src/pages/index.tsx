import { GetStaticProps } from 'next';
import Aos from 'aos';
import { useEffect } from 'react';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';



interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  
  useEffect(()=>{
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <HomeContainer >
      <Head>
        <title>Home | Front dev Brayan</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        
      </Head>

      <Header />

      <main className="container">
        <HomeHero />
        <Projetos projetos={projetos} />
        <Conhecimentos />
        <FormContato />
      </main>

      <Footer />
    </HomeContainer>
  );
}