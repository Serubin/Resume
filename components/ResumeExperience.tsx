import { Fragment } from 'react';
import { Experience, Position } from '../lib/types';

type Props = {
  experience: Experience[];
}

export default function ResumeSummary({ experience }: Props) {
  return (
  <div className="row">
    <div className="col-md-12">
      <div className="row section-header header-underline">
        <div className="font-primary col-md-12 fg-black uppercase medium">
          <span style={{letterSpacing: '0px'}} className="bold">Experience</span>
        </div>
        <div className="col-md-12">
          <div className="section-header-underline bg-primary-dark underline-short underline-thin">{ /* Underline */}</div>
        </div>
      </div>
      <div className="item-container row header-padding">
        <div className="col-md-12">
          { /* Job Experience */ }
          {experience.map((job: Experience, idx: number) =>
            <div className="content-group" key={idx}>
              <table className="cr-ordering-table crd-row">
                <tbody>
                  <tr>
                    <td className="crd-col">
                      <span className="font-primary inline-block item-name content-title">{ job.company }</span>
                    </td>
                    <td className="crd-col align-right right-col">
                      <div className="inline-block employer-location">
                        <span className="font-primary content-secondary-title">{ job.location }</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {job.positions.map((position: Position, idp: number) =>
                <Fragment key={idp}>
                  <table className="cr-ordering-table crd-row">
                    <tbody>
                      <tr>
                        <td className="crd-col">
                          <span className="employer-title font-primary inline-block fg-primary-dark content-secondary-title">{position.title}</span>
                        </td>
                        <td className="crd-col align-right right-col">
                          <div className="inline-block item-date">
                            <span className="date font-primary cr-date content-secondary-title">
                              <span>{position.start}</span> <span>to</span> <span>{position.end}</span>
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="font-secondary content-paragraph description content-paragraph">
                    <ul>
                      {position.desc?.map((line: string, idx: number) => <li key={idx} dangerouslySetInnerHTML={{ __html: line }} />)}
                    </ul>
                  </div>
                </Fragment>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}
