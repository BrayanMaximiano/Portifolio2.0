import {
    AiOutlineInstagram,
    AiOutlineGithub,
    AiFillLinkedin
  } from 'react-icons/ai';
  import { Container } from './styles';
  import { BsFillArrowUpSquareFill } from 'react-icons/bs'
  
  function Footer() {
    function handleRedirect(url: string) {
      window.open(url);
    }
  
    function handleScrollTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  
    return (
      <Container>
        <div className="container">
          <button type="button" onClick={handleScrollTop}>
            Voltar ao topo <BsFillArrowUpSquareFill/>
          </button>
          <section>
            <AiFillLinkedin onClick={()=> handleRedirect('https://www.linkedin.com/in/brayanmaximiano/')}/>
            <AiOutlineGithub onClick={()=> handleRedirect('https://github.com/BrayanMaximiano')}/>
            <AiOutlineInstagram onClick={()=> handleRedirect('https://www.instagram.com/brayan.igor/')}/>
          </section>
            
        </div>
      </Container>
    );
  }
  
  export default Footer;