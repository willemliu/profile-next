import React from 'react';
const styles = require('./Index.module.scss');

function Index() {
    return (
        <article className={styles.index}>
            <h1>Willem Liu</h1>
            <p>person (male)</p>
            <ol>
                <li>
                    <p>is a person of Chinese descent.</p>
                    <p className={styles.example}>
                        "<strong>Willem Liu</strong>'s parents are Chinese but
                        he himself is born and raised in the Netherlands"
                    </p>
                </li>
                <li>
                    <p>
                        is a frontend developer with knowledge of
                        <ul>
                            <li>TypeScript</li>
                            <li>ReactJS</li>
                            <li>NextJS</li>
                            <li>GraphQL</li>
                            <li>Styled-Components</li>
                            <li>CSS Modules</li>
                            <li>NodeJS</li>
                            <li>Serverless</li>
                            <li>SCSS</li>
                            <li>CSS</li>
                            <li>Git</li>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                            <li>Hasura</li>
                        </ul>
                    </p>
                    <p className={styles.example}>
                        "<strong>Willem Liu</strong> is well versed in Frontend
                        Development"
                    </p>
                </li>
                <li>
                    <p>goes to the cinema quite often</p>
                    <p className={styles.example}>
                        "<strong>Willem Liu</strong> often goes to the cinema to
                        watch 1 or 2 movies a week"
                    </p>
                </li>
                <li>
                    <p>likes photography</p>
                    <p className={styles.example}>
                        "<strong>Willem Liu</strong> really strengthens the
                        existing stereotype by always taking photos"
                    </p>
                </li>
                <li>
                    <p>someone who runs regularly</p>
                    <p className={styles.example}>
                        "<strong>Willem Liu</strong> likes to go out for a run
                        from time to time"
                    </p>
                </li>
                <li>
                    <p>has rediscovered Lego</p>
                    <p className={styles.example}>
                        "<strong>Willem Liu</strong> spends way too much money
                        on Lego"
                    </p>
                </li>
                <li>
                    <p>is a guild member of jQuery removers</p>
                    <p className={styles.example}>
                        "Legends say that <strong>Willem Liu</strong> has rid a
                        website of all jQuery dependencies"
                    </p>
                </li>
                <li>
                    <p>is always on the lookout for good coffee places</p>
                    <p className={styles.example}>
                        "They say that <strong>Willem Liu</strong> is still
                        roaming the earth in search for coffee"
                    </p>
                </li>
            </ol>
        </article>
    );
}

export default Index;
