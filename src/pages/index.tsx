import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <div>
          <Heading as="h1" className={styles.brand}>
            {siteConfig.title}
          </Heading>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <div className={styles.actions}>
            <Link
              className={clsx('button button--lg', styles.primaryCta)}
              to="/docs/guide/getting-started">
              Get started
            </Link>
            <Link
              className={clsx('button button--lg', styles.secondaryCta)}
              to="/docs/intro">
              Read the docs
            </Link>
          </div>
          <ul className={styles.meta}>
            <li>Hubble / BigQuery</li>
            <li>Open source · MIT</li>
            <li>Stellar mainnet</li>
          </ul>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.treemap}>
            <div
              className={clsx(styles.tile, styles.tileSoroban)}
              data-label="Soroban"
            />
            <div
              className={clsx(styles.tile, styles.tilePayments)}
              data-label="Payments"
            />
            <div
              className={clsx(styles.tile, styles.tileDex)}
              data-label="DEX"
            />
            <div className={styles.tileTrust}>
              <span />
              <span />
            </div>
            <div
              className={clsx(styles.tile, styles.tileOther)}
              data-label="Network share"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentation"
      description="Stellar network activity dashboard. Daily volume, active wallets, top dApps, and hierarchical treemap analytics.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
