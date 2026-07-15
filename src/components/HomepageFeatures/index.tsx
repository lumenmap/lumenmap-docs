import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  eyebrow: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    eyebrow: 'Explore',
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
    eyebrow: 'Data',
    title: 'Live Hubble feeds',
    description: (
      <>
        Built on Stellar Hubble in BigQuery. KPI cards and period filters for 1
        day, 7 days, 30 days, or the current calendar month.
      </>
    ),
  },
  {
    eyebrow: 'Context',
    title: 'Named entities',
    description: (
      <>
        Known wallets and contracts get human-readable labels from a local
        registry, Stellar Expert, and Hubble account metadata.
      </>
    ),
  },
  {
    eyebrow: 'Community',
    title: 'Open source',
    description: (
      <>
        MIT licensed. Contribute entity labels, dashboard features, or Hubble
        query improvements.
      </>
    ),
  },
];

function Feature({title, eyebrow, description}: FeatureItem) {
  return (
    <article className={styles.feature}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <Heading as="h3" className={styles.title}>
        {title}
      </Heading>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.intro}>
          <Heading as="h2" className={styles.sectionTitle}>
            See the network, then zoom in
          </Heading>
          <p className={styles.sectionLead}>
            Explorers show one transaction at a time. LumenMap shows how Stellar
            activity is distributed — then lets you drill into the actors behind
            it.
          </p>
        </div>
        <div className={styles.grid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
