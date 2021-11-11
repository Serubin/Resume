import { School } from '../lib/types';

type Props = {
  education: School[];
}

export default function ResumeProjects({ education }: Props) {
  return (
    <div className="row">
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
                <div className="font-primary content-title" style={{fontSize: '17px'}}>
                  {school.title}
                </div>
                <div className="font-primary fg-primary-dark" style={{fontSize: '15px'}}>
                  {school.degree }
                </div>
                <div className="font-secondary" style={{fontSize: '12px'}} dangerouslySetInnerHTML={{ __html: school.desc.join('<br />') }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
