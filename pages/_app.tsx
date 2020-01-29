import React, { useEffect } from 'react';
import './styles.scss';
import Head from 'next/head';
import { Menu } from '../src/components/menu/Menu';
import { Footer } from '../src/components/footer/Footer';
import { Konami } from '../src/utils/Konami';
import { Scanline } from '../src/components/scanline/Scanline';

export default function MyApp({ Component, pageProps }: any) {
    useEffect(() => {
        new Konami();
    }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="default-src 'self' * data:; img-src * data:; style-src 'self' * 'unsafe-inline'; script-src 'self' * 'unsafe-inline' 'unsafe-eval';"
                />
                <meta name="uc:disabled" content="true" />

                <title>Willem Liu</title>
            </Head>
            <Scanline />
            <Menu />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
