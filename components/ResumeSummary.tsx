import { Objective } from '../lib/types';

type Props = {
  objective: Objective;
}

export default function ResumeSummary({ objective }: Props) {
  return (
    <div className="row summary">
      <div className="col-md-12">
        <div className="row section-header header-underline">
          <div className="font-primary col-md-12 fg-black uppercase medium">
            <span style={{letterSpacing: '0px'}} className="bold">Summary</span>
          </div>
          <div className="col-md-12">
            <div className="section-header-underline bg-primary-dark underline-short underline-thin">{ /* Underline */}</div>
          </div>
        </div>
        <div className="item-container row header-padding">
          <div className="col-md-12">
            <div className="">
              <div className="">
                <div className="content-group">
                  <div className="font-secondary content-paragraph content-paragraph">
                    <p>
                      { objective }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
