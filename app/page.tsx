import getStaticContent from '../lib/contentData';
import Resume from '../components/resume';
import type { Resume as ResumeType } from '../lib/types';

const Index = () => {
  const { resume } = getStaticContent(['resume']) as { resume: ResumeType };

  return (
    <Resume resume={resume}/>
  );
};

export default Index;
