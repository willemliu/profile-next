import React from 'react';
const styles = require('./Index.module.scss');

function Index() {
    return (
        <article className={styles.index}>
            <h1>Willem Liu</h1>
            <p>person</p>
            <ol>
                <li>
                    <div>a person of Chinese descent.</div>
                    <div className={styles.example}>
                        "<strong>Willem Liu</strong>'s parents are Chinese but
                        he himself is born and raised in the Netherlands"
                    </div>
                </li>
                <li>
                    <div>
                        a frontend developer with knowledge of
                        <ul>
                            <li>TypeScript</li>
                            <li>ReactJS</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                            <li>Serverless</li>
                            <li>CSS / SCSS / CSS Modules / CSS-in-JS</li>
                        </ul>
                    </div>
                    <div className={styles.example}>
                        "<strong>Willem Liu</strong> is well versed in Frontend
                        Development"
                    </div>
                </li>
                <li>
                    <div>goes to the cinema quite often</div>
                    <div className={styles.example}>
                        "<strong>Willem Liu</strong> often goes to the cinema to
                        watch 1 or 2 movies a week"
                    </div>
                </li>
                <li>
                    <div>likes photography</div>
                    <div className={styles.example}>
                        "<strong>Willem Liu</strong> really strengthens the
                        existing stereotype by always taking photos"
                    </div>
                </li>
                <li>
                    <div>someone who runs regularly</div>
                    <div className={styles.example}>
                        "<strong>Willem Liu</strong> likes to go out for a run
                        from time to time"
                    </div>
                </li>
                <li>
                    <div>has rediscovered Lego</div>
                    <div className={styles.example}>
                        "<strong>Willem Liu</strong> spends way too much money
                        on Lego"
                    </div>
                </li>
            </ol>
        </article>
    );
}

export default Index;
