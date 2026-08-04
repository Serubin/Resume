import { Award } from '../lib/types';

type Props = {
  awards: Award[];
}

export default function ResumeAwards({ awards }: Props) {
  return (
    <div className="row awards">
      <div className="col-md-12">
        <div className="row section-header header-underline">
          <div className="font-primary col-md-12 fg-black uppercase medium">
            <span style={{letterSpacing: '0px'}} className="bold">Awards</span>
          </div>
          <div className="col-md-12">
            <div className="section-header-underline bg-primary-dark underline-short underline-thin">{/* Underline */}</div>
          </div>
        </div>
        <div className="item-container row header-padding">
          <div className="col-md-12">
            {awards.map((award: Award, idx: number) =>
              <div className="content-group" key={idx}>
                <table className="cr-ordering-table">
                  <tbody>
                    <tr>
                      <td className="crd-col">
                        <span className="font-primary inline-block item-name content-secondary-title">{award}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
