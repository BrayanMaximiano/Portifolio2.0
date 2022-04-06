import ConhecimentoItem from './ConhecimentoItem';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaPython } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title='HTML' icon={<AiFillHtml5 />} />
        <ConhecimentoItem title='CSS' icon={<FaCss3Alt />} />
        <ConhecimentoItem title='JAVA SCRIPT' icon={<IoLogoJavascript />} />
        <ConhecimentoItem title='REACT JS' icon={<FaReact />} />
        <ConhecimentoItem title='PYTHON' icon={<FaPython />} />
        
      </section>
    </Container>
  );
}

export default Conhecimentos;