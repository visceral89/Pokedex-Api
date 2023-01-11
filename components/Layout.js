import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Layout.module.css'

const Layout = ({children,title}) => {
  return (
    <div>
    <Head>
        <title>{title}</title>
        <meta name="description" content="A sample Pokedex app to learn API's" />
        <link rel="icon" href="/pokemon-icon.ico"/>
    </Head>

    <header className={styles.header}>
        <Link href="/">
            <h1>{title}</h1>
        </Link>
    </header>

    <main className={styles.main}>
        {children}
    </main>

    <footer className={styles.footer}>
        <Link href="/">
            <Image src="/pokemon-icon.webp" alt="Pokemon Logo" width="100" height="100" />
        </Link>
    </footer>
</div>
  )
}

export default Layout

   

