import React from 'react';
import { TerminalAnchor } from '../src/components/buttons/TerminalButton';
const styles = require('./about.module.scss');

function About() {
    return (
        <article className={styles.about}>
            <h1>About</h1>
            <p>Features of this website:</p>
            <ul>
                <li>Single-Page-App</li>
                <li>Each endpoint deployed as serverless function</li>
                <li>Easter eggs</li>
            </ul>
            <p>This portfolio website is built using the following stack:</p>
            <ul>
                <li>
                    <TerminalAnchor
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        title="ReactJS"
                    >
                        ReactJS
                    </TerminalAnchor>
                </li>
                <li>
                    <TerminalAnchor
                        href="https://preactjs.com/"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        title="Preact"
                    >
                        Preact (drop-in replacement for React)
                    </TerminalAnchor>
                </li>
                <li>
                    <TerminalAnchor
                        href="https://nextjs.org"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        title="NextJS"
                    >
                        NextJS
                    </TerminalAnchor>
                </li>
                <li>
                    <TerminalAnchor
                        href="https://nextjs.org/docs/advanced-features/customizing-postcss-config#css-modules"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        title="CSS Modules"
                    >
                        CSS Modules (with SCSS pre-processor)
                    </TerminalAnchor>
                </li>
                <li>
                    <TerminalAnchor
                        href="https://vercel.com"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        title="Zeit Now"
                    >
                        <s>Zeit Now</s> Vercel
                    </TerminalAnchor>
                </li>
            </ul>
        </article>
    );
}

export default About;
