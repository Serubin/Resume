import { Skill } from '../lib/types';

type Props = {
  skills: Skill[];
}

export default function ResumeSkills({ skills }: Props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row section-header header-underline">
          <div className="font-primary col-md-12 fg-black uppercase medium">
            <span style={{letterSpacing: '0px'}} className="bold">Skills</span>
          </div>
          <div className="col-md-12">
            <div className="section-header-underline bg-primary-dark underline-short underline-thin">{/* Underline */}</div>
          </div>
        </div>
        <div className="skills-padding">
          {skills.map((skill: Skill, idx: number) =>
            <div className="skills-container" key={idx}>
              <span className="font-primary sg-name uppercase bold content-paragraph">{ skill.title }: </span> <span className="skills-list font-secondary content-paragraph">{ skill.items.join(', ') }</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
