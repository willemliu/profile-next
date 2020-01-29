import React from 'react';
import Link from 'next/link';
const styles = require('./TerminalButton.module.scss');

function TerminalLink(props: any) {
    return (
        <Link {...props} passHref={true}>
            {props.children}
        </Link>
    );
}

function TerminalAnchor(props: any) {
    return (
        <a {...props} className={`${styles.button} ${props.className ?? ''}`}>
            {props.children}
        </a>
    );
}

export { TerminalLink, TerminalAnchor };
