import type { NextPage } from 'next'
import getStaticContent from '../lib/contentData';
import Resume from '../components/resume';

const Index: NextPage = ({ resume }) => {
  return (
    <Resume resume={resume}/>
  )
}

export const getStaticProps = async () => {
  const data = getStaticContent(['resume']);

  return {
    props: {
      ...data,
    }
  };
}

export default Index;
