/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
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
        <link href='https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css' rel='stylesheet' />
        <link rel='stylesheet' href='styles/main.css' media='all' />
        <link rel='stylesheet' href='styles/print.css' media='print' />
        <link rel='stylesheet' href='styles/custom.css' media='all' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Roboto:wght@400;700&family=Varela+Round&display=swap' rel='stylesheet' />
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
