import type { NextPage } from 'next'
import getStaticContent from '../lib/contentData';
import Resume from '../components/resume';
import type { Resume as ResumeType } from '../lib/types';

type Props = {
  resume: ResumeType;
};

const Index: NextPage<Props> = ({ resume }) => {
  return (
    <Resume resume={resume}/>
  )
}

export const getStaticProps = async () => {
  const data: any = getStaticContent(['resume']);

  return {
    props: {
      ...data,
    }
  };
}

export default Index;
