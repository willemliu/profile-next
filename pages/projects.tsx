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
                        title="MovieSom"
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
                        title="MovieSom News"
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
                        title="FD.nl"
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
                        href="https://design-system.fd.nl"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="FD Design System"
                    >
                        > FD Design System
                    </TerminalAnchor>
                    <span>
                        <p>
                            FD Design System consists of 3 products. A website
                            which documents the components used on FD.nl.
                            HTML/CSS code generator for the components for use
                            outside of FD.nl e.g. marketing pages. And a
                            component library which can be installed in a
                            React.js/Next.js project.
                        </p>
                    </span>
                </div>
                <div>
                    <TerminalAnchor
                        href="https://bnr.nl"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="BNR.nl"
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
                        title="more projects"
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
