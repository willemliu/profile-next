import React, { useState, useEffect } from 'react';
import { TerminalLink, TerminalAnchor } from '../buttons/TerminalButton';
const styles = require('./Menu.module.scss');

function Menu() {
    const [current, setCurrent] = useState('');

    useEffect(() => {
        console.log(window.location.pathname);
        setCurrent(window.location.pathname);
    }, []);

    function handleClick(pathname?: string) {
        setCurrent(pathname);
    }

    return (
        <header className={styles.menu}>
            <TerminalLink href={'/'} as={'/'}>
                <TerminalAnchor
                    onClick={handleClick.bind(null, '/')}
                    className={current === '/' ? styles.selected : ''}
                >
                    > Home
                </TerminalAnchor>
            </TerminalLink>
            <TerminalLink href={'/projects'} as={'/projects'}>
                <TerminalAnchor
                    onClick={handleClick.bind(null, '/projects')}
                    className={current === '/projects' ? styles.selected : ''}
                >
                    > My projects
                </TerminalAnchor>
            </TerminalLink>
            <TerminalLink href={'/about'} as={'/about'}>
                <TerminalAnchor
                    onClick={handleClick.bind(null, '/about')}
                    className={current === '/about' ? styles.selected : ''}
                >
                    > About
                </TerminalAnchor>
            </TerminalLink>
        </header>
    );
}

export { Menu };
