import React from 'react';
import { TerminalAnchor } from '../src/components/buttons/TerminalButton';
import Head from 'next/head';
const styles = require('./projects.module.scss');

function Projects() {
    return (
        <article className={styles.projects}>
            <Head>
                <title>Projects - Willem Liu</title>
            </Head>
            <h1>Projects</h1>
            <p>Some of the projects I've worked on:</p>
            <section>
                <header className={styles.thead}>
                    <h2>Websites</h2>
                </header>
                <div>
                    <TerminalAnchor
                        href="https://www.moviesom.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        > MovieSom
                    </TerminalAnchor>
                    <span>
                        <p>
                            MovieSom is a movie and TV series information
                            database created for the most die-hard movie
                            enthusiast. It allows you to keep track of what
                            you've watched, how often you've watched it. Who
                            recommended you a movie and when. You can catalogue
                            the movies and tv series you own on DVD, Blu-ray and
                            more so you'll always know which movies you already
                            own.
                        </p>
                    </span>
                </div>
                <div>
                    <TerminalAnchor
                        href="https://news.moviesom.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        > MovieSom News
                    </TerminalAnchor>
                    <span>
                        <p>
                            MovieSom News is a website with which you can keep
                            up-to-date with the latest news surrounding Movies
                            and Tv Shows. The website is minimalistic by design
                            so you can focus on the news. Open the app with a
                            modern browser on your Android device and you'll be
                            given the option to Add it to your homescreen. If
                            you do so, your browser will create an app-icon on
                            your homescreen with which you can start MovieSom
                            News quickly.
                        </p>
                    </span>
                </div>
                <div>
                    <TerminalAnchor
                        href="https://fd.nl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        > FD.nl
                    </TerminalAnchor>
                    <span>
                        <p>
                            FD.nl publishes the latest news and information
                            about the stock exchange, financial world, economy,
                            politics and business on a continuous basis.
                            Visitors can compile their own personalised news
                            page with the aid of keywords. All news messages,
                            analyses, background articles and interviews created
                            by the FD editors are available immediately to
                            visitors.
                        </p>
                    </span>
                </div>
                <div>
                    <TerminalAnchor
                        href="https://bnr.nl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        > BNR.nl
                    </TerminalAnchor>
                    <span>
                        <p>
                            BNR always broadcasts the latest news, but also
                            touches upon deeper issues and aspects. Listen
                            whenever you want, BNR is an on demand radio
                            station. BNR creates news for curious people who
                            look and listen further. Top-tier journalism with
                            intelligent programmes, high-profile presenters,
                            exciting debates, and playful entertainment.
                        </p>
                    </span>
                </div>
                <div>
                    <TerminalAnchor
                        href="https://github.com/willemliu?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        > more projects
                    </TerminalAnchor>
                    <span>
                        <p>
                            Find out about more of my projects on my Github
                            profile.
                        </p>
                    </span>
                </div>
            </section>

            <section>
                <header className={styles.thead}>
                    <h2>Browser extensions</h2>
                </header>
                <div>
                    <TerminalAnchor
                        href="https://github.com/FDMediagroep/fd-cypress-recorder"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        > Fd Cypress Recorder
                    </TerminalAnchor>
                    <span>
                        <p>
                            Fd Cypress Recorder captures user interactions and
                            generates Cypress test code.
                        </p>
                        <p>
                            End-to-end tests can become obsolete fast because of
                            changing products which makes maintenance of such
                            tests a time-consuming and high-effort job. This
                            plugin makes it easier to both create and maintain
                            said tests. Fd Cypress Recorder allows you to easily
                            create Cypress end-to-end tests without having to
                            type any code.
                        </p>
                        <p>
                            Cypress code is automatically generated via the
                            functions provided by the plugin.
                        </p>
                        <p>
                            Noteworthy: Cypress.io, React, React Beautiful DND
                        </p>
                    </span>
                </div>
                <div>
                    <TerminalAnchor
                        href="https://github.com/willemliu/universal-comments-plugin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        > Universal Comments
                    </TerminalAnchor>
                    <span>
                        <p>
                            A comment plugin which adds an overlay to the
                            website you're visiting.
                        </p>
                        <p>
                            This allows you to submit comments to any website
                            you visit. Other people using this plugin can read
                            your comments left on that page. You can create
                            circles in which you can post comments. You can
                            invite other people you know to join your circle.
                            Only you and other members can see the comments
                            posted there.
                        </p>
                        <p>
                            This makes it possible to make separate circles for
                            your colleagues, friends and family.
                        </p>
                        <p>
                            Noteworthy: GraphQL, Hasura, Heroku, React, NextJS,
                            Zeit
                        </p>
                    </span>
                </div>
                <div>
                    <TerminalAnchor
                        href="https://github.com/willemliu?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        > more projects
                    </TerminalAnchor>
                    <span>
                        <p>
                            Find out about more of my projects on my Github
                            profile.
                        </p>
                    </span>
                </div>
            </section>
        </article>
    );
}

export default Projects;
