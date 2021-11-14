import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import type { Name, Contact } from '../lib/types';

type HeaderProps = {
  name: Name;
  contacts: Contact[];
}

export default function ResumeHeader({ name, contacts }: HeaderProps) {
  return (<>
    <div className="row" style={{height: '15px'}} />
    <div className="row top-header">
        <div className="section-1 col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <div className="align-center">
                        <div className="nameplate nameplate-vertical" style={{letterSpacing: '1px'}}>
                            <div className="font-primary nameplate-name ng-isolate-scope uppercase row" style={{fontSize: '42px'}}>
                                <div className="col-md-12">
                                    <span className="nameplate-name-value fg-black bold">{ name }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-2 col-md-12">
            <div className="row">
                <div className="col-md-12 fg-black hv-primary align-center cr-c-horizontal">
                    <div className="contact-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ng-isolate-scope inline-block" style={{fontSize: '14px'}}>
                                  {contacts.map((link: Contact, idx: number) => (
                                    <React.Fragment key={idx}>
                                      <div className="cl-outer-row ng-isolate-scope cr-ct-upper inline-left">
                                          <div className="cl-content-wrapper">
                                              <a href={link.link} target="blank" className="contact-icon-link hover-enabled inline-left">
                                                <i className={`fa ${link.icon} contact-icon`}></i> <span className="font-primary icon-link-text">{link.title}</span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className="inline-left"></div>
                                    </React.Fragment>
                                  ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>);
}
