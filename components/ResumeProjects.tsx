import { Project } from '../lib/types';

type Props = {
  projects: Project[];
}

export default function ResumeProjects({ projects }: Props) {
  return (
    <div className="row projects">
      <div className="col-md-12">
        <div className="row section-header header-underline">
          <div className="font-primary col-md-12 fg-black uppercase medium">
            <span style={{letterSpacing: '0px'}} className="bold"><span className="">Projects</span></span>
          </div>
          <div className="col-md-12">
            <div className="section-header-underline bg-primary-dark underline-short underline-thin">{ /* Underline */}</div>
          </div>
        </div>
        <div className="item-container row header-padding">
          <div className="col-md-12">
            {projects.map((project: Project, idx: number) =>
              <div className="content-group" key={idx}>
                <table className="cr-ordering-table">
                  <tbody>
                    <tr>
                      <td className="crd-col">
                        <span className="font-primary content-title content-secondary-title">{ project.title }</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="font-secondary content-paragraph description content-paragraph">
                  <p dangerouslySetInnerHTML={{ __html: project.desc }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
