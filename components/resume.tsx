/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
'use client';

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
