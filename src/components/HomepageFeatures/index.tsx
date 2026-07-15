import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Hierarchical treemap',
    description: (
      <>
        Drill from broad categories into operation types, Soroban functions,
        wallets, and contracts. Tile size is share of activity; color is
        category.
      </>
    ),
  },
  {
    title: 'Live Hubble data',
    description: (
      <>
        Powered by Stellar Hubble on BigQuery. KPI cards and period filters for
        1 day, 7 days, 30 days, or the current calendar month.
      </>
    ),
  },
  {
    title: 'Named entities',
    description: (
      <>
        Known wallets and contracts get human-readable labels from a local
        registry, Stellar Expert, and Hubble account metadata.
      </>
    ),
  },
  {
    title: 'Open source',
    description: (
      <>
        MIT licensed. Contribute entity labels, dashboard features, or Hubble
        query improvements.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
