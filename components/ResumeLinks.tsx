import { Link } from '../lib/types';

type Props = {
  links: Link[];
}

export default function ResumeLink({ links }: Props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row section-header header-underline">
          <div className="font-primary col-md-12 fg-black uppercase medium">
            <span style={{letterSpacing: '0px'}} className="bold"><span className="">Links</span></span>
          </div>
          <div className="col-md-12">
            <div className="section-header-underline bg-primary-dark underline-short underline-thin">{/* Underline */}</div>
          </div>
        </div>
        <div className="item-container row header-padding">
          <div className="col-md-12">
            {links.map((link: Link, idx: number) =>
              <div className="content-group" key={idx}>
                <table className="cr-ordering-table crd-row">
                  <tbody>
                    <tr>
                      <td className="crd-col">
                        <a href={link.link} target="_blank" rel="noopener noreferrer" className="link"><span className="font-primary inline-block item-name" style={{fontSize: '15px'}}>{ link.title }</span></a>
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
