import React from 'react';
import { TerminalAnchor } from '../buttons/TerminalButton';
const styles = require('./Footer.module.scss');

function Footer() {
    return (
        <footer className={styles.footer}>
            <span>&copy;{new Date().getFullYear()}</span>
            <span> | </span>
            <span>
                <TerminalAnchor
                    href="https://github.com/willemliu"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    title="My Github"
                >
                    My Github
                </TerminalAnchor>
            </span>
        </footer>
    );
}

export { Footer };
