import React, { useState, useEffect } from 'react';
import { TerminalLink, TerminalAnchor } from '../buttons/TerminalButton';
import Router from 'next/router';

const styles = require('./Menu.module.scss');

function Menu() {
    const [current, setCurrent] = useState('');

    useEffect(() => {
        setCurrent(window.location.pathname);

        Router.events.on('routeChangeComplete', (url) => {
            setCurrent(url);
        });
    }, []);

    return (
        <header className={styles.menu}>
            <TerminalLink href={'/'} as={'/'}>
                <TerminalAnchor
                    className={current === '/' ? styles.selected : ''}
                    title="Home"
                >
                    > Home
                </TerminalAnchor>
            </TerminalLink>
            <TerminalLink href={'/projects'} as={'/projects'}>
                <TerminalAnchor
                    className={current === '/projects' ? styles.selected : ''}
                    title="Projects"
                >
                    > My projects
                </TerminalAnchor>
            </TerminalLink>
            <TerminalLink href={'/about'} as={'/about'}>
                <TerminalAnchor
                    className={current === '/about' ? styles.selected : ''}
                    title="About"
                >
                    > About
                </TerminalAnchor>
            </TerminalLink>
        </header>
    );
}

export { Menu };
