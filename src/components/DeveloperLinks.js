import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function DeveloperLinks() {
    return (
        <section className="deveLinkContainer">
            <div className="container">
                <div className="devlinkCont">
                    <h2>Developer links</h2>
                    <p >The Quigon codebase is comprised of an ecosystem of open source components.</p>
                </div>
                <div className="devLinkForm">
                    <form action="https://github.com/xp-network/xpjs">
                        <div className="row">
                            <div className="col col--6">
                                <div className="inpCol">
                                    <a href="#" className="links">
                                    <label htmlFor="inp-1"><img src="/static/img/new/icons/git.svg" /></label>
                                    JavaScript API
                                    </a>
                                </div>
                            </div>
                            <div className="col col--6">
                                <div className="inpCol">
                                    <a href="https://github.com/xp-network/xp-rest" className="links">
                                    <label htmlFor="inp-2"><img src="/static/img/new/icons/git.svg" /></label>
                                    REST API (for Python, C#, C++, Java etc.)
                                    </a>
                                </div>
                            </div>
                            <div className="col col--6">
                                <div className="inpCol">
                                    <a href="https://github.com/xp-network/bridge-interface" className="links">
                                    <label htmlFor="inp-3"><img src="/static/img/new/icons/git.svg" /></label>
                                    Bridge Interface
                                    </a>
                                </div>
                            </div>
                            <div className="col col--6">
                                <div className="inpCol">
                                    <a href="https://github.com/xp-network/audits" className="links">
                                    <label htmlFor="inp-4"><img src="/static/img/new/icons/git.svg" /></label>
                                    Smart Contract Audits
                                    </a>
                                </div>
                            </div>
                            <div className="col col--6">
                                <div className="inpCol">
                                    <a href="#" className="links">
                                    <label htmlFor="inp-5"><img src="/static/img/new/icons/git.svg" /></label>
                                    staking-ui
                                    </a>
                                </div>
                            </div>
                            <div className="col col--6">
                                <div className="inpCol">
                                    <a href="https://github.com/xp-network/staker" className="links">
                                    <label htmlFor="inp-6"><img src="/static/img/new/icons/git.svg" /></label>
                                    Staker Smart Contract (XPNET)
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}