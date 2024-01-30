import { School } from '../lib/types';

type Props = {
  education: School[];
}

export default function ResumeEducation({ education }: Props) {
  return (
    <div className="row education">
      <div className="col-md-12">
        <div className="row section-header header-underline">
          <div className="font-primary col-md-12 fg-black uppercase medium">
            <span style={{letterSpacing: '0px'}} className="bold">Education</span>
          </div>
          <div className="col-md-12">
            <div className="section-header-underline bg-primary-dark underline-short underline-thin">{/* Underline */}</div>
          </div>
        </div>
        <div className="item-container row header-padding">
          <div className="col-md-12">
            {education.map((school: School, idx: number) =>
              <div className="content-group" key={idx}>
                <div className="font-primary content-title">
                  {school.title}
                </div>
                <div className="font-primary fg-primary-dark content-secondary-title">
                  {school.degree }
                </div>
                <div className="font-secondary content-paragraph" dangerouslySetInnerHTML={{ __html: school.desc.join('<br />') }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
