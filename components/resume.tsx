import Head from 'next/head';

import { Resume as ResumeType } from '../lib/types';
import PageWrapper from './PageWrapper';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';

import ResumeHeader from './ResumeHeader';
import ResumeSummary from './ResumeSummary';
import ResumeExperience from './ResumeExperience';
import ResumeProjects from './ResumeProjects';
import ResumeLinks from './ResumeLinks';
import ResumeSkills from './ResumeSkills';
import ResumeEducation from './ResumeEducation';
import ResumeAccomplishments from './ResumeAccomplishments';

type ResumeProps = {
  resume: ResumeType
}

export default function Resume({ resume }: ResumeProps) {
  const {
    name,
    contacts,
    objective,
    links,
    skills,
    education,
    accomplishments,
    experience,
    projects
  } = resume;

  return (
    <PageWrapper>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width" />
        <meta name="robots" content="noindex" />
      </Head>
      <ResumeHeader name={name} contacts={contacts} />
      <div className="row">
        <SidePanel>
          <ResumeLinks links={links} />
          <ResumeSkills skills={skills} />
          <ResumeEducation education={education} />
          <ResumeAccomplishments accomplishments={accomplishments} />
        </SidePanel>
        <MainPanel>
          <ResumeSummary objective={objective} />
          <ResumeExperience experience={experience} />
          <ResumeProjects projects={projects} />
        </MainPanel>
      </div>
    </PageWrapper>
  );
}
