import React from 'react';
const styles = require('./Scanline.module.scss');

function Scanline() {
    return (
        <div className={styles.scanline}>
            <div className="laser"></div>
        </div>
    );
}

export { Scanline };
